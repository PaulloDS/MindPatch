package mindpatch.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.ChallengeRequestDTO;
import mindpatch.backend.dto.ChallengeResponseDTO;
import mindpatch.backend.model.Challenge;
import mindpatch.backend.service.ChallengeService;

@RestController
@RequestMapping("/challenges")
@RequiredArgsConstructor
public class ChallengeController {

    private final ChallengeService challengeService;

    @GetMapping("/{id}")
    public ResponseEntity<ChallengeResponseDTO> getDesafio(@PathVariable Long id, @RequestParam(required = false) Long userId) {
        return ResponseEntity.ok(challengeService.getDesafio(id, userId));
    } 

    @PostMapping
    public ResponseEntity<Challenge> criarDesafio(@RequestBody ChallengeRequestDTO dto){
        return ResponseEntity.ok(challengeService.criarChallenge(dto));
    }

    
    @GetMapping("/search")
    public ResponseEntity<List<Challenge>> buscarPorTags(
            @RequestParam List<String> tags,
            @RequestParam(defaultValue = "any") String match
    ) {
        boolean todas = match.equalsIgnoreCase("all");
        List<Challenge> resultados = challengeService.buscarPorTags(tags, todas);
        return ResponseEntity.ok(resultados);
    }

}
