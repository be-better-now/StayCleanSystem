package com.stayclean.entity;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity {

    @Id //Khóa chính
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Tự tăng ID
    @Column(name = "userid")
    private int userID;

    //Validate input khi nhận dữ liệu từ phía client
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "First name must not contain special characters!")
    @Size(max = 25, message = "Name must be less than 25 characters!")
    @Column(name = "firstname", columnDefinition = "NVARCHAR(30)")
    private String firstName;

    //Validate input khi nhận dữ liệu từ phía client
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Last name must not contain special characters!")
    @Size(max = 25, message = "Name must be less than 25 characters!")
    @Column(name = "lastname", columnDefinition = "NVARCHAR(30)")
    private String lastName;

    @Column(columnDefinition = "VARCHAR(100)")
    private String email;

    private String avatar;

    private String gender;

    @DateTimeFormat(pattern = "yyyy/MM/dd") // nếu nhận từ form
    @JsonFormat(pattern = "yyyy/MM/dd")     // nếu nhận từ JSON
    private LocalDate birthday;

    @Column(unique = true, columnDefinition = "VARCHAR(30)")
    private String username;

    @Size(min = 6, message = "Password must be at least 6 characters!")
    @Column(columnDefinition = "VARCHAR(30)")
    private String password;

    private String address;

    @Column(columnDefinition = "VARCHAR(10)")
    private String phone;

    private Role Role;

    @Column(name = "status", columnDefinition = "VARCHAR(20) DEFAULT 'Active'")
    private boolean status;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private MemberEntity member;

}
