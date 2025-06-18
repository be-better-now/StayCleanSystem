package com.stayclean.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class SurveyResponse {
    private int surveyID;
    private String surveyName;
    private String surveyDescription;
    private String surveyDate;
    private String surveyCategory;
    private List<QuestionResponse> questions;
}
