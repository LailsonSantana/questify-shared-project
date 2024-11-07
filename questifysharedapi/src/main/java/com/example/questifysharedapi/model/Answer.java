package com.example.questifysharedapi.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "TB_ANSWER")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String text;

    private Boolean isCorrect;

    @ManyToOne
    @JoinColumn(name = "question_id") // foreigner key
    @JsonIgnore // Used to resolve serialization problems
    private Question question;

}
