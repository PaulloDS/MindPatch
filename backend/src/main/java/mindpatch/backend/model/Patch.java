package mindpatch.backend.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "patches")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patch {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String titulo;
	
	@Column(columnDefinition = "TEXT")
	private String descricao;
	
	@Column(columnDefinition = "TEXT")
	private String codigo;
	
	@Column(columnDefinition = "TEXT")
	private String aprendizado;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User autor;
	
	@ManyToMany
	@JoinTable(
	name = "patch_tags",
	joinColumns = @JoinColumn(name = "patch_id"),
	inverseJoinColumns = @JoinColumn(name = "tag_id")
	)
	private Set<Tag> tags;
	
	@OneToMany(mappedBy = "patch")
	private List<Comment> comentarios;
	
	@CreationTimestamp
	private LocalDateTime criadoEm;
	
	@UpdateTimestamp
	private LocalDateTime atualizadoEm;
	
}
