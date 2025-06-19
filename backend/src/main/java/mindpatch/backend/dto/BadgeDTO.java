package mindpatch.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mindpatch.backend.model.Badge;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BadgeDTO {

    private String nome;
    private String descricao;
    private String iconeURL;

    public static BadgeDTO fromEntity(Badge badge) {
        BadgeDTO dto = new BadgeDTO();
        dto.setNome(badge.getNome());
        dto.setDescricao(badge.getDescricao());
        dto.setIconeURL(badge.getIconeURL());
        return dto;
    }

}
