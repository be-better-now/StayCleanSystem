package com.stayclean.entity;

import com.stayclean.enums.QuestionType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name = "questions")
public class QuestionEntity {

    @Id
    @Size(min = 2, max = 10, message = "Question ID must be between 2 and 10 characters!")
    @Column(name = "question_id")
    private int questionID;

    @NotBlank(message = "Question content cannot be blank")
    @Size(max = 255, message = "Question must be less than 255 characters")
    @Pattern(regexp = "^[^<>]*$", message = "Question must not contain HTML tags")
    @Column(name = "question_content", columnDefinition = "NVARCHAR(255)")
    private String questionContent;

    @Column(name = "question_description", columnDefinition = "NVARCHAR(255)")
    @Size(max = 255, message = "Description must be less than 255 characters")
    private String questionDescription;

    @Enumerated(EnumType.STRING)
    @Column(name = "question_type", columnDefinition = "VARCHAR(20)")
    private QuestionType questionType;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private SurveyEntity survey;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AnswerEntity> answers;
}
