package mindpatch.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mindpatch.backend.model.Tarefa;

public record TarefaResponseDTO (
    Long id,
    String descricao,
    String entradaExemplo,
    String saidaEsperada
) {

    public static TarefaResponseDTO fromEntity(Tarefa tarefa) {
        return new TarefaResponseDTO(tarefa.getId(), tarefa.getDescricao(),  tarefa.getEntradaExemplo(), tarefa.getSaidaEsperada());
    }
}
