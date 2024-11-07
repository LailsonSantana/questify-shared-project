package com.example.questifysharedapi.repository;

import com.example.questifysharedapi.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
}
