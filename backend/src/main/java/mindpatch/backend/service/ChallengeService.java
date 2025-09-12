package mindpatch.backend.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.ChallengeRequestDTO;
import mindpatch.backend.dto.ChallengeResponseDTO;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.model.UserChallenge;
import mindpatch.backend.repository.ChallengeRepository;
import mindpatch.backend.repository.UserChallengeRepository;

@Service
@RequiredArgsConstructor
public class ChallengeService {

    private final ChallengeRepository challengeRepository;
    private final UserChallengeRepository userChallengeRepository;

    public List<ChallengeResponseDTO> listarChallenges(Long userId) {
        List<Challenge> challenges = challengeRepository.findAll();

        if (userId == null) {
            return challenges.stream()
                    .map(c -> ChallengeResponseDTO.fromEntity(c, null))
                    .toList();
        }

        Map<Long, UserChallenge> userChallengeMap = userChallengeRepository
                .findByUserId(userId)
                .stream()
                .collect(Collectors.toMap(
                        uc -> uc.getChallenge().getId(),
                        uc -> uc
                ));

        return challenges.stream()
                .map(c -> ChallengeResponseDTO.fromEntity(c, userChallengeMap.get(c.getId())))
                .toList();
    }

    public ChallengeResponseDTO getDesafio(Long id, Long userId) {
        Challenge challenge = challengeRepository.findById(id)
                            .orElseThrow(() -> new RuntimeException("Desafio não encontrado!"));

        UserChallenge userChallenge = userId != null ? userChallengeRepository.findByUserIdAndChallengeId(userId, id).orElse(null)
                : null;

        return ChallengeResponseDTO.fromEntity(challenge, userChallenge);
    }

    public Challenge criarChallenge(ChallengeRequestDTO dto) {
        Challenge challenge = Challenge.builder()
                .titulo(dto.titulo())
                .descricao(dto.descricao())
                .pontos(dto.pontos())
                .dificuldade(dto.dificuldade())
                .linguagem(dto.linguagem())
                .tempoEstimado(dto.tempoEstimado())
                .tagsDesafio(dto.tags())
                .build();
        return challengeRepository.save(challenge);
    }


}
