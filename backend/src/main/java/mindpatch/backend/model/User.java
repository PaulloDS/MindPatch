package mindpatch.backend.model;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.CascadeType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String nome;
	
	@Column(unique = true, nullable = false)
	private String email;
	
	@Column(name = "senha_hash", nullable = false)
	private String senhaHash;
	
	@Column(nullable = false)
	private Role role;
	
	@CreationTimestamp
	private LocalDateTime criadoEm;
	
	@UpdateTimestamp
	private LocalDateTime atualizadoEm;
	
	@OneToMany(mappedBy = "autor", cascade = CascadeType.ALL)
	private List<Patch> patches;
	
	@OneToMany(mappedBy = "user")
	private List<Comment> comentarios;
	
	@OneToMany(mappedBy = "user")
	private List<UserBadge> conquistas;

}
