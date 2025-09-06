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

    private final UserChallengeService userChallengeService;

    @PostMapping("/{userId}/{challengeId}")
    public ResponseEntity<UserChallenge> iniciar(@PathVariable Long userId, @PathVariable Long challengeId) {
        return ResponseEntity.ok(userChallengeService.iniciarDesafio(userId, challengeId));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<UserChallenge>> listar(@PathVariable Long userId) {
        return ResponseEntity.ok(userChallengeService.listarDesafiosUsuario(userId));
    }

}
