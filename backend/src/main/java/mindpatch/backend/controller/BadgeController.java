package mindpatch.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import mindpatch.backend.dto.BadgeCreateDTO;
import mindpatch.backend.dto.BadgeDTO;
import mindpatch.backend.service.BadgeService;

@RestController
@RequestMapping("/badges")
public class BadgeController {

    @Autowired
    private BadgeService badgeService;

    @GetMapping
    public ResponseEntity<List<BadgeDTO>> listarTodas() {
        return ResponseEntity.ok(badgeService.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BadgeDTO> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(badgeService.buscarPorId(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<BadgeDTO> criar(@RequestBody @Valid BadgeCreateDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(badgeService.criar(dto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<BadgeDTO> atualizar(@PathVariable Long id, @RequestBody @Valid BadgeCreateDTO dto) {
        return ResponseEntity.ok(badgeService.atualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        badgeService.deletar(id);
        return ResponseEntity.noContent().build();
    }


}
