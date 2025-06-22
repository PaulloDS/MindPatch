package mindpatch.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import mindpatch.backend.dto.PatchCreateDTO;
import mindpatch.backend.dto.PatchDTO;
import mindpatch.backend.service.PatchService;

@RestController
@RequestMapping("/patches")
public class PatchController {

    @Autowired
    private PatchService patchService;

    @GetMapping("/publicos")
    public ResponseEntity<List<PatchDTO>> listarPublicos(){
        return ResponseEntity.ok(patchService.listarPublicos());
    }

    @GetMapping("/meus")
    public ResponseEntity<List<PatchDTO>> meusPatches(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(patchService.listarMeusPatches(email));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PatchDTO> getPatchById(@PathVariable Long id, Authentication authentication) {
        String emailUsuario = authentication.getName();

        PatchDTO patchDTO = patchService.buscarPorId(id, emailUsuario);
        return ResponseEntity.ok(patchDTO);
    }

    @GetMapping("/todos")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<PatchDTO>> listarTodos(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(patchService.listarTodos(email));
    }

    @GetMapping("/search")
    public ResponseEntity<List<PatchDTO>> buscarPatches(
        @RequestParam(required = false) String titulo,
        @RequestParam(required = false) String codigo,
        @RequestParam(required = false) String autor,
        Authentication auth
    ) {
        String email = (auth != null) ? auth.getName() : ""; // permite busca anônima
        List<PatchDTO> resultados = patchService.buscarPorFiltros(titulo, codigo, autor, email);
        return ResponseEntity.ok(resultados);
    }

    @PostMapping
    public ResponseEntity<PatchDTO> criarPatch(
        @RequestBody @Valid PatchCreateDTO dto,
        Authentication auth
    ) {
        String email = auth.getName();
        PatchDTO criado = patchService.criar(dto, email);

        return ResponseEntity.status(HttpStatus.CREATED).body(criado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PatchDTO> atualizarPatch(
        @PathVariable Long id,
        @RequestBody @Valid PatchCreateDTO dto,
        Authentication authentication
    ) {
        String email = authentication.getName();
        PatchDTO atualizado = patchService.atualizar(id, dto, email);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPatch(@PathVariable Long id, Authentication authentication) {
        String email = authentication.getName();
        patchService.deletar(id, email);
        return ResponseEntity.noContent().build();
    }

}
