package mindpatch.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.Patch;
import mindpatch.backend.model.Tag;
import mindpatch.backend.model.User;
import mindpatch.backend.model.Visibilidade;

@Repository
public interface PatchRepository extends JpaRepository<Patch, Long>, JpaSpecificationExecutor<Patch> {

    List<Patch> findByVisibilidade(Visibilidade visibilidade);

    List<Patch> findByAutorId(Long userId);

    int countByAutor(User autor);

    List<Patch> findByTagsContains(Tag tag);

}
