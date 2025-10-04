package mindpatch.backend.service;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.TarefaUpdateDTO;
import mindpatch.backend.model.Tarefa;
import mindpatch.backend.model.UserChallenge;
import mindpatch.backend.repository.TarefaRepository;
import mindpatch.backend.repository.UserChallengeRepository;

@Service
@RequiredArgsConstructor
public class TarefaService {

    private final TarefaRepository tarefaRepository;
    private final UserChallengeRepository userChallengeRepository;

    @Transactional
    public void atualizarStatusTarefa(Long tarefaId, TarefaUpdateDTO dto, Long userId) {
        Tarefa tarefa = tarefaRepository.findById(tarefaId)
                    .orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));

        tarefaRepository.save(tarefa);

        // Atualiza progresso do desafio para o usuário
        UserChallenge userChallenge = userChallengeRepository
                        .findByUserIdAndChallengeId(userId, tarefa.getChallenge().getId())
                        .orElseThrow(() -> new RuntimeException("Usuário não está participando deste desafio"));
        userChallenge.atualizarProgresso();
        userChallengeRepository.save(userChallenge);
    }

}
