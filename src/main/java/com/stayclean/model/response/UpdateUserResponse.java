package com.stayclean.model.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UpdateUserResponse {
    private boolean success;
    private String message;
    private String token;
}
