package mindpatch.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class TagCreateDTO {

    @NotBlank
    private String nome;

}
