package com.stayclean.repository;

import com.stayclean.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByUsername(String username);
    Optional<UserEntity> findAccountByUserID(int userID);
    Optional<UserEntity> findAccountByEmail(String email);
    Optional<UserEntity> findAccountByRoleID(int roleID);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
