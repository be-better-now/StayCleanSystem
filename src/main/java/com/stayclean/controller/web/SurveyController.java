package com.stayclean.controller.web;

import com.stayclean.model.request.SurveyRequest;
import com.stayclean.model.response.SurveyResponse;
import com.stayclean.services.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
@CrossOrigin(origins = "*")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    // GET all surveys
    @GetMapping
    public List<SurveyResponse> getAllSurveys() {
        return surveyService.getAllSurveys();
    }

    // GET survey by ID
    @GetMapping("/{id}")
    public SurveyResponse getSurveyById(@PathVariable("id") int surveyId) {
        return surveyService.getSurveyById(surveyId);
    }

    // POST create new survey
    @PostMapping
    public SurveyResponse createSurvey(@RequestBody SurveyRequest request) {
        return surveyService.createSurvey(request);
    }

    // PUT update survey
    @PutMapping("/{id}")
    public SurveyResponse updateSurvey(@PathVariable("id") int surveyId,
                                       @RequestBody SurveyRequest request) {
        return surveyService.updateSurvey(surveyId, request);
    }

    // DELETE survey
    @DeleteMapping("/{id}")
    public void deleteSurvey(@PathVariable("id") int surveyId) {
        surveyService.deleteSurvey(surveyId);
    }
}
