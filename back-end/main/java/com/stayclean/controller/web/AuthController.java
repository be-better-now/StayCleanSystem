package com.stayclean.controller.web;

import com.stayclean.model.AuthRequest;
import com.stayclean.model.AuthResponse;
import com.stayclean.model.UserDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Cho phép gọi từ client khác domain nếu cần
public class AuthController {

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
}
