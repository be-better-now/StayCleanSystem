package com.stayclean.services;

import com.stayclean.entity.Role;
import org.springframework.stereotype.Service;
import com.stayclean.entity.UserEntity;
import com.stayclean.model.request.EmailDetail;
import com.stayclean.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service

public class AccountService implements IAccountService {
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private EmailService emailService;

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
}
