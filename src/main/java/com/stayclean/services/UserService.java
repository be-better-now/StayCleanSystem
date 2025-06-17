package com.stayclean.services;

import com.stayclean.model.request.RegisterRequest;
import com.stayclean.repository.UserRepository;
import com.stayclean.entity.UserEntity;
import com.stayclean.model.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

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

    private UserDTO convertToDTO(UserEntity entity) {
        UserDTO dto = new UserDTO();
        dto.setUserID(entity.getUserID());
        dto.setUserName(entity.getUsername());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setEmail(entity.getEmail());
        dto.setAvatar(entity.getAvatar());
        dto.setAddress(entity.getAddress());
        dto.setPhone(entity.getPhone());
        dto.setRoleID(entity.getRoleID());
        dto.setStatus(entity.isStatus());
        return dto;
    }

    public UserDTO registerUser(RegisterRequest user) {
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
        userEntity.setPassword(user.getPassword());  // ⚠ plain password, as you requested
        userEntity.setAddress(user.getAddress());
        userEntity.setPhone(user.getPhone());
        userEntity.setRoleID(2);      // Default: regular user
        userEntity.setStatus(true);   // Default: active

        UserEntity savedUser = userRepo.save(userEntity);
        return new UserDTO(savedUser);
    }
}
