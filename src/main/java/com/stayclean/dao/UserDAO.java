//package com.stayclean.dao;
//
//import com.stayclean.entity.UserEntity;
//import com.stayclean.model.UserDTO;
//import com.stayclean.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.sql.*;
//
//@Service
//public class UserDAO {
//    @Autowired
//    UserRepository UserRepository;
//    private final String jdbcURL = "jdbc:mysql://localhost:8080/StayClean";
//    private final String jdbcUsername = "sa";
//    private final String jdbcPassword = "12345";
//
//    private Connection getConnection() throws SQLException {
//        return DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
//    }
//
//    public UserDTO checkLogin(String username, String password) {
//        String sql = "SELECT * FROM users WHERE userName = ? AND password = ? AND status = 1";
//
//        try (Connection conn = getConnection();
//             PreparedStatement ps = conn.prepareStatement(sql)) {
//            ps.setString(1, username);
//            ps.setString(2, password);
//
//            ResultSet rs = ps.executeQuery();
//            if (rs.next()) {
//                return new UserDTO(
//                        rs.getInt("userID"),
//                        rs.getString("firstName"),
//                        rs.getString("lastName"),
//                        rs.getString("email"),
//                        rs.getString("avatar"),
//                        rs.getString("userName"),
//                        rs.getString("password"),
//                        rs.getString("address"),
//                        rs.getString("phone"),
//                        rs.getInt("roleID"),
//                        rs.getBoolean("status")
//                );
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return null;
//    }
//
////      public UserDTO findByID(long id){
////              UserDTO user = UserRepository.findBy(UserEntity, id);
////
////      }
//}
