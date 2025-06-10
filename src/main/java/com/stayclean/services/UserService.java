package com.stayclean.services;

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
        return userRepo.findByUserNameAndPassword(username, password)
                .map(this::convertToDTO)
                .orElse(null);
    }

    private UserDTO convertToDTO(UserEntity entity) {
        UserDTO dto = new UserDTO();
        dto.setUserID(entity.getUserID());
        dto.setUserName(entity.getUserName());
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
}
