package mindpatch.backend.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import mindpatch.backend.dto.CommentCreateDTO;
import mindpatch.backend.dto.CommentDTO;
import mindpatch.backend.model.Comment;
import mindpatch.backend.model.User;
import mindpatch.backend.repository.UserRepository;
import mindpatch.backend.service.CommentService;
import mindpatch.backend.service.UserService;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @GetMapping("/patches/{patchId}/comments")
    public List<CommentDTO> getComments(@PathVariable Long patchId) {
        return commentService.listByPatchId(patchId).stream().map(comment -> {
            CommentDTO dto = new CommentDTO();
            dto.setId(comment.getId());
            dto.setTexto(comment.getTexto());
            dto.setAutorNome(comment.getUser().getNome());
            dto.setCriadoEm(comment.getCriadoEm());
            return dto;
        }).collect(Collectors.toList());
    }

    @PostMapping("/patches/{patchId}/comments")
    public CommentDTO createComment(@PathVariable Long patchId, @RequestBody CommentCreateDTO dto, Authentication authentication) {
        String email = authentication.getName();
        User user = userService.findUserByEmail(email); // busca o User completo
        Comment comment = commentService.createComment(patchId, user, dto.getTexto());
        
        CommentDTO response = new CommentDTO();
        response.setId(comment.getId());
        response.setTexto(comment.getTexto());
        response.setAutorNome(comment.getUser().getNome());
        response.setCriadoEm(comment.getCriadoEm());
        return response;
    }

    @DeleteMapping("/comments/{id}")
    public void deleteComment(@PathVariable Long id, Authentication authentication) {
        String email = authentication.getName();
        User user = userService.findUserByEmail(email);
        commentService.deleteComment(id, user);
    }

}
