package com.example.questifysharedapi.repository;

import com.example.questifysharedapi.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {


    List<Comment> findAllByQuestionId(Long questionId);

}
