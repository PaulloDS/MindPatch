package mindpatch.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.service.ChallengeService;

@RestController
@RequestMapping("/challenges")
@RequiredArgsConstructor
public class ChallengeController {

    private final ChallengeService challengeService;

    @GetMapping
    public ResponseEntity<List<Challenge>> listar(){
        return ResponseEntity.ok(challengeService.listarTodos());
    }

    @PostMapping
    public ResponseEntity<Challenge> criar(@RequestBody Challenge challenge){
        return ResponseEntity.ok(challengeService.criar(challenge));
    }

}
