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
import org.springframework.web.bind.annotation.RestController;

import mindpatch.backend.dto.BadgeDTO;
import mindpatch.backend.dto.CreateUserDTO;
import mindpatch.backend.dto.LoginUserDTO;
import mindpatch.backend.dto.PatchDTO;
import mindpatch.backend.dto.RecoveryJwtTokenDTO;
import mindpatch.backend.dto.UserProfileDTO;
import mindpatch.backend.dto.UserUpdateDTO;
import mindpatch.backend.model.User;
import mindpatch.backend.repository.UserRepository;
import mindpatch.backend.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<RecoveryJwtTokenDTO> authenticateUser(@RequestBody LoginUserDTO loginUserDTO) {
        RecoveryJwtTokenDTO token = userService.authenticateUser(loginUserDTO);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<Void> createUser(@RequestBody CreateUserDTO createUserDTO) {
        userService.createUser(createUserDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // Rota para recuperar os dados do próprio perfil
    // Somente ADMIN pode recuperar dados de qualquer usuário
    @GetMapping("/users/{id}")
    public ResponseEntity<UserProfileDTO> getUserProfile(@PathVariable Long id, Authentication authentication) {

        String email = authentication.getName();
        User logado = userService.findByEmail(email);

        boolean isAdmin = logado.getRoles().stream()
            .anyMatch(role -> role.getName().name().equals("ROLE_ADMIN"));

        boolean isOwner = logado.getId().equals(id);

        if (!isOwner && !isAdmin) {
            throw new RuntimeException("Acesso negado!");
        }

        UserProfileDTO dto = userService.getUserProfileById(id);
        return ResponseEntity.ok(dto);
    }

    // Rota para atualizar os dados do próprio perfil
    // Somente ADMIN pode atualizar os dados de qualquer usuário
    @PutMapping("/users/{id}")
    public ResponseEntity<UserUpdateDTO> updateUserProfile(@PathVariable Long id, @RequestBody UserUpdateDTO userUpdateDTO, Authentication authentication ) {

        String emailLogado = authentication.getName();
        User logado = userService.findByEmail(emailLogado);

        boolean isAdmin = logado.getRoles().stream()
                    .anyMatch(role -> role.getName().name().equals("ROLE_ADMIN"));
        
        boolean isEditingSelf = logado.getId().equals(id);

        if (!isEditingSelf && !isAdmin) {
            throw new RuntimeException("PÁ! Acesso negado.");
        }

        UserUpdateDTO userProfileAtualizado = userService.atualizarUsuario(id, userUpdateDTO);
        return ResponseEntity.ok(userProfileAtualizado);
    }

    // Rota para deletar usuários
    // Somente ADMIN pode deletar
    @DeleteMapping("/users/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deletarUsuario(id);
        return ResponseEntity.noContent().build();
    }

    // Rota para listar todos os usuários
    // Somente ADMIN tem esse poder
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Rota para listar as conquistas do próprio usuário
    // Somente ADMIN pode listar as conquistas de qualquer usuário
    @GetMapping("/users/{id}/conquistas")
    public ResponseEntity<List<BadgeDTO>> listarConsquistas(@PathVariable Long id, Authentication authentication ) {

        String email = authentication.getName();
        User logado = userService.findByEmail(email);

        boolean isAdmin = logado.getRoles().stream()
            .anyMatch(role -> role.getName().name().equals("ROLE_ADMIN"));

        boolean isOwner = logado.getId().equals(id);

        if (!isOwner && !isAdmin) {
            throw new RuntimeException("Acesso negado!");
        }

        List<BadgeDTO> conquistas = userService.listarConquistas(id);
        return ResponseEntity.ok(conquistas);
    }

        // Rota para listar as conquistas do próprio usuário
    // Somente ADMIN pode listar as conquistas de qualquer usuário
    @GetMapping("/users/{id}/patches")
    public ResponseEntity<List<PatchDTO>> listarPatches(@PathVariable Long id, Authentication authentication ) {

        String email = authentication.getName();
        User logado = userService.findByEmail(email);

        boolean isAdmin = logado.getRoles().stream()
            .anyMatch(role -> role.getName().name().equals("ROLE_ADMIN"));

        boolean isOwner = logado.getId().equals(id);

        if (!isOwner && !isAdmin) {
            throw new RuntimeException("Acesso negado!");
        }

        List<PatchDTO> patches = userService.listarPatches(id);
        return ResponseEntity.ok(patches);
    }

}
