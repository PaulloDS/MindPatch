package mindpatch.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mindpatch.backend.model.Tarefa;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TarefaResponseDTO {
    private Long id;
    private String descricao;
    private Boolean concluida;

    public static TarefaResponseDTO fromEntity(Tarefa tarefa) {
        return TarefaResponseDTO.builder()
                .id(tarefa.getId())
                .descricao(tarefa.getDescricao())
                .concluida(tarefa.getConcluida())
                .build();
    }
}
