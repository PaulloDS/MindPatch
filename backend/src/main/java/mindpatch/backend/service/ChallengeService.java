package mindpatch.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.ChallengeRequestDTO;
import mindpatch.backend.dto.ChallengeResponseDTO;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.model.StatusChallenge;
import mindpatch.backend.model.User;
import mindpatch.backend.model.UserChallenge;
import mindpatch.backend.repository.ChallengeRepository;
import mindpatch.backend.repository.UserChallengeRepository;

@Service
@RequiredArgsConstructor
public class ChallengeService {

    private final ChallengeRepository challengeRepository;
    private final UserChallengeRepository userChallengeRepository;
    

    // Todos os desafios
    public List<ChallengeResponseDTO> listarTodos() {
        return challengeRepository.findAll().stream()
                .map(c -> ChallengeResponseDTO.fromEntity(c, null))
                .toList();
    }

    // Desafios do usuário
    public List<ChallengeResponseDTO> listarPorUsuario(Long userId) {
        List<UserChallenge> userChallenges = userChallengeRepository.findByUserId(userId);

        return userChallenges.stream()
                .map(uc -> ChallengeResponseDTO.fromEntity(uc.getChallenge(), uc))
                .toList();
    }

    public ChallengeResponseDTO getDesafio(Long id, Long userId) {
        Challenge challenge = challengeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Desafio não encontrado!"));

        UserChallenge userChallenge = userId != null
                ? userChallengeRepository.findByUserIdAndChallengeId(userId, id).orElse(null)
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

    public UserChallenge atribuirDesafio(Long userId, Long challengeId) {
        Optional<UserChallenge> existente = userChallengeRepository.findByUserIdAndChallengeId(userId, challengeId);
        if (existente.isPresent()) {
            return existente.get();
        }

        Challenge challenge = challengeRepository.findById(challengeId)
                    .orElseThrow(() -> new RuntimeException("Desafio não encontrado!"));
        
        User user = new User();
        user.setId(userId);

        UserChallenge userChallenge = UserChallenge.builder()
                .user(user)
                .challenge(challenge)
                .status(StatusChallenge.PENDENTE)
                .taxaConclusao(0.0)
                .build();

        return userChallengeRepository.save(userChallenge);
    }
}
