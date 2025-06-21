package com.stayclean.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "surveys")
public class SurveyEntity {
    @Id
    @Size(min = 2, max = 10, message = "Survey ID must be between 2 and 10 characters!")
    @Column(name = "survey_id", length = 10)
    private int surveyID;

    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Survey name must not contain special characters!")
    @NotBlank(message = "Survey name must not be blank")
    @Size(max = 25, message = "Survey name must be between 2 and 100 characters")
    @Column(name = "survey_name", length = 100)
    private String surveyName;

    @Size(max = 255, message = "Survey description must be less than 255 characters")
    @Column(name = "survey_description", length = 255)
    private String surveyDescription;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Survey date must be in the format yyyy-MM-dd")
    @Column(name = "survey_date", length = 20)
    private String surveyDate;

    @OneToMany(mappedBy = "survey", cascade = CascadeType.ALL)
    private List<QuestionEntity> questions;

    @Size(min = 2, max = 50, message = "Survey category must be between 2 and 50 characters")
    @Column(name = "survey_category", length = 50)
    private String surveyCategory;

    @Pattern(regexp = "^(Active|Inactive)$", message = "Status must be Active or Inactive")
    @Column(name = "survey_status", length = 20)
    private String surveyStatus;
}
