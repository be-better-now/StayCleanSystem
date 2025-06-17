package com.stayclean.model.response;

import com.stayclean.entity.UserEntity;
import com.stayclean.model.UserDTO;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthResponse {
    private boolean success;
    private String message;
    private UserEntity user;

    public AuthResponse() {
    }

    public AuthResponse(boolean success, String message, UserEntity user) {
        this.success = success;
        this.message = message;
        this.user = user;
    }

}
