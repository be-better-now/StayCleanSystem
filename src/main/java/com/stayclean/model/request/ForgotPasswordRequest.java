package com.stayclean.model.request;

import jakarta.validation.constraints.Email;

public class ForgotPasswordRequest {
    @Email(message = "Invalid email")
    String email;
}
