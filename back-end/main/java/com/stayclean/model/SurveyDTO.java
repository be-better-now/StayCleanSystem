

import java.util.List;

public class SurveyDTO {
    private int surveyID;
    private String surveyName;
    private String surveyDescription;
    private String surveyDate;
    private String surveyCategory;
    private List<QuestionDTO> questions;

    public SurveyDTO() {
    }

    public SurveyDTO(int surveyID, String surveyName, String surveyDescription, String surveyDate, String surveyCategory, List<QuestionDTO> questions) {
        this.surveyID = surveyID;
        this.surveyName = surveyName;
        this.surveyDescription = surveyDescription;
        this.surveyDate = surveyDate;
        this.surveyCategory = surveyCategory;
        this.questions = questions;
    }

    public int getSurveyID() {
        return surveyID;
    }

    public void setSurveyID(int surveyID) {
        this.surveyID = surveyID;
    }

    public String getSurveyName() {
        return surveyName;
    }

    public void setSurveyName(String surveyName) {
        this.surveyName = surveyName;
    }

    public String getSurveyDescription() {
        return surveyDescription;
    }

    public void setSurveyDescription(String surveyDescription) {
        this.surveyDescription = surveyDescription;
    }

    public String getSurveyDate() {
        return surveyDate;
    }

    public void setSurveyDate(String surveyDate) {
        this.surveyDate = surveyDate;
    }

    public String getSurveyCategory() {
        return surveyCategory;
    }

    public void setSurveyCategory(String surveyCategory) {
        this.surveyCategory = surveyCategory;
    }

    public List<QuestionDTO> getQuestions() {
        return questions;
    }

    public void setQuestions(List<QuestionDTO> questions) {
        this.questions = questions;
    }
}
