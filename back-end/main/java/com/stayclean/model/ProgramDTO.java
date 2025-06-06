package com.stayclean.model;

public class ProgramDTO {
    private String programID;
    private String programName;
    private String programDescription;
    private String programDate;
    private String programCategory;

    public ProgramDTO() {
    }

    public ProgramDTO(String programID, String programName, String programDescription, String programDate, String programCategory) {
        this.programID = programID;
        this.programName = programName;
        this.programDescription = programDescription;
        this.programDate = programDate;
        this.programCategory = programCategory;
    }

    public String getProgramID() {
        return programID;
    }

    public void setProgramID(String programID) {
        this.programID = programID;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getProgramDescription() {
        return programDescription;
    }

    public void setProgramDescription(String programDescription) {
        this.programDescription = programDescription;
    }

    public String getProgramDate() {
        return programDate;
    }

    public void setProgramDate(String programDate) {
        this.programDate = programDate;
    }

    public String getProgramCategory() {
        return programCategory;
    }

    public void setProgramCategory(String programCategory) {
        this.programCategory = programCategory;
    }
}
