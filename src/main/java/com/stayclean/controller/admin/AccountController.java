package com.stayclean.controller.admin;

import com.stayclean.entity.UserEntity;
import com.stayclean.model.request.AccountRequest;
import com.stayclean.model.response.AccountResponse;
import com.stayclean.services.AccountService;
import com.stayclean.services.IAccountService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/account")
@SecurityRequirement(name = "api")
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

    @GetMapping
    public ResponseEntity<List<AccountResponse>> getAllAccounts() {
        return ResponseEntity.ok(accountService.getAllAccounts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountResponse> getAccountById(@PathVariable int id) {
        return ResponseEntity.ok(accountService.getAccountById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccountResponse> updateAccount(@PathVariable int id, @RequestBody AccountRequest request) {
        return ResponseEntity.ok(accountService.updateAccount(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable int id) {
        accountService.deleteAccount(id);
        return ResponseEntity.noContent().build();
    }
}
