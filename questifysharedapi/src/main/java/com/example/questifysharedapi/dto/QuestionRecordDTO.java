package com.example.questifysharedapi.dto;


import java.util.List;

public record QuestionRecordDTO(Long id,
                                String statement,
                                String discipline,
                                List<AnswerRecordDTO> answers,
                                Long userId,
                                String nameUser) {
}


