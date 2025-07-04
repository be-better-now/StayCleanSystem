package com.stayclean.controller.web;


import com.stayclean.entity.UserEntity;
import com.stayclean.model.request.AuthRequest;
import com.stayclean.model.response.AuthResponse;
import com.stayclean.model.request.RegisterRequest;
import com.stayclean.model.response.RegisterResponse;
import com.stayclean.security.JwtUtils;
import com.stayclean.services.AuthenticationService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@SecurityRequirement(name = "api") // Dán qua các controller thì mới xài được token
public class AuthController {
    @Autowired
    AuthenticationService authenticationService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        UserEntity user = authenticationService.login(request.getUserName(), request.getPassword());

        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }

        String token = jwtUtils.generateToken(user.getUsername());
        return ResponseEntity.ok(new AuthResponse(true, "Login successful", user, token, user.getRole()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest user, BindingResult result) {
        if (result.hasErrors()) {
            StringBuilder errors = new StringBuilder();
            result.getFieldErrors().forEach(error -> {
                errors.append(error.getDefaultMessage()).append(" ");
            });
            return ResponseEntity.badRequest().body(errors.toString().trim());
        }

        try {
            RegisterResponse response = authenticationService.registerUser(user);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Server error: " + e.getMessage());
        }
    }
}
