package mindpatch.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import mindpatch.backend.config.SecurityConfiguration;
import mindpatch.backend.dto.CreateUserDTO;
import mindpatch.backend.dto.LoginUserDTO;
import mindpatch.backend.dto.RecoveryJwtTokenDTO;
import mindpatch.backend.model.Role;
import mindpatch.backend.model.User;
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
    private SecurityConfiguration securityConfiguration;

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

        // Cria um novo usuário com os dados fornecidos
        User newUser = User.builder()
                .nome(createUserDto.nome())
                .email(createUserDto.email())
                // Codifica a senha do usuário com o algoritmo bcrypt
                .senhaHash(securityConfiguration.passwordEncoder().encode(createUserDto.password()))
                // Atribui ao usuário uma permissão específica
                .roles(List.of(Role.builder().name(createUserDto.role()).build()))
                .build();

        // Salva o novo usuário no banco de dados
        userRepository.save(newUser);
    }

}
