package mindpatch.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserCache;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.model.StatusChallenge;
import mindpatch.backend.model.User;
import mindpatch.backend.model.UserChallenge;
import mindpatch.backend.service.ChallengeService;
import mindpatch.backend.service.UserChallengeService;
import mindpatch.backend.service.UserService;

@RestController
@RequestMapping("/user-challenges")
@RequiredArgsConstructor
public class UserChallengeController {

    private final UserService userService;
    private final ChallengeService challengeService;
    private final UserChallengeService userChallengeService;

    @PostMapping("/atribuir/{userId}/{challengeId}")
    public ResponseEntity<UserChallenge> atribuirDesafio(@PathVariable Long userId, @PathVariable Long challengeId){
        
        User user = userService.findById(userId)
        .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Challenge challenge = challengeService.buscarPorId(userId)
        .orElseThrow(() -> new RuntimeException("Desafio não encontrado!"));

        return ResponseEntity.ok(userChallengeService.atribuirDesafio(user, challenge));

    }

    @PutMapping("/{userChallengeId}/status")
    public ResponseEntity<UserChallenge> atualizarStatus(@PathVariable Long userChallengeId, @RequestParam StatusChallenge status) {

        UserChallenge userChallenge = userChallengeService.listarDesafiosDoUsuario(userChallengeId)
            .stream()
            .filter(ud -> ud.getId().equals(userChallengeId))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("UserChallenge não encontrado!"));

        return ResponseEntity.ok(userChallengeService.atualizarStatus(userChallenge, status));

    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<UserChallenge>> listarDesafios(@PathVariable Long userId) {
        return ResponseEntity.ok(userChallengeService.listarDesafiosDoUsuario(userId));
    }

}
