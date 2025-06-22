package mindpatch.backend.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.TagCreateDTO;
import mindpatch.backend.dto.TagDTO;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.Tag;
import mindpatch.backend.repository.PatchRepository;
import mindpatch.backend.repository.TagRepository;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    private final PatchRepository patchRepository;

    public TagDTO criar(TagCreateDTO dto) {
        if (tagRepository.existsByNomeIgnoreCase(dto.getNome())) {
            throw new RuntimeException("Tag já existe");
        }
        Tag tag = Tag.builder()
                .nome(dto.getNome())
                .build();
        return TagDTO.fromEntity(tagRepository.save(tag));
    }

    public List<TagDTO> listarTodas() {
        return tagRepository.findAll().stream()
                .map(TagDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public Set<Tag> getTagsByIds(List<Long> tagIds) {
        return new HashSet<>(tagRepository.findAllById(tagIds));
    }

    public TagDTO atualizar(Long id, TagCreateDTO dto) {
        Tag tag = tagRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tag não encontrada!"));

        tag.setNome(dto.getNome());
        tag = tagRepository.save(tag);

        return TagDTO.fromEntity(tag);
    }

    public void deletar(Long id) {
        Tag tag = tagRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Tag não encontrada!"));

        List<Patch> patchesComTag = patchRepository.findByTagsContains(tag);
        for (Patch patch : patchesComTag) {
            patch.getTags().remove(tag);
        }

        patchRepository.saveAll(patchesComTag);

        tagRepository.delete(tag);
    }

}
