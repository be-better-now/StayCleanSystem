package com.stayclean.services;

import com.stayclean.entity.SurveyEntity;
import com.stayclean.model.request.SurveyRequest;
import com.stayclean.model.response.SurveyResponse;
import com.stayclean.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    // Mapping entity -> response DTO
    private SurveyResponse mapToDto(SurveyEntity survey) {
        return new SurveyResponse(
                survey.getSurveyID(),
                survey.getSurveyName(),
                survey.getSurveyDescription(),
                survey.getSurveyDate(),
                survey.getSurveyCategory(),
                survey.getQuestions() // trả thẳng list<QuestionEntity>, nếu cần custom → map tiếp
        );
    }

    // Mapping request DTO -> entity
    private SurveyEntity mapToEntity(SurveyRequest request) {
        SurveyEntity survey = new SurveyEntity();
        survey.setSurveyID(request.getSurveyID());
        survey.setSurveyName(request.getSurveyName());
        survey.setSurveyDescription(request.getSurveyDescription());
        survey.setSurveyDate(request.getSurveyDate());
        survey.setSurveyCategory(request.getSurveyCategory());
        survey.setSurveyStatus(request.getSurveyStatus());
        return survey;
    }

    public List<SurveyResponse> getAllSurveys() {
        return surveyRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    public SurveyResponse getSurveyById(int surveyId) {
        SurveyEntity survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new RuntimeException("Survey not found with id: " + surveyId));
        return mapToDto(survey);
    }

    public SurveyResponse createSurvey(SurveyRequest request) {
        SurveyEntity survey = mapToEntity(request);
        return mapToDto(surveyRepository.save(survey));
    }

    public SurveyResponse updateSurvey(int surveyId, SurveyRequest request) {
        SurveyEntity survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new RuntimeException("Survey not found with id: " + surveyId));

        survey.setSurveyName(request.getSurveyName());
        survey.setSurveyDescription(request.getSurveyDescription());
        survey.setSurveyDate(request.getSurveyDate());
        survey.setSurveyCategory(request.getSurveyCategory());
        survey.setSurveyStatus(request.getSurveyStatus());

        return mapToDto(surveyRepository.save(survey));
    }

    public void deleteSurvey(int surveyId) {
        if (!surveyRepository.existsById(surveyId)) {
            throw new RuntimeException("Survey not found with id: " + surveyId);
        }
        surveyRepository.deleteById(surveyId);
    }
}
