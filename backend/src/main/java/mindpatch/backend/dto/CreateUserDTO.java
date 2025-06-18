package mindpatch.backend.dto;

import mindpatch.backend.model.RoleName;

public record CreateUserDTO(    
    
    String nome,
    String email,
    String password,
    RoleName role
    
) {}
