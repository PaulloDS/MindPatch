package mindpatch.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.model.StatusChallenge;
import mindpatch.backend.model.User;
import mindpatch.backend.model.UserChallenge;
import mindpatch.backend.repository.UserChallengeRepository;

@Service
@RequiredArgsConstructor
public class UserChallengeService {

    private final UserChallengeRepository userChallengeRepository;

    public UserChallenge atribuirDesafio(User user, Challenge challenge) {
        UserChallenge userChallenge = UserChallenge.builder()
                .user(user)
                .challenge(challenge)
                .status(StatusChallenge.PENDENTE)
                .build();

        return userChallengeRepository.save(userChallenge);
    }

    public UserChallenge atualizarStatus(UserChallenge userChallenge, StatusChallenge novoStatus) {
        userChallenge.setStatus(novoStatus);

        if (novoStatus == StatusChallenge.CONCLUIDO) {
            userChallenge.setDataConclusao(LocalDateTime.now());
        }

        return userChallengeRepository.save(userChallenge);
    }

    public List<UserChallenge> listarDesafiosDoUsuario(Long userId) {
        return userChallengeRepository.findByUserId(userId);
    }

}
