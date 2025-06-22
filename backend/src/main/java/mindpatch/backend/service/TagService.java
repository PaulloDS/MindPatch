package mindpatch.backend.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.TagCreateDTO;
import mindpatch.backend.dto.TagDTO;
import mindpatch.backend.model.Tag;
import mindpatch.backend.repository.TagRepository;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

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

}
