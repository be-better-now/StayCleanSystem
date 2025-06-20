package com.stayclean.model.request;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountRequest {
    @NotBlank
    private String lastName;
    @NotBlank
    private String firstName;

    @Email
    private String email;

    private String phone;
}
