package com.stayclean.model.response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AccountResponse {
    private int userID;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private boolean banned;
}