package mindpatch.backend.dto;

import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.model.Tarefa;
import mindpatch.backend.model.UserChallenge;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeResponseDTO {

    private Long id;
    private String titulo;
    private String descricao;
    private Integer pontos;
    private String dificuldade;
    private String linguagem;
    private Integer tempoEstimado;
    private List<String> tags;
    private List<TarefaResponseDTO> tarefas;

    // progresso do usuário (opcional)
    private String status;
    private Double taxaConclusao;

    // ✅ Monta DTO só com Challenge
    public static ChallengeResponseDTO fromEntity(Challenge challenge) {
        return fromEntity(challenge, null);
    }

    // ✅ Monta DTO com Challenge e UserChallenge (progresso do usuário)
    public static ChallengeResponseDTO fromEntity(Challenge challenge, UserChallenge userChallenge) {
        return ChallengeResponseDTO.builder()
                .id(challenge.getId())
                .titulo(challenge.getTitulo())
                .descricao(challenge.getDescricao())
                .pontos(challenge.getPontos())
                .dificuldade(challenge.getDificuldade())
                .linguagem(challenge.getLinguagem())
                .tempoEstimado(challenge.getTempoEstimado())
                .tags(challenge.getTagsDesafio())
                .tarefas(challenge.getTarefas() != null
                        ? challenge.getTarefas().stream()
                            .map(TarefaResponseDTO::fromEntity)
                            .collect(Collectors.toList())
                        : null)
                .status(userChallenge != null ? userChallenge.getStatus().name() : null)
                .taxaConclusao(userChallenge != null ? userChallenge.getTaxaConclusao() : null)
                .build();
    }
}
