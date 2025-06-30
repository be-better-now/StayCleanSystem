package com.stayclean.model.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SurveyRequest {
    @Size(min = 2, max = 10, message = "Survey ID must be between 2 and 10 characters!")
    private int surveyID;

    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Survey name must not contain special characters!")
    @NotBlank(message = "Survey name must not be blank")
    @Size(max = 100, message = "Survey name must be between 2 and 100 characters")
    private String surveyName;

    @Size(max = 255, message = "Survey description must be less than 255 characters")
    private String surveyDescription;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Survey date must be in the format yyyy-MM-dd")
    private String surveyDate;

    @Size(min = 2, max = 50, message = "Survey category must be between 2 and 50 characters")
    private String surveyCategory;

    @Pattern(regexp = "^(Active|Inactive)$", message = "Status must be Active or Inactive")
    private String surveyStatus;
}