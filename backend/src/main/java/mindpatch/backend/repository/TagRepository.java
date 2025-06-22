package mindpatch.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long>{

    Optional<Tag> findByNomeIgnoreCase(String nome);

    boolean existsByNomeIgnoreCase(String nome);

}
