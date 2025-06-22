package mindpatch.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.BadgeCreateDTO;
import mindpatch.backend.dto.BadgeDTO;
import mindpatch.backend.model.Badge;
import mindpatch.backend.repository.BadgeRepository;
import mindpatch.backend.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class BadgeService {

    private final BadgeRepository badgeRepository;
    private final UserRepository userRepository;

    public List<BadgeDTO> listarTodas() {
        return badgeRepository.findAll().stream()
                .map(BadgeDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public BadgeDTO buscarPorId(Long id) {
        Badge badge = badgeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Conquista não existente!"));
        return BadgeDTO.fromEntity(badge);
    }

    public BadgeDTO criar(BadgeCreateDTO dto) {
        Badge badge = new Badge();
        badge.setNome(dto.getNome());
        badge.setDescricao(dto.getDescricao());
        badge.setIconeURL(dto.getIconeUrl());

        return BadgeDTO.fromEntity(badgeRepository.save(badge));
    }

    public BadgeDTO atualizar(Long id, BadgeCreateDTO dto) {
        Badge badge = badgeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Conquista não existente!"));
        
        badge.setNome(dto.getNome());
        badge.setDescricao(dto.getDescricao());
        badge.setIconeURL(dto.getIconeUrl());
        
        return BadgeDTO.fromEntity(badgeRepository.save(badge));
    }
    
    public void deletar(Long id) {
        Badge badge = badgeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Conquista não existente!"));

        badgeRepository.delete(badge);
    }

}
