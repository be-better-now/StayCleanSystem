package com.stayclean.entity;

import com.stayclean.enums.QuestionType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Entity
@Table(name = "questions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey_id", nullable = false)
    private SurveyEntity survey;

    // Danh sách các đáp án liên kết với câu hỏi
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<AnswerEntity> answers;

    // Đáp án đúng (ví dụ: "A", "B", "C", hoặc ID của answer)
    @Column(name = "correct_answer", columnDefinition = "NVARCHAR(50)")
    private String correctAnswer;

    @Transient
    public Map<String, String> getChoices() {
        if (answers == null) return Collections.emptyMap();
        return answers.stream()
                .collect(Collectors.toMap(
                        AnswerEntity::getLabel,
                        AnswerEntity::getContent
                ));
    }

}
