package mindpatch.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.UserBadge;

@Repository
public interface UserBadgeRepository extends JpaRepository<UserBadge, Long>{

}
