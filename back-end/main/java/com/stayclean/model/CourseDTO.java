package com.stayclean.model;

public class CourseDTO {
    private String courseID;
    private String courseName;
    private String courseDescription;
    private String courseDate;
    private String courseTime;
    private String courseLocation;
    private String courseCategory;
    private String courseType;
    private String courseStatus;

    public CourseDTO() {
    }

    public CourseDTO(String courseID, String courseName, String courseDescription, String courseDate, String courseTime, String courseLocation, String courseCategory, String courseType, String courseStatus) {
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseDate = courseDate;
        this.courseTime = courseTime;
        this.courseLocation = courseLocation;
        this.courseCategory = courseCategory;
        this.courseType = courseType;
        this.courseStatus = courseStatus;
    }

    public String getCourseID() {
        return courseID;
    }

    public void setCourseID(String courseID) {
        this.courseID = courseID;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public String getCourseDate() {
        return courseDate;
    }

    public void setCourseDate(String courseDate) {
        this.courseDate = courseDate;
    }

    public String getCourseTime() {
        return courseTime;
    }

    public void setCourseTime(String courseTime) {
        this.courseTime = courseTime;
    }

    public String getCourseLocation() {
        return courseLocation;
    }

    public void setCourseLocation(String courseLocation) {
        this.courseLocation = courseLocation;
    }

    public String getCourseCategory() {
        return courseCategory;
    }

    public void setCourseCategory(String courseCategory) {
        this.courseCategory = courseCategory;
    }

    public String getCourseType() {
        return courseType;
    }

    public void setCourseType(String courseType) {
        this.courseType = courseType;
    }

    public String getCourseStatus() {
        return courseStatus;
    }

    public void setCourseStatus(String courseStatus) {
        this.courseStatus = courseStatus;
    }
}
