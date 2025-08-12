package mindpatch.backend.service;

import java.util.List;
import java.util.stream.Collectors;

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
import mindpatch.backend.dto.RecoveryJwtTokenDTO;
import mindpatch.backend.dto.UserProfileDTO;
import mindpatch.backend.dto.UserUpdateDTO;
import mindpatch.backend.model.Badge;
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

    public RecoveryJwtTokenDTO authenticateUser(LoginUserDTO loginUserDTO) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
            new UsernamePasswordAuthenticationToken(loginUserDTO.email(), loginUserDTO.password());

        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        User user = userDetails.getUser();

        return new RecoveryJwtTokenDTO(jwtTokenService.generateToken(userDetails), user.getId(), user.getNome(), user.getEmail());
    }

    public void createUser(CreateUserDTO createUserDto) {

        if (userRepository.existsByEmail(createUserDto.getEmail())) {
            throw new RuntimeException("E-mail já cadastrado!");
        }

        Role rolePadrao = roleRepository.findByName(RoleName.ROLE_CUSTOMER)
                .orElseThrow(() -> new RuntimeException("Cargo não encontrado"));

        User newUser = User.builder()
                .nome(createUserDto.getNome())
                .email(createUserDto.getEmail())
                .senhaHash(securityConfiguration.passwordEncoder().encode(createUserDto.getPassword()))
                .roles(List.of(rolePadrao))
                .build();

        userRepository.save(newUser);
    }

    public UserProfileDTO getUserProfileById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        return UserProfileDTO.fromEntity(user);
    }

    public UserUpdateDTO atualizarUsuario(Long id, UserUpdateDTO userUpdateDTO) {
        User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        user.setNome(userUpdateDTO.getNome());

        if (!user.getEmail().equals(userUpdateDTO.getEmail()) &&
            userRepository.existsByEmail(userUpdateDTO.getEmail())) {

            throw new RuntimeException("E-mail já cadastrado!");
        }

        user.setEmail(userUpdateDTO.getEmail());

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

    public void deletarUsuario(Long id) {
        User user = userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        userRepository.delete(user);
    }

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
