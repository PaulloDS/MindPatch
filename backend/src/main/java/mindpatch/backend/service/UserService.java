package mindpatch.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import mindpatch.backend.config.SecurityConfiguration;
import mindpatch.backend.dto.BadgeDTO;
import mindpatch.backend.dto.CreateUserDTO;
import mindpatch.backend.dto.LoginUserDTO;
import mindpatch.backend.dto.PatchDTO;
import mindpatch.backend.dto.RecoveryJwtTokenDTO;
import mindpatch.backend.dto.UserProfileDTO;
import mindpatch.backend.dto.UserUpdateDTO;
import mindpatch.backend.model.Badge;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.Role;
import mindpatch.backend.model.RoleName;
import mindpatch.backend.model.User;
import mindpatch.backend.repository.RoleRepository;
import mindpatch.backend.repository.UserRepository;
import mindpatch.backend.service.impl.UserDetailsImpl;

@Service
public class UserService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenService jwtTokenService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private SecurityConfiguration securityConfiguration;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário com email " + email + " não encontrado"));
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário com id " + id + " não encontrado"));
    }


    // Método responsável por autenticar um usuário e retornar um token JWT
    public RecoveryJwtTokenDTO authenticateUser(LoginUserDTO loginUserDTO) {
        // Cria um objeto de autenticação com email e a senha do usuário
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
            new UsernamePasswordAuthenticationToken(loginUserDTO.email(), loginUserDTO.password());

        // Autentica o usuário com as credenciais fornecidas
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        // Obtém o objeto UserDetails do usuário autenticado
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        // Gera um token JWT para o usuário autenticado
        return new RecoveryJwtTokenDTO(jwtTokenService.generateToken(userDetails));
    }

    // Método responsável por criar um usuário
    public void createUser(CreateUserDTO createUserDto) {

        if (userRepository.existsByEmail(createUserDto.getEmail())) {
            throw new RuntimeException("E-mail já cadastrado!");
        }

        Role rolePadrao = roleRepository.findByName(RoleName.ROLE_CUSTOMER)
                .orElseThrow(() -> new RuntimeException("Cargo não encontrado"));

        // Cria um novo usuário com os dados fornecidos
        User newUser = User.builder()
                .nome(createUserDto.getNome())
                .email(createUserDto.getEmail())
                // Codifica a senha do usuário com o algoritmo bcrypt
                .senhaHash(securityConfiguration.passwordEncoder().encode(createUserDto.getPassword()))
                // Atribui ao usuário uma permissão específica
                .roles(List.of(rolePadrao))
                .build();

        // Salva o novo usuário no banco de dados
        userRepository.save(newUser);
    }

    // Método para recuperar dados do usuário
    public UserProfileDTO getUserProfileById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        // Converter User para DTO, incluindo patches e badges
        return UserProfileDTO.fromEntity(user);
    }

    // Método para atualizar detalhes do usuário
    public UserUpdateDTO atualizarUsuario(Long id, UserUpdateDTO userUpdateDTO) {
        User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        user.setNome(userUpdateDTO.getNome());

        if (!user.getEmail().equals(userUpdateDTO.getEmail()) &&
            userRepository.existsByEmail(userUpdateDTO.getEmail())) {

            throw new RuntimeException("E-mail já cadastrado!");
        }

        user.setEmail(userUpdateDTO.getEmail());

        // Se a senha for enviada, atualiza
        if (userUpdateDTO.getPassword() != null && !userUpdateDTO.getPassword().isEmpty()) {
            String senhaHash = passwordEncoder.encode(userUpdateDTO.getPassword());
            userUpdateDTO.setPassword(senhaHash);
        }

        User userAtualizado = userRepository.save(user);

        UserUpdateDTO dto = new UserUpdateDTO();
        dto.setNome(userAtualizado.getNome());
        dto.setEmail(userAtualizado.getEmail());

        return dto;
    }

    // Método para deletar usuário
    public void deletarUsuario(Long id) {
        User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        userRepository.delete(user);
    }

    // Método para listar conquistas
    public List<BadgeDTO> listarConquistas(Long userId) {
        User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        
        return user.getConquistas().stream()
                    .map(userBadge -> {
                        Badge badge = userBadge.getBadge();
                        return BadgeDTO.builder()
                        .id(badge.getId())
                        .nome(badge.getNome())
                        .descricao(badge.getDescricao())
                        .iconeURL(badge.getIconeURL())
                        .build();
                    })
                    .collect(Collectors.toList());
        
    }

    public User findUserByEmail(String username) {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }   
}
