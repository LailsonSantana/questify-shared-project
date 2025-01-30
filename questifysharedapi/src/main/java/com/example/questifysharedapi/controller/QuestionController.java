package com.example.questifysharedapi.controller;



import com.example.questifysharedapi.dto.QuestionRecordDTO;
import com.example.questifysharedapi.exception.InappropriateContentException;
import com.example.questifysharedapi.model.Question;
import com.example.questifysharedapi.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@Slf4j // Annotation to log creation
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    
    @PostMapping
    public ResponseEntity<Question> saveQuestion(@RequestBody QuestionRecordDTO questionRecordDTO){
        try{
            return ResponseEntity.status(HttpStatus.CREATED).body(questionService.saveQuestion(questionRecordDTO));
        }catch (InappropriateContentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<QuestionRecordDTO>> getAllQuestions(){

        return ResponseEntity.ok(questionService.getAllQuestions());
    }

    @GetMapping("/filter")
    public ResponseEntity<List<QuestionRecordDTO>> filterQuestions(@RequestParam String discipline){
        List<QuestionRecordDTO> qdto = questionService.filterQuestions(discipline);
        return ResponseEntity.ok(qdto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<QuestionRecordDTO>> getQuestionsByUserId(@PathVariable Long id){
        log.info("FOI CHAMADO O MÉTODO BY USER ID");
        List<QuestionRecordDTO> qdto = questionService.getAllByUser(id);
        return ResponseEntity.ok(qdto);
    }

    @GetMapping("questionId/{id}")
    public ResponseEntity<QuestionRecordDTO> getQuestionsById(@PathVariable Long id){
        log.info("FOI CHAMADO O MÉTODO QUESTION BY ID");
        QuestionRecordDTO qdto = questionService.getQuestionById(id);
        return ResponseEntity.ok(qdto);
    }
}
