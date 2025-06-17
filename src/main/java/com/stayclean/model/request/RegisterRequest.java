package com.stayclean.model.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

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
    private String address;
    private String phone;

    public RegisterRequest() {
    }

    public RegisterRequest(String firstName, String lastName, String email, String userName, String password, String address, String phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.address = address;
        this.phone = phone;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
