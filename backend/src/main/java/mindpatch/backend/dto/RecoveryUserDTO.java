package mindpatch.backend.dto;

import java.util.List;

import mindpatch.backend.model.Role;

public record RecoveryUserDTO(

    Long id,
    String email,
    List<Role> roles

) {

}
