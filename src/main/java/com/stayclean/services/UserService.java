package com.stayclean.services;

import com.stayclean.exception.UserExistedException;
import com.stayclean.model.RegisterRequest;
import com.stayclean.repository.UserRepository;
import com.stayclean.entity.UserEntity;
import com.stayclean.model.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public UserDTO login(String username, String password) {
        return userRepo.findByUsernameAndPassword(username, password)
                .map(this::convertToDTO)
                .orElse(null);
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
    public UserDTO registerUser(RegisterRequest user){
        if(userRepo.existsByUsername(user.getUserName())){
            throw new UserExistedException("Username already exists: " + user.getUserName());
        }
        if(userRepo.existsByEmail(user.getEmail())){
            throw new UserExistedException("Email already exists: " + user.getEmail());
        }
        UserEntity userEntity = new UserEntity();
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());
        userEntity.setEmail(user.getEmail());
        userEntity.setUserName(user.getUserName());
        userEntity.setPassword(user.getPassword());
        userEntity.setAddress(user.getAddress());
        userEntity.setPhone(user.getPhone());
        userEntity.setRoleID(2); // Default role ID for regular users
        userEntity.setStatus(true); // Default status is active
        userRepo.save(userEntity);
        return new UserDTO(userEntity);
    }
}
