package mindpatch.backend.model;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class UserBadgeId implements Serializable{
	
	private Long userId;
	private Long badgeId;

}
