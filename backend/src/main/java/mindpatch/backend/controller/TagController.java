package mindpatch.backend.controller;

import java.util.List;

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
import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.TagCreateDTO;
import mindpatch.backend.dto.TagDTO;
import mindpatch.backend.service.TagService;

@RestController
@RequestMapping("/tags")
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;

    @GetMapping
    public ResponseEntity<List<TagDTO>> listarTodas() {
        return ResponseEntity.ok(tagService.listarTodas());
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<TagDTO> criar(@RequestBody @Valid TagCreateDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tagService.criar(dto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<TagDTO> atualizar(@PathVariable Long id, @RequestBody @Valid TagCreateDTO dto) {
        TagDTO tagAtualizada = tagService.atualizar(id, dto);
        return ResponseEntity.ok(tagAtualizada);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        tagService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
