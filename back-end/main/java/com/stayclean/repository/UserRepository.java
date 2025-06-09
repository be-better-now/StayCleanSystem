package com.stayclean.repository;
import com.stayclean.model.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<UserDTO, Integer> {

}
