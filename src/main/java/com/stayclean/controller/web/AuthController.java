package com.stayclean.controller.web;

import com.stayclean.dao.UserDAO;
import com.stayclean.model.AuthRequest;
import com.stayclean.model.AuthResponse;
import com.stayclean.model.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Cho phép gọi từ client khác domain nếu cần
public class AuthController {
    @Autowired
    UserDAO userDAO;
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
//    @PostMapping("/register")
//    public ResponseEntity register(@RequestBody UserDTO userDTO) {
//        UserDTO newUser = new UserDTO();
//        userDAO.registerUser(newUser);
//        return ResponseEntity.ok(newUser);
//    }
}
