package com.stayclean.services;


import com.stayclean.entity.*;
import com.stayclean.model.request.SurveyResultRequest;
import com.stayclean.model.response.QuestionResponse;
import com.stayclean.model.response.SurveyResponse;
import com.stayclean.model.response.SurveyResultResponse;
import com.stayclean.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class SurveyResultService {

    @Autowired
    private SurveyRepository surveyRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SurveyRecordRepository surveyRecordRepository;

    public SurveyResultResponse submitSurvey(SurveyResultRequest request) {

        SurveyEntity survey = surveyRepository.findById(request.getSurveyID())
                .orElseThrow(() -> new RuntimeException("Survey not found"));

        UserEntity user = userRepository.findById(request.getUserID())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<QuestionResponse, String> answerMap = new LinkedHashMap<>();
        int correctCount = 0;

        for (Map.Entry<Integer, String> entry : request.getAnswers().entrySet()) {
            int questionID = entry.getKey();
            String userAnswer = entry.getValue();

            QuestionEntity question = questionRepository.findById(questionID)
                    .orElseThrow(() -> new RuntimeException("Question not found: " + questionID));

            // Tạo QuestionResponse để trả ra kết quả
            QuestionResponse questionRes = new QuestionResponse(
                    question.getQuestionID(),
                    question.getQuestionContent(),
                    question.getChoices() // method này bạn cần tự viết trong QuestionEntity
            );

            answerMap.put(questionRes, userAnswer);

            // Chấm điểm nếu user trả lời đúng
            if (question.getCorrectAnswer() != null &&
                    question.getCorrectAnswer().equalsIgnoreCase(userAnswer)) {
                correctCount++;
            }
        }

        // Tính đánh giá dựa trên số câu đúng
        String recommendation = getRecommendation(correctCount, answerMap.size());

        // Tạo bản ghi khảo sát
        SurveyRecordEntity record = new SurveyRecordEntity();
        record.setUser(user);
        record.setSurvey(survey);
        record.setSubmittedAt(LocalDateTime.now());
        record.setRecommendation(recommendation);
        record.setAnswersJson(toJsonString(request.getAnswers()));

        SurveyRecordEntity savedRecord = surveyRecordRepository.save(record);

        // Chuẩn bị trả kết quả
        SurveyResponse surveyRes = new SurveyResponse(
                survey.getSurveyID(),
                survey.getSurveyName(),
                survey.getSurveyDescription(),
                survey.getSurveyDate(),
                survey.getSurveyCategory(),
                survey.getQuestions()
        );

        return new SurveyResultResponse(
                savedRecord.getRecordID(),
                user,
                surveyRes,
                answerMap,
                recommendation,
                savedRecord.getSubmittedAt()
        );
    }

    private String getRecommendation(int correct, int total) {
        double score = (double) correct / total;
        if (score >= 0.9) return "Excellent!";
        if (score >= 0.7) return "Good job!";
        if (score >= 0.5) return "Keep trying.";
        return "Needs improvement.";
    }

    private String toJsonString(Map<Integer, String> map) {
        return map.entrySet().stream()
                .map(e -> "\"" + e.getKey() + "\":\"" + e.getValue() + "\"")
                .collect(Collectors.joining(",", "{", "}"));
    }
}