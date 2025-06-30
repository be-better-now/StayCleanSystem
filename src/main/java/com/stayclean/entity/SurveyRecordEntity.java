package com.stayclean.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "survey_records")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SurveyRecordEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private int recordID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey_id", nullable = false)
    private SurveyEntity survey;

    @Column(name = "submitted_at")
    private LocalDateTime submittedAt;

    @Column(name = "recommendation", columnDefinition = "NVARCHAR(255)")
    private String recommendation;

    @Column(name = "answers_json", columnDefinition = "NVARCHAR(MAX)")
    private String answersJson;
}