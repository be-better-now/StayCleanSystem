package com.stayclean.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "Users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userID;

    @Column(columnDefinition = "NVARCHAR(30)")
    private String firstName;

    @Column(columnDefinition = "NVARCHAR(30)")
    private String lastName;

    @Column(columnDefinition = "VARCHAR(100)")
    private String email;

    private String avatar;

    @Column(columnDefinition = "VARCHAR(30)")
    private String username;

    @Column(columnDefinition = "VARCHAR(30)")
    private String password;

    private String address;

    @Column(columnDefinition = "VARCHAR(10)")
    private String phone;

    @Column(columnDefinition = "TINYINT")
    private int roleID;
    private boolean status;

    public UserEntity() {
    }

    public UserEntity(int userID, String firstName, String lastName, String email, String avatar, String username, String password, String address, String phone, int roleID, boolean status) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
        this.username = username;
        this.password = password;
        this.address = address;
        this.phone = phone;
        this.roleID = roleID;
        this.status = status;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
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

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getUsername() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
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

    public int getRoleID() {
        return roleID;
    }

    public void setRoleID(int roleID) {
        this.roleID = roleID;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
