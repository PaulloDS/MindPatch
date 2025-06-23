package mindpatch.backend.registry;

import java.util.List;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import mindpatch.backend.model.BadgeRule;
import mindpatch.backend.model.User;

@Component
@RequiredArgsConstructor
public class BadgeRuleRegistry {

    private final List<BadgeRule> regras;

    public void aplicarTodas(User user) {
        for (BadgeRule regra : regras) {
            regra.aplicar(user);
        }
    }

}
