package com.stayclean.controller.web;


import com.stayclean.entity.UserEntity;
import com.stayclean.model.request.AuthRequest;
import com.stayclean.model.response.AuthResponse;
import com.stayclean.model.request.RegisterRequest;
import com.stayclean.model.UserDTO;
import com.stayclean.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Cho phép gọi từ client khác domain nếu cần
public class AuthController {
    @Autowired
    UserService userService;

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        UserEntity user = userService.login(request.getUserName(), request.getPassword());

        if (user != null) {
            return new AuthResponse(true, "Login successful", user);
        } else {
            return new AuthResponse(false, "Invalid username or password", null);
        }
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest user, BindingResult result) {
        if (result.hasErrors()) {
            // Collect and return validation error messages
            StringBuilder errors = new StringBuilder();
            result.getFieldErrors().forEach(error -> {
                errors.append(error.getDefaultMessage()).append(" ");
            });
            return ResponseEntity.badRequest().body(errors.toString().trim());
        }

        try {
            UserDTO newUser = userService.registerUser(user);
            return ResponseEntity.ok(newUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Server error: " + e.getMessage());
        }
    }
}
