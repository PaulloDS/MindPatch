package mindpatch.backend.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import mindpatch.backend.model.Comment;

@Setter
@Getter
public class CommentDTO {

    private Long id;
    private String texto;
    private String autorNome;
    private Long autorId;
    private Long patchAutorId;
    private LocalDateTime criadoEm;

    public static CommentDTO fromEntity(Comment comment) {
        CommentDTO dto = new CommentDTO();
        dto.setId(comment.getId());
        dto.setTexto(comment.getTexto());
        dto.setAutorNome(comment.getUser().getNome());
        dto.setAutorId(comment.getUser().getId());
        dto.setPatchAutorId(comment.getPatch().getAutor().getId());
        dto.setCriadoEm(comment.getCriadoEm());
        return dto;
    }

}
