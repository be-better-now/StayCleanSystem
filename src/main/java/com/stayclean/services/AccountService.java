package com.stayclean.services;

import com.stayclean.entity.Role;
import com.stayclean.model.request.AccountRequest;
import com.stayclean.model.response.AccountResponse;
import jakarta.validation.constraints.NotBlank;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.stayclean.entity.UserEntity;
import com.stayclean.model.request.EmailDetail;
import com.stayclean.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service

public class AccountService implements IAccountService {
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserEntity banAccount(int userID) {
        UserEntity user = userRepo.findAccountByUserID(userID);
        user.setStatus(false);

        EmailDetail emailDetail = new EmailDetail();
        emailDetail.setUser(user);
        emailDetail.setSubject("Your account have been banned!");
        emailDetail.setLink(""); // hoặc link thông báo bị ban

        emailService.sendEmailBannedAccount(emailDetail);

        return userRepo.save(user);
    }

    @Override
    public UserEntity restoreAccount(int userID) {
        UserEntity user = userRepo.findAccountByUserID(userID);
        user.setStatus(true);

        EmailDetail emailDetail = new EmailDetail();
        emailDetail.setUser(user);
        emailDetail.setSubject("Your account have been restore!");

        if (user.getRole() == Role.MEMBER) {
            emailDetail.setLink("http://localhost:5173/");
        } else {
            emailDetail.setLink("http://localhost:5173/admin");
        }

        emailService.sendEmailRestoreAccount(emailDetail);

        return userRepo.save(user);
    }

    @Override
    public List<AccountResponse> getAllAccounts() {
        return userRepo.findAll()
                .stream()
                .map(user -> modelMapper.map(user, AccountResponse.class))
                .toList();
    }

    @Override
    public AccountResponse getAccountById(int id) {
        UserEntity user = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return modelMapper.map(user, AccountResponse.class);
    }

    @Override
    public AccountResponse updateAccount(int id, AccountRequest request) {
        UserEntity user = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFirstName(request.getFirstName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());

        return modelMapper.map(userRepo.save(user), AccountResponse.class);
    }

    @Override
    public void deleteAccount(int id) {
        userRepo.deleteById(id);
    }
}
