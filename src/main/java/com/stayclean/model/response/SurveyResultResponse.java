package com.stayclean.model.response;

import com.stayclean.model.UserDTO;
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
    private UserDTO user;
    private SurveyResponse survey;
    private Map<QuestionResponse, String> answers;
    private String recommendation;
    private LocalDateTime surveyTime;

}