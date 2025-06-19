package mindpatch.backend.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mindpatch.backend.model.Patch;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatchDTO {

    private String titulo;
    private String descricao;
    private String codigo;
    private String aprendizado;
    private List<TagDTO> tags;
    private List<CommentDTO> comentarios;
    private LocalDateTime criadoEm;
    private LocalDateTime atualizadoEm;

    public static PatchDTO fromEntity(Patch patch) {
        PatchDTO dto = new PatchDTO();
        dto.setTitulo(patch.getTitulo());
        dto.setDescricao(patch.getDescricao());
        dto.setCodigo(patch.getCodigo());
        dto.setAprendizado(patch.getAprendizado());

        List<TagDTO> tagDTOs = patch.getTags().stream()
            .map(TagDTO::fromEntity)
            .collect(Collectors.toList());
        dto.setTags(tagDTOs);

        List<CommentDTO> commentDTOs = patch.getComentarios().stream()
            .map(CommentDTO::fromEntity)
            .collect(Collectors.toList());
        dto.setComentarios(commentDTOs);


        dto.setCriadoEm(patch.getCriadoEm());
        dto.setAtualizadoEm(patch.getAtualizadoEm());
        
        return dto;
    }

}
