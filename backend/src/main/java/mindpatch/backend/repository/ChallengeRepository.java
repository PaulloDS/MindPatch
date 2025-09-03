package mindpatch.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindpatch.backend.model.Challenge;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, Long>{

}
