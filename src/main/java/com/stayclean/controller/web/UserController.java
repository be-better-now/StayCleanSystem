package com.stayclean.controller.web;

import com.stayclean.entity.UserEntity;
import com.stayclean.model.request.UpdateUserRequest;
import com.stayclean.model.response.UpdateUserResponse;
import com.stayclean.repository.UserRepository;
import com.stayclean.security.JwtUtils;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@SecurityRequirement(name = "api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserInformation(@PathVariable int id,
                                                   @RequestBody UpdateUserRequest request) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Cập nhật thông tin
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setAvatar(request.getAvatar());
        user.setGender(request.getGender());
        user.setBirthday(request.getBirthday());
        user.setAddress(request.getAddress());
        user.setPhone(request.getPhone());

        userRepository.save(user);

        // ✅ Tạo JWT mới bằng username
        String newToken = jwtUtils.generateToken(user.getUsername());

        UpdateUserResponse response = new UpdateUserResponse(
                true,
                "User updated successfully",
                newToken
        );

        return ResponseEntity.ok(response);
    }
}
