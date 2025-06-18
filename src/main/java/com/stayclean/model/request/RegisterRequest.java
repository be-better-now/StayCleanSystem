package com.stayclean.model.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstName;
    private String lastName;
    @NotBlank(message = "Email required")
    @Email(message = "Email invalid")
    private String email;
    @NotBlank(message = "User name required")
    @Size(min = 3, max = 50, message = "User name must between 3 and 50 character")
    private String userName;
    @NotBlank(message = "Password required")
    @Size(min = 6, message = "Password must have at least 6 character")
    private String password;
//    private String address;
//    private String phone;
    private LocalDate birth;
    private String sex;
}
