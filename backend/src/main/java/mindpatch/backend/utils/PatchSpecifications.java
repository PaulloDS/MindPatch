package mindpatch.backend.utils;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.Predicate;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.Visibilidade;

public class PatchSpecifications {

    public static Specification<Patch> comFiltros(String titulo, String codigo, String autor, String tag, String visibilidade, boolean isAdmin, String emailUsuario) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (!isAdmin) {
                // Visibilidade publica OU autor do patch (comparar email)
                Predicate publico = cb.equal(root.get("visibilidade"), Visibilidade.PUBLICO);
                Predicate autorDoPatch = cb.equal(root.get("autor").get("email"), emailUsuario);
                predicates.add(cb.or(publico, autorDoPatch));
            }


            if (titulo != null && !titulo.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("titulo")), "%" + titulo.toLowerCase() + "%"));
            }

            if (codigo != null && !codigo.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("codigo")), "%" + codigo.toLowerCase() + "%"));
            }

            if (autor != null && !autor.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("autor").get("nome")), "%" + autor.toLowerCase() + "%"));
            }

            if (tag != null && !tag.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("tags").get("nome")), "%" + tag.toLowerCase() + "%"));
            }

            if (visibilidade != null && !visibilidade.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("visibilidade")), "%" + visibilidade.toLowerCase() + "%"));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

}
