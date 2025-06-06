
public class CourseDTO {
    private String courseID;
    private String courseName;
    private String courseDescription;
    private String courseDate;
    private String courseCategory;
    private String ageGroup;
    private String courseStatus;

    public CourseDTO() {
    }

    public CourseDTO(String courseID, String courseName, String courseDescription, String courseDate, String courseCategory, String ageGroup, String courseStatus) {
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseDate = courseDate;
        this.courseCategory = courseCategory;
        this.ageGroup = ageGroup;
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

    public String getCourseCategory() {
        return courseCategory;
    }

    public void setCourseCategory(String courseCategory) {
        this.courseCategory = courseCategory;
    }

    public String getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
    }

    public String getCourseStatus() {
        return courseStatus;
    }

    public void setCourseStatus(String courseStatus) {
        this.courseStatus = courseStatus;
    }
}