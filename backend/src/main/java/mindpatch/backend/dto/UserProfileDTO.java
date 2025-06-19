package mindpatch.backend.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mindpatch.backend.model.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileDTO {

    private Long id;
    private String nome;
    private String email;
    private LocalDateTime criadoEm;
    private LocalDateTime atualizadoEm;
    private List<PatchDTO> patches;
    private List<BadgeDTO> conquistas;

public static UserProfileDTO fromEntity(User user) {
    UserProfileDTO dto = new UserProfileDTO();
    dto.setId(user.getId());
    dto.setNome(user.getNome());
    dto.setEmail(user.getEmail());
    dto.setCriadoEm(user.getCriadoEm());
    dto.setAtualizadoEm(user.getAtualizadoEm());

    List<PatchDTO> patchDTOs = user.getPatches().stream()
        .map(p -> PatchDTO.fromEntity(p))
        .collect(Collectors.toList());
    dto.setPatches(patchDTOs);

    List<BadgeDTO> badgeDTOs = user.getConquistas().stream()
        .map(ub -> BadgeDTO.fromEntity(ub.getBadge()))
        .collect(Collectors.toList());
    dto.setConquistas(badgeDTOs);

    return dto;
}

}
