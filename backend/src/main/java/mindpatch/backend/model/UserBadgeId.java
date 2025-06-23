package mindpatch.backend.model;

import java.io.Serializable;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class UserBadgeId implements Serializable {
    private Long user;
    private Long badge;

    public UserBadgeId(Long userId, Long badgeId) {
        this.user = userId;
        this.badge = badgeId;
    }
}
