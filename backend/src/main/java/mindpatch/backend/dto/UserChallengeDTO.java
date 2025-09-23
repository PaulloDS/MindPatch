package mindpatch.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserChallengeDTO {
    private Long id;
    private long userId;
    private Long challengeId;
    private String status;
    private Double taxaConclusao;
}
