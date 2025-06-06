
import java.time.LocalDateTime;
import java.util.Map;


public class SurveyResultDTO {
    private int surveyResultID;
    private UserDTO user;
    private SurveyDTO survey;
    private Map<QuestionDTO, String> answers;
    private String recommendation;
    private LocalDateTime surveyTime;
public SurveyResultDTO() {
        // Default constructor
    }
    public SurveyResultDTO(int surveyResultID, UserDTO user, SurveyDTO survey, Map<QuestionDTO, String> answers,
                           String recommendation, LocalDateTime surveyTime) {
        this.surveyResultID = surveyResultID;
        this.user = user;
        this.survey = survey;
        this.answers = answers;
        this.recommendation = recommendation;
        this.surveyTime = surveyTime;
    }
    public int getSurveyResultID() {
        return surveyResultID;
    }

    public void setSurveyResultID(int surveyResultID) {
        this.surveyResultID = surveyResultID;
    }

    public UserDTO getUser() {
        return user;
    }


    public void setUser(UserDTO user) {
        this.user = user;
    }

    public SurveyDTO getSurvey() {
        return survey;
    }

    public void setSurvey(SurveyDTO survey) {
        this.survey = survey;
    }

    public Map<QuestionDTO, String> getAnswers() {
        return answers;
    }

    public void setAnswers(Map<QuestionDTO, String> answers) {
        this.answers = answers;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public LocalDateTime getSurveyTime() {
        return surveyTime;
    }

    public void setSurveyTime(LocalDateTime surveyTime) {
        this.surveyTime = surveyTime;
    }

}