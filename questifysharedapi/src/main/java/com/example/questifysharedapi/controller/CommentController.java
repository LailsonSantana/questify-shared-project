package com.example.questifysharedapi.controller;

import com.example.questifysharedapi.dto.CommentRecordDTO;
import com.example.questifysharedapi.dto.QuestionRecordDTO;
import com.example.questifysharedapi.model.Comment;
import com.example.questifysharedapi.model.Question;
import com.example.questifysharedapi.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
@Slf4j // Annotation to log creation
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<Comment> saveComment(@RequestBody CommentRecordDTO commentRecordDTO){
        //try{
            log.info("A ESTRUTURA DO COMMENT RECORD É  {}" ,commentRecordDTO);
            //log.info("Text {}" ,commentRecordDTO.nameUser());
            return ResponseEntity.status(HttpStatus.CREATED).body(commentService.saveComment(commentRecordDTO));
        //}catch (Exception e){
            //log.error(Arrays.toString(e.getStackTrace()));
            //return ResponseEntity.status(HttpStatus.CONFLICT).build();
        //}
    }


    @GetMapping("/{questionId}")
    public ResponseEntity<List<CommentRecordDTO>> getQuestionById(@PathVariable Long questionId){
        //Quando você passa o parâmetro usando o PathVariable a forma que vc deve colocar
        // no frontend é diferente de quando vc passa por @RequestParam
        return ResponseEntity.ok(commentService.getCommentsByQuestionId(questionId));
    }
}
