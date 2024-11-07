package com.example.questifysharedapi.service;

import com.example.questifysharedapi.dto.CommentRecordDTO;
import com.example.questifysharedapi.model.Comment;
import com.example.questifysharedapi.model.Question;
import com.example.questifysharedapi.model.User;
import com.example.questifysharedapi.repository.CommentRepository;
import com.example.questifysharedapi.repository.QuestionRepository;
import com.example.questifysharedapi.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@AllArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;


    @Transactional
    public Comment saveComment(CommentRecordDTO commentRecordDTO){
        Comment comment = new Comment();
        comment.setText(commentRecordDTO.text());
        log.info("O ID da questão É {}",commentRecordDTO.questionId());
        Optional<Question> optionalQuestion = questionRepository.findById(commentRecordDTO.questionId());
        Question question = questionRepository.findById(commentRecordDTO.questionId()).get();
        if(optionalQuestion.isPresent()){
            log.info("ESTA PRESENTE {}");
        }else{
            log.info("nao ESTA PRESENTE {}");
        }



        User user = userRepository.findById(commentRecordDTO.userId()).get();
        comment.setQuestion(question);
        comment.setUser(user);

        return  commentRepository.save(comment);
    }

    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }

    @Transactional
    public List<CommentRecordDTO> getCommentsByQuestionId(Long questionId) {
        List<Comment> comments = new ArrayList<>();
        comments = commentRepository.findAllByQuestionId(questionId);
        return comments.stream()
                .map(comment -> new CommentRecordDTO(
                        comment.getId(),
                        comment.getText(),
                        comment.getUser().getId(),
                        comment.getQuestion().getId(),
                        comment.getUser().getName()
                ))
                .collect(Collectors.toList());
    }
}
