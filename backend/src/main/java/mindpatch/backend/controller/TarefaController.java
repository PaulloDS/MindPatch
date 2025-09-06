package mindpatch.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.TarefaUpdateDTO;
import mindpatch.backend.service.TarefaService;

@RestController
@RequestMapping("/tarefas")
@RequiredArgsConstructor
public class TarefaController {

    private final TarefaService tarefaService;

    @PutMapping("/{id}/status")
    public ResponseEntity<Void> atualizarStatus(
        @PathVariable Long id,
        @RequestParam Long userId,
        @RequestBody TarefaUpdateDTO dto
    ) {
        tarefaService.atualizarStatusTarefa(id, dto, userId);
        return ResponseEntity.ok().build();
    }

}
