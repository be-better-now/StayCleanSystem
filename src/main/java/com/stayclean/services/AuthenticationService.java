package com.stayclean.services;

import com.stayclean.entity.Role;
import com.stayclean.model.request.EmailDetail;
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

    // Xóa account bằng cách setStatus = 0
    public UserEntity deleteAccount(int userID) {
        UserEntity user = userRepo.findAccountByUserID(userID);
        user.setStatus(false);

        EmailDetail emailDetail = new EmailDetail();
        emailDetail.setUser(user);
        emailDetail.setSubject("Your account have been banned!");
        emailDetail.setLink("");

        emailService.sendEmailBannedAccount(emailDetail);



        return userRepo.save(user);
    }

    // Khôi phục account bị xóa
    public UserEntity restoreAccount(int userID) {
        UserEntity user = userRepo.findAccountByUserID(userID);
        user.setStatus(true);

        EmailDetail emailDetail = new EmailDetail();
        emailDetail.setUser(user);
        emailDetail.setSubject("Your account have been restore!");
        if (user.getRole().toString().equals("MEMBER")) {
            emailDetail.setLink("http://103.90.227.68/");
        } else {
            emailDetail.setLink("http://103.90.227.68/shop");
        }

        emailService.sendEmailRestoreAccount(emailDetail);

        return userRepo.save(user);
    }
}
