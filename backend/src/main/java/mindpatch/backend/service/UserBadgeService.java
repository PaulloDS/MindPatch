package mindpatch.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.dto.UserBadgeDTO;
import mindpatch.backend.repository.UserBadgeRepository;

@Service
@RequiredArgsConstructor
public class UserBadgeService {

    private final UserBadgeRepository userBadgeRepository;

    public List<UserBadgeDTO> listarPorUsuario(Long userId) {
        return userBadgeRepository.findByUserId(userId)
                .stream()
                .map(UserBadgeDTO::fromEntity)
                .collect(Collectors.toList());
    }

}
