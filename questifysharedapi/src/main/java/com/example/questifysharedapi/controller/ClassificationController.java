package com.example.questifysharedapi.controller;

import com.example.questifysharedapi.dto.ClassificationRecordDTO;
import com.example.questifysharedapi.dto.CommentRecordDTO;
import com.example.questifysharedapi.model.Classification;
import com.example.questifysharedapi.service.ClassificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classifications")
@Slf4j // Annotation to log creation
@RequiredArgsConstructor
public class ClassificationController {

    private final ClassificationService classificationService;

    @PostMapping
    public ResponseEntity<Classification> saveClassification(@RequestBody ClassificationRecordDTO classificationRecordDTO){
        log.info("CLASSIFICATION  {}",classificationRecordDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(classificationService.saveClassification(classificationRecordDTO));

    }

    @GetMapping("/{questionId}/{userId}")
    public ResponseEntity<ClassificationRecordDTO> getClassificationByUserAndQuestion(@PathVariable Long questionId ,
                                                                                      @PathVariable Long userId){
        log.info("ESSE MÉTODO FOI CHAMADO");
        return ResponseEntity.ok(classificationService.getClassificationByUserAndQuestion(questionId,userId));
    }

}
