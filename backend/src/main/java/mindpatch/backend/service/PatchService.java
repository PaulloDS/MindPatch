package mindpatch.backend.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.PatchCreateDTO;
import mindpatch.backend.dto.PatchDTO;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.RoleName;
import mindpatch.backend.model.Tag;
import mindpatch.backend.model.User;
import mindpatch.backend.model.Visibilidade;
import mindpatch.backend.repository.CommentRepository;
import mindpatch.backend.repository.PatchRepository;
import mindpatch.backend.repository.TagRepository;
import mindpatch.backend.repository.UserRepository;
import mindpatch.backend.utils.PatchSpecifications;

@Service
@RequiredArgsConstructor
public class PatchService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PatchRepository patchRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private TagService tagService;

    @Autowired
    private BadgeService badgeService;

    public List<PatchDTO> listarPublicos() {
        return patchRepository.findByVisibilidade(Visibilidade.PUBLICO)
                .stream()
                .map(PatchDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public List<PatchDTO> listarMeusPatches(String emailUsuario) {
        Long id = userService.findByEmail(emailUsuario).getId();

        return patchRepository.findByAutorId(id)
                .stream()
                .map(PatchDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public PatchDTO buscarPorId(Long id, String emailUsuario) {
        User user = userService.findByEmail(emailUsuario);

        boolean isAdmin = user.getRoles().stream()
                    .anyMatch(role -> role.getName() == RoleName.ROLE_ADMIN);

        Patch patch = patchRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Patch não encontrado!"));
        
        boolean isAutor = patch.getAutor() != null && patch.getAutor().getEmail().equals(emailUsuario);
        boolean isPublico = patch.getVisibilidade() == Visibilidade.PUBLICO;

        if (!isAdmin && !isPublico && !isAutor) {
            throw new AccessDeniedException("Sem permissão!");
        }

        return PatchDTO.fromEntity(patch);
    }

    public List<PatchDTO> listarTodos(String emailUsuario) {
        User user = userService.findByEmail(emailUsuario);

        return patchRepository.findAll()
                .stream()
                .map(PatchDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public List<PatchDTO> buscarPorFiltros(String titulo, String codigo, String autor, String tag, String visibilidade, String emailUsuario) {

        User user = userService.findByEmail(emailUsuario);
        boolean isAdmin = user.getRoles().stream()
            .anyMatch(role -> role.getName() == RoleName.ROLE_ADMIN);

        Specification<Patch> spec = PatchSpecifications.comFiltros(titulo, codigo, autor, tag, visibilidade, isAdmin, emailUsuario);

        return patchRepository.findAll(spec).stream()
            .map(PatchDTO::fromEntity)
            .collect(Collectors.toList());
    }

    public PatchDTO criar(PatchCreateDTO dto, String emailUsuario) {
        User autor = userService.findByEmail(emailUsuario);

        Set<Tag> tagsSelecionadas = tagRepository.findAllById(dto.getTagIds()).stream().collect(Collectors.toSet());

        Patch patch = Patch.builder()
            .titulo(dto.getTitulo())
            .descricao(dto.getDescricao())
            .codigo(dto.getCodigo())
            .aprendizado(dto.getAprendizado())
            .visibilidade(dto.getVisibilidade())
            .autor(autor)
            .tags(tagsSelecionadas)
            .build();

        patch = patchRepository.save(patch);
        badgeService.atribuirBadges(autor);

        return PatchDTO.fromEntity(patch);
    }

    public PatchDTO atualizar(Long id, PatchCreateDTO dto, String emailUsuario) {
        Patch patch = patchRepository.findById(id)       
                    .orElseThrow(() -> new RuntimeException("Patch não encontrado!"));

        User usuario = userService.findByEmail(emailUsuario);

        if(!patch.getAutor().getId().equals(usuario.getId())) {
            throw new RuntimeException("Sem permissão!");
        }

        patch.setTitulo(dto.getTitulo());
        patch.setDescricao(dto.getDescricao());
        patch.setCodigo(dto.getCodigo());
        patch.setAprendizado(dto.getAprendizado());
        patch.setVisibilidade(dto.getVisibilidade());

        if (dto.getTagIds() != null) {
            patch.setTags(tagService.getTagsByIds(dto.getTagIds()));
        }

        Patch atualizado = patchRepository.save(patch);
        return PatchDTO.fromEntity(atualizado);
    }

    @Transactional
    public void deletar(Long id, String emailUsuario) {
        Patch patch = patchRepository.findById(id)       
                    .orElseThrow(() -> new RuntimeException("Patch não encontrado!"));
                    
        User usuario = userService.findByEmail(emailUsuario);

        boolean isAdmin = usuario.getRoles().stream()
            .anyMatch(role -> role.getName() == RoleName.ROLE_ADMIN);
        
        boolean isAutor = patch.getAutor().getId().equals(usuario.getId());

        if (!isAdmin && !isAutor) {
            throw new RuntimeException("Sem permissão!");
        }
        commentRepository.deleteByPatchId(id);
        patchRepository.delete(patch);
    }

    public List<PatchDTO> buscarMeusPatchesComFiltros(String email, String titulo, String codigo, String tag, String visibilidade) {
    User usuario = userRepository.findByEmail(email)
        .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

    Specification<Patch> spec = Specification.where((root, query, cb) -> 
        cb.equal(root.get("autor").get("id"), usuario.getId()) // apenas do usuário
    );

    if (titulo != null && !titulo.isEmpty()) {
        spec = spec.and((root, query, cb) ->
            cb.like(cb.lower(root.get("titulo")), "%" + titulo.toLowerCase() + "%")
        );
    }

    if (codigo != null && !codigo.isEmpty()) {
        spec = spec.and((root, query, cb) ->
            cb.like(cb.lower(root.get("codigo")), "%" + codigo.toLowerCase() + "%")
        );
    }

    if (tag != null && !tag.isEmpty()) {
        spec = spec.and((root, query, cb) ->
            cb.like(cb.lower(root.join("tags").get("nome")), "%" + tag.toLowerCase() + "%")
        );
    }

    if (visibilidade != null && !visibilidade.isEmpty()) {
        spec = spec.and((root, query, cb) ->
            cb.equal(cb.lower(root.get("visibilidade")), visibilidade.toLowerCase())
        );
    }

    List<Patch> patches = patchRepository.findAll(spec);
    return patches.stream().map(PatchDTO::fromEntity).toList();
}

}
