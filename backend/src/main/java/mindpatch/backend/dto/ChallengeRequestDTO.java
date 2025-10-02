package mindpatch.backend.dto;

import java.util.List;

public record ChallengeRequestDTO(

    String titulo,
    String descricao,
    Integer pontos,
    String dificuldade,
    String linguagem,
    Integer tempoEstimado,
    List<String> tagsDesafio,
    List<TarefaRequestDTO> tarefas

) {

}
