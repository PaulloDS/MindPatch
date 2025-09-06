package mindpatch.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.UserChallenge;

@Repository
public interface UserChallengeRepository extends JpaRepository<UserChallenge, Long>{

    List<UserChallenge> findByUserId(Long userId);
    Optional<UserChallenge> findByUserIdAndChallengeId(Long userId, Long challengeId);

}
