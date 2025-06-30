package com.stayclean.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "answers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerEntity {
    @Id
    @Column(name = "answer_id")
    private int answerID;

    @NotBlank(message = "Answer content must not be blank")
    @Size(max = 255, message = "Answer must be less than 255 characters")
    @Column(name = "answer_content", columnDefinition = "NVARCHAR(255)")
    private String content;

    @Column(name = "is_correct")
    private boolean isCorrect; // true nếu đây là đáp án đúng (nếu có chấm điểm)

    // A, B, C, D
    @Column(name = "answer_label", columnDefinition = "NVARCHAR(10)")
    private String label;

    @Column(name = "image_url", columnDefinition = "VARCHAR(255)")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private QuestionEntity question;
}
