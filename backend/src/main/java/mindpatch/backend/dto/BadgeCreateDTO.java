package mindpatch.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BadgeCreateDTO {

    @NotBlank
    private String nome;
    
    @NotBlank
    private String descricao;

    private String iconeUrl;

}
