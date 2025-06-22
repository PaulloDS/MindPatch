package mindpatch.backend.dto;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import mindpatch.backend.model.Visibilidade;

@Data
public class PatchCreateDTO {

    @NotBlank
    private String titulo;

    @NotBlank
    private String descricao;

    @NotBlank
    private String codigo;

    @NotBlank
    private String aprendizado;

    @NotNull
    private Visibilidade visibilidade;

    private List<Long> tagIds;

}
