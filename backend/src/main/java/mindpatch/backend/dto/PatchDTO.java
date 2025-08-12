package mindpatch.backend.dto;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.Visibilidade;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PatchDTO {

    private Long id;
    private String titulo;
    private String descricao;
    private String codigo;
    private String aprendizado;
    private AutorPatchDTO autor;
    private List<TagDTO> tags;
    private List<CommentDTO> comentarios;
    private LocalDateTime criadoEm;
    private LocalDateTime atualizadoEm;
    private Visibilidade visibilidade;

    public static PatchDTO fromEntity(Patch patch) {
        PatchDTO dto = new PatchDTO();
        dto.setId(patch.getId());
        dto.setTitulo(patch.getTitulo());
        dto.setDescricao(patch.getDescricao());
        dto.setCodigo(patch.getCodigo());
        dto.setAprendizado(patch.getAprendizado());
        dto.setVisibilidade(patch.getVisibilidade());
        

        dto.setAutor(new AutorPatchDTO(patch.getAutor().getId(), patch.getAutor().getNome()));

        List<TagDTO> tagDTOs = patch.getTags().stream()
            .map(TagDTO::fromEntity)
            .collect(Collectors.toList());
        dto.setTags(tagDTOs);

List<CommentDTO> commentDTOs = Optional.ofNullable(patch.getComentarios())
    .orElse(Collections.emptyList())
    .stream()
    .map(CommentDTO::fromEntity)
    .toList();
        dto.setComentarios(commentDTOs);


        dto.setCriadoEm(patch.getCriadoEm());
        dto.setAtualizadoEm(patch.getAtualizadoEm());
        
        return dto;
    }

}
