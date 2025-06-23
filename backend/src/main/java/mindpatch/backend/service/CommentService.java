package mindpatch.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mindpatch.backend.model.Comment;
import mindpatch.backend.model.Patch;
import mindpatch.backend.model.User;
import mindpatch.backend.repository.CommentRepository;
import mindpatch.backend.repository.PatchRepository;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PatchRepository patchRepository;

    @Autowired
    private BadgeService badgeService;

    public List<Comment> listByPatchId(Long patchId) {
        Patch patch = patchRepository.findById(patchId)
                .orElseThrow(() -> new RuntimeException("Patch não encontrado"));
        return commentRepository.findByPatch(patch);
    }

    public Comment createComment(Long patchId, User user, String texto) {
        Patch patch = patchRepository.findById(patchId)
                .orElseThrow(() -> new RuntimeException("Patch não encontrado"));
        Comment comment = new Comment(null, patch, user, texto, null);
        badgeService.atribuirBadges(user);
        return commentRepository.save(comment);
    }

    public void deleteComment(Long commentId, User requester) {
        Comment comment = commentRepository.findById(commentId)
                    .orElseThrow(() -> new RuntimeException("Comentário não encontrado"));

        boolean isAdmin = requester.getRoles().stream()
            .anyMatch(role -> role.getName().name().equals("ROLE_ADMIN"));

         if (!comment.getUser().getId().equals(requester.getId()) && !isAdmin) {
            throw new RuntimeException("Apenas o autor ou admin pode deletar o comentário.");
         }

         commentRepository.delete(comment);
    }

}
