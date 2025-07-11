package com.stayclean.model.response;

import com.stayclean.entity.UserEntity;
import com.stayclean.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private boolean success;
    private String message;
    private UserEntity user;
    private String token;
    private Role role;
}
