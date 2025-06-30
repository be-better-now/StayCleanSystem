package com.stayclean.model.request;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UpdateUserRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String avatar;
    private String gender;
    private LocalDate birthday;
    private String address;
    private String phone;
}
