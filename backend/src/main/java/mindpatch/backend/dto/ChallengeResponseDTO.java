package mindpatch.backend.dto;

import java.util.List;

import mindpatch.backend.model.Challenge;
import mindpatch.backend.model.StatusChallenge;
import mindpatch.backend.model.UserChallenge;

public record ChallengeResponseDTO(
    Long id,
    String titulo,
    String descricao,
    Integer pontos,
    String dificuldade,
    String linguagem,
    Integer tempoEstimado,
    List<String> tags,
    Double taxaConclusao,
    StatusChallenge status
) {
    public static ChallengeResponseDTO fromEntity(Challenge challenge, UserChallenge userChallenge) {
        return new ChallengeResponseDTO(
            challenge.getId(),
            challenge.getTitulo(),
            challenge.getDescricao(),
            challenge.getPontos(),
            challenge.getDificuldade(),
            challenge.getLinguagem(),
            challenge.getTempoEstimado(),
            challenge.getTagsDesafio(),
            userChallenge != null ? userChallenge.getTaxaConclusao() : 0.0,
            userChallenge != null ? userChallenge.getStatus() : StatusChallenge.PENDENTE
        );
    }
}
