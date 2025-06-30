package com.stayclean.repository;

import com.stayclean.entity.SurveyRecordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRecordRepository extends JpaRepository<SurveyRecordEntity, Integer> {
    // Bạn có thể thêm các method tuỳ chỉnh nếu cần, ví dụ:
    // List<SurveyResultEntity> findByUser_UserID(int userId);
    // List<SurveyResultEntity> findBySurvey_SurveyID(int surveyId);
}
