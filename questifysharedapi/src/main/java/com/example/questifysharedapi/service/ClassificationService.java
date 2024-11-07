package com.example.questifysharedapi.service;

import com.example.questifysharedapi.dto.ClassificationRecordDTO;
import com.example.questifysharedapi.model.Classification;
import com.example.questifysharedapi.model.Question;
import com.example.questifysharedapi.model.User;
import com.example.questifysharedapi.repository.ClassificationRepository;
import com.example.questifysharedapi.repository.QuestionRepository;
import com.example.questifysharedapi.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class ClassificationService {

    private final ClassificationRepository classificationRepository;
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;


    @Transactional
    public Classification saveClassification(ClassificationRecordDTO classificationRecordDTO) {
        // Get the User and Question options
        Optional<Question> opQuestion = questionRepository.findById(classificationRecordDTO.questionId());
        Optional<User> opUser = userRepository.findById(classificationRecordDTO.userId());

        // Verify if both are presents
        if (opQuestion.isPresent() && opUser.isPresent()) {
            Question question = opQuestion.get();
            User user = opUser.get();

            // Try to access the existent classification
            Optional<Classification> existingClassification = classificationRepository.findByUserIdAndQuestionId(
                    user.getId(), question.getId());

            Classification classification;

            if (existingClassification.isPresent()) {
                // If already a classification update the note
                classification = existingClassification.get();
                classification.setNota(classificationRecordDTO.nota());
            } else {
                // Otherwise makes a new classification
                classification = new Classification();
                classification.setNota(classificationRecordDTO.nota());
                classification.setQuestion(question);
                classification.setUser(user);
            }

            // Save the classification or update
            return classificationRepository.save(classification);
        } else {
            // Lidar com o caso em que o User ou Question não existe
            throw new EntityNotFoundException("User or Question not found");
        }
    }

    @Transactional
    public ClassificationRecordDTO getClassificationByUserAndQuestion(Long userId , Long questionId){
        Optional<Classification> classification = classificationRepository.findByUserIdAndQuestionId(userId,questionId);
        Classification classification1 = classification.get();
        return new ClassificationRecordDTO(
                    classification1.getUser().getId(),
                    classification1.getQuestion().getId() ,
                    classification1.getNota());
    }
}
