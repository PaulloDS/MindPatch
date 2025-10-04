package mindpatch.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user_desafios")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserChallenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "challenge_id")
    private Challenge challenge;

    @Enumerated(EnumType.STRING)
    private StatusChallenge status = StatusChallenge.PENDENTE;

    private LocalDateTime dataConclusao;

    @Column(nullable = false)
    private Double taxaConclusao = 0.0;

    public void atualizarProgresso(){

        if (challenge.getTarefas() == null || challenge.getTarefas().isEmpty()) {
            this.taxaConclusao = 0.0;
            return;
        }

        if (this.taxaConclusao == 100.0) {
            this.status = StatusChallenge.CONCLUIDO;
            this.dataConclusao = LocalDateTime.now();
        } else if (this.taxaConclusao > 0) {
            this.status = StatusChallenge.EM_ANDAMENTO;
        } else  {
            this.status = StatusChallenge.PENDENTE;
        }
    }

}
