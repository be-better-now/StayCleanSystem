package com.stayclean.services;

import com.stayclean.enums.Role;
import com.stayclean.model.request.RegisterRequest;
import com.stayclean.model.response.RegisterResponse;
import com.stayclean.repository.UserRepository;
import com.stayclean.entity.UserEntity;
import com.stayclean.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JwtUtils jwtUtil;

    @Autowired
    private EmailService emailService;

    public UserEntity login(String username, String password) {
        Optional<UserEntity> optionalUser = userRepo.findByUsername(username);

        if (optionalUser.isPresent()) {
            UserEntity user = optionalUser.get();
            if (user.getPassword().equals(password) && user.isStatus()) {
                return user;
            }
        }

        return null;
    }

    public RegisterResponse registerUser(RegisterRequest user) {
        if (userRepo.existsByUsername(user.getUserName())) {
            throw new IllegalArgumentException("Username already exists.");
        }

        if (userRepo.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already registered.");
        }

        UserEntity userEntity = new UserEntity();
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());
        userEntity.setEmail(user.getEmail());
        userEntity.setUsername(user.getUserName());
        userEntity.setPassword(user.getPassword()); // Cần mã hóa bằng BCrypt sau này
//        userEntity.setAddress(user.getAddress());
//        userEntity.setPhone(user.getPhone());
        userEntity.setRole(Role.MEMBER);
        userEntity.setStatus(true);

        UserEntity savedUser = userRepo.save(userEntity);

        String token = jwtUtil.generateToken(savedUser.getUsername());

        return new RegisterResponse(true, "Register successful", token, savedUser);
    }
}
