package com.stayclean.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "consultant")
public class ConsultantEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "consultant_id")
    private Long memberID;

    @NotBlank(message = "Name can not be blank!")
    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Name must not contain special characters!")
    @Size(max = 20, message = "Name must be less than 20 characters!")
    private String name;

    @NotBlank(message = "Email can not be blank!")
    @Email(message = "Email invalid!")
    private String email;

    @Pattern(regexp = "(84|0[3|5|7|8|9])+(\\d{8})", message = "Invalid phone!")
    private String phone;


    private String bio;

    @OneToOne
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private UserEntity user;
}
