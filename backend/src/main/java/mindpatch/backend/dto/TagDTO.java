package mindpatch.backend.dto;

import lombok.Setter;
import mindpatch.backend.model.Tag;

@Setter
public class TagDTO {

    private String nome;

    public static TagDTO fromEntity(Tag tag) {
        TagDTO dto = new TagDTO();
        dto.setNome(tag.getNome());
        return dto;
    }

}
