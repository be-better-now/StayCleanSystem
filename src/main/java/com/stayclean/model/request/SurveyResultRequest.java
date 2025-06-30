package com.stayclean.model.request;

import com.stayclean.entity.UserEntity;
import lombok.Data;

import java.util.Map;

@Data
public class SurveyResultRequest {
    private int surveyID;
    private int userID;
    private UserEntity user;
    private Map<Integer, String> answers; // key: questionID, value: user chọn gì

}
