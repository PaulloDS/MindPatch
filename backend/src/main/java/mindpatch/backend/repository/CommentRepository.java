package mindpatch.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.Comment;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.User;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
    int countByUser(User user);
    List<Comment> findByPatch(Patch patch);
}
