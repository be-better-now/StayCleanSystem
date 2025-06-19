package com.stayclean.services;

import com.stayclean.entity.UserEntity;

public interface IAccountService {
    UserEntity banAccount(int userId);
    UserEntity restoreAccount(int userId);
}
