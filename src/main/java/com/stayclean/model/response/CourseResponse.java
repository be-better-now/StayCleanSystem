package com.stayclean.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponse {
    private String courseID;
    private String courseName;
    private String courseDescription;
    private String courseDate;
    private String courseCategory;
    private String ageGroup;
    private String courseStatus;
}