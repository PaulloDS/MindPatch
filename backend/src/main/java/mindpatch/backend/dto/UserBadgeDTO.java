package mindpatch.backend.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;
import mindpatch.backend.model.Badge;
import mindpatch.backend.model.UserBadge;

@Data
@Builder
public class UserBadgeDTO {

    private Long id;
    private String nome;
    private String descricao;
    private String iconeURL;
    private boolean conquistado;
    private LocalDateTime conquistadoEm;

    public static UserBadgeDTO fromEntity(UserBadge userBadge) {
        Badge badge = userBadge.getBadge();
        return UserBadgeDTO.builder()
            .id(badge.getId())
            .nome(badge.getNome())
            .descricao(badge.getDescricao())
            .iconeURL(badge.getIconeURL())
            .conquistado(userBadge.getConquistadoEm() != null)
            .conquistadoEm(userBadge.getConquistadoEm())
            .build();
    }

}
