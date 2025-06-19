package mindpatch.backend.dto;

import java.time.LocalDateTime;

import lombok.Setter;
import mindpatch.backend.model.Comment;

@Setter
public class CommentDTO {

    private String texto;
    private LocalDateTime criadoEm;

    public static CommentDTO fromEntity(Comment comment) {
        CommentDTO dto = new CommentDTO();
        dto.setTexto(comment.getTexto());
        dto.setCriadoEm(comment.getCriadoEm());
        return dto;
    }

}
