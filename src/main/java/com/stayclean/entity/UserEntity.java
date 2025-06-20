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
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity implements UserDetails {

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

    @Enumerated(EnumType.STRING) // Lưu giá trị enum dưới dạng chuỗi (MEMBER, STAFF, ADMIN)
    @Column(name = "role", columnDefinition = "VARCHAR(20)")
    private Role role;

    @Column(name = "status", columnDefinition = "VARCHAR(20) DEFAULT 'Active'")
    private boolean status;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private MemberEntity member;

    @Column(name = "is_banned")
    private boolean banned;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getUsername() {
        return this.username;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
