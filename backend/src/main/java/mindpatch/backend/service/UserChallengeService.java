package mindpatch.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.model.StatusChallenge;
import mindpatch.backend.model.User;
import mindpatch.backend.model.UserChallenge;
import mindpatch.backend.repository.ChallengeRepository;
import mindpatch.backend.repository.UserChallengeRepository;

@Service
@RequiredArgsConstructor
public class UserChallengeService {

    private final UserChallengeRepository userChallengeRepository;
    private final ChallengeRepository challengeRepository;

    @Transactional
    public UserChallenge iniciarDesafio(Long userId, Long challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId)
                    .orElseThrow(() -> new RuntimeException("Desafio não encontrado!"));
        
        return userChallengeRepository.findByUserIdAndChallengeId(userId, challengeId)
                .orElseGet(() -> {
                    UserChallenge novo = UserChallenge.builder()
                            .user(User.builder().id(userId).build())
                            .challenge(challenge)
                            .status(StatusChallenge.PENDENTE)
                            .taxaConclusao(0.0)
                            .build();
                    return userChallengeRepository.save(novo);
                });
    }

    public List<UserChallenge> listarDesafiosUsuario(Long userId) {
        return userChallengeRepository.findByUserId(userId);
    }

}
