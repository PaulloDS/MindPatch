package mindpatch.backend.rules;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.model.Badge;
import mindpatch.backend.model.BadgeRule;
import mindpatch.backend.model.User;
import mindpatch.backend.model.UserBadge;
import mindpatch.backend.repository.BadgeRepository;
import mindpatch.backend.repository.CommentRepository;
import mindpatch.backend.repository.UserBadgeRepository;

@Component
@RequiredArgsConstructor
public class ComentaristaRule implements BadgeRule {

    
    private final CommentRepository commentRepository;
    private final BadgeRepository badgeRepository;
    private final UserBadgeRepository userBadgeRepository;

    @Override
    public void aplicar(User user) {
        if (user == null || jaPossui(user, "Comentador")) return;
        
        int totalComentarios = (int) commentRepository.countByUser(user);

        if (totalComentarios >= 1) {
            Badge badge = badgeRepository.findByNome("Comentador")
                    .orElseThrow(() -> new RuntimeException("Conquista inexistente!"));

            userBadgeRepository.save(new UserBadge(user, badge, null));
            
        }

    }

    private boolean jaPossui(User user, String nomeBadge) {
        return user.getConquistas().stream()
            .anyMatch(b -> b.getBadge().getNome().equalsIgnoreCase(nomeBadge));
    }

}
