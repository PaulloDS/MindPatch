package mindpatch.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.Patch;

@Repository
public interface PatchRepository extends JpaRepository<Patch, Long> {

}
