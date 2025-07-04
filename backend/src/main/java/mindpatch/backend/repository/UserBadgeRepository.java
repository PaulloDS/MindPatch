package mindpatch.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.UserBadge;

@Repository
public interface UserBadgeRepository extends JpaRepository<UserBadge, Long>{
    List<UserBadge> findByUserId(Long userId);
}
