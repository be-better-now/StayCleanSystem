//package com.stayclean.controller.web;
//
//import com.stayclean.entity.UserEntity;
//import com.stayclean.model.UserDTO;
//import com.stayclean.services.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/users")
//@CrossOrigin("*") // Cho phép FE truy cập
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody UserEntity request) {
//        UserEntity user = userService.login(request.getUsername(), request.getPassword());
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.status(401).body("Invalid username or password");
//        }
//    }
//}
