
package com.stayclean.model;

public class QuestionDTO {
    private String questionID;
    private String questionContent;
    private String questionType;
    private String questionCategory;
    private String answer;

    public QuestionDTO() {
    }

    public QuestionDTO(String questionID, String questionContent, String questionType, String questionCategory, String answer) {
        this.questionID = questionID;
        this.questionContent = questionContent;
        this.questionType = questionType;
        this.questionCategory = questionCategory;
        this.answer = answer;
    }

    public String getQuestionID() {
        return questionID;
    }

    public void setQuestionID(String questionID) {
        this.questionID = questionID;
    }

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getQuestionCategory() {
        return questionCategory;
    }

    public void setQuestionCategory(String questionCategory) {
        this.questionCategory = questionCategory;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
