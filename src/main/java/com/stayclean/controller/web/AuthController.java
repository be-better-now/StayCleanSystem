package com.stayclean.controller.web;


import com.stayclean.model.request.AuthRequest;
import com.stayclean.model.response.AuthResponse;
import com.stayclean.model.RegisterRequest;
import com.stayclean.model.UserDTO;
import com.stayclean.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Cho phép gọi từ client khác domain nếu cần
public class AuthController {
    @Autowired
    UserService userService;
    // Giả lập dữ liệu user
    private final UserDTO mockUser = new UserDTO(
            1, "John", "Doe", "john@example.com", null,
            "johndoe", "123456", "123 Main St", "0123456789", 1, true
    );

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        if (request.getUserName().equals(mockUser.getUserName()) &&
                request.getPassword().equals(mockUser.getPassword())) {
            return new AuthResponse(true, "Login successful", mockUser);
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
