package com.stayclean.repository;

import com.stayclean.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorizationRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByUsernameAndPassword(String username, String password);
}
