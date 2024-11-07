package com.example.questifysharedapi.controller;

import com.example.questifysharedapi.dto.UserRecordDTO;
import com.example.questifysharedapi.model.User;
import com.example.questifysharedapi.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;


import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSaveUser_Success() throws Exception {
        UserRecordDTO userRecordDTO = new UserRecordDTO(
                2L,"Paulo","paulo1@gmail.com","paulo123", User.Role.STUDENT,1L);
        User user = new User();
        when(userService.saveUser(any(UserRecordDTO.class))).thenReturn(user);

        mockMvc.perform(post("/api/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"name\": \"Test User\", \"email\": \"test@example.com\" }")) // Exemplo de JSON
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    public void testSaveUser_Conflict() throws Exception {

        when(userService.saveUser(any(UserRecordDTO.class))).thenThrow(new RuntimeException("Error"));

        mockMvc.perform(post("/api/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"name\": \"Test User\", \"email\": \"test@example.com\" }")) // Exemplo de JSON
                .andExpect(status().isConflict());
    }

    @Test
    public void testGetAllUsers() throws Exception {
        List<User> users = new ArrayList<>();
        users.add(new User()); // Adicione exemplos de usuários
        when(userService.getAllUsers()).thenReturn(users);

        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
}
