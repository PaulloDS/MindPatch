package mindpatch.backend.rules;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.model.Badge;
import mindpatch.backend.model.BadgeRule;
import mindpatch.backend.model.User;
import mindpatch.backend.model.UserBadge;
import mindpatch.backend.model.UserBadgeId;
import mindpatch.backend.repository.BadgeRepository;
import mindpatch.backend.repository.PatchRepository;
import mindpatch.backend.repository.UserBadgeRepository;
import mindpatch.backend.repository.UserRepository;

@Component
@RequiredArgsConstructor
public class CriadorInicianteRule implements BadgeRule {

    private final PatchRepository patchRepository;
    private final BadgeRepository badgeRepository;
    private final UserRepository userRepository;
    private final UserBadgeRepository userBadgeRepository;

    @Override
    public void aplicar(User user) {
        System.out.println("▶️ [Regra] Verificando conquista para: " + user.getNome());

        if (user == null || jaPossui(user, "Criador Iniciante")) {
            System.out.println("⛔ [Regra] Já possui a badge ou user nulo.");
            return;
        }

        int count = patchRepository.countByAutor(user);
        System.out.println("📦 [Regra] Total de patches: " + count);

        if (count >= 1) {
            Badge badge = badgeRepository.findByNome("Criador Iniciante")
                    .orElseThrow(() -> new RuntimeException("Badge não encontrada"));

            user.adicionarBadge(badge);
            userBadgeRepository.save(new UserBadge(user, badge, null));

            System.out.println("🏆 [Regra] Badge atribuída com sucesso!");
        }
    }

    private boolean jaPossui(User user, String nomeBadge) {
        return user.getConquistas().stream()
                    .anyMatch(b -> b.getBadge().getNome().equalsIgnoreCase(nomeBadge));
    }

}
