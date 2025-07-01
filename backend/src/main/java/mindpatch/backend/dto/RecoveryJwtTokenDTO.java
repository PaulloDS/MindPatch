package mindpatch.backend.dto;

public record RecoveryJwtTokenDTO(

    String token,
    Long id,
    String nome,
    String email

) {

}
