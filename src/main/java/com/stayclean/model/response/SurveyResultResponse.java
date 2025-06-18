package com.stayclean.model.response;

import com.stayclean.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Map;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class SurveyResultResponse {
    private int surveyResultID;
    private UserEntity user;
    private SurveyResponse survey;
    private Map<QuestionResponse, String> answers;
    private String recommendation;
    private LocalDateTime surveyTime;

}