package mindpatch.backend.utils;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import jakarta.persistence.criteria.Predicate;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.Visibilidade;

public class PatchSpecifications {

    public static Specification<Patch> comFiltros(String titulo, String codigo, String autor, boolean isAdmin) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (!isAdmin) {
                predicates.add(cb.equal(root.get("visibilidade"), Visibilidade.PUBLICO));
            }

            if (titulo != null && !titulo.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("titulo")), "%" + titulo.toLowerCase() + "%"));
            }

            if (codigo != null && !codigo.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("codigo")), "%" + titulo.toLowerCase() + "%"));
            }

            if (autor != null && !autor.isEmpty()) {
                predicates.add(cb.like(cb.lower(root.get("autor").get("nome")), "%" + titulo.toLowerCase() + "%"));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

}
