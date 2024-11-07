package com.example.questifysharedapi.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "TB_USER")
@Data // Generate getters , setters and constructors
//@NoArgsConstructor
//@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
//@Builder // It's like a constructor more simplified
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column(unique = true, nullable = true)
    private String email;
    @Column
    private String password;
    @CreatedDate
    @Column(name = "created_at", nullable = true)
    private LocalDateTime createdAt;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true)
    private Role type;

    public enum Role {
        TEACHER,
        STUDENT
    }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
    private List<Comment> comments;

    @Column(nullable = true)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Classification> classifications = new ArrayList<>();

}
