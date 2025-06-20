package com.stayclean.services;

import com.stayclean.entity.UserEntity;
import com.stayclean.model.request.AccountRequest;
import com.stayclean.model.response.AccountResponse;

import java.util.List;

public interface IAccountService {
    UserEntity banAccount(int userId);
    UserEntity restoreAccount(int userId);
    List<AccountResponse> getAllAccounts();
    AccountResponse getAccountById(int id);
    AccountResponse updateAccount(int id, AccountRequest request);
    void deleteAccount(int id);
}
