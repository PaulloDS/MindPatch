package mindpatch.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long>{

}
