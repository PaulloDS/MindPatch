package mindpatch.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.Badge;

@Repository
public interface BadgeRepository extends JpaRepository<Badge, Long>{

    Optional<Badge> findByNome(String nome);

}
