package com.stayclean.controller.admin;

import com.stayclean.entity.UserEntity;
import com.stayclean.services.AccountService;
import com.stayclean.services.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/account")
@CrossOrigin(origins = "*")
public class AccountController {

    @Autowired
    private IAccountService accountService;

    @PutMapping("/ban/{id}")
    public ResponseEntity<UserEntity> banUser(@PathVariable int id) {
        return ResponseEntity.ok(accountService.banAccount(id));
    }

    @PutMapping("/restore/{id}")
    public ResponseEntity<UserEntity> restoreUser(@PathVariable int id) {
        return ResponseEntity.ok(accountService.restoreAccount(id));
    }
}
