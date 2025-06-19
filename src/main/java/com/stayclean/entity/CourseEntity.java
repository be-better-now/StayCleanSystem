package com.stayclean.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "courses")
public class CourseEntity {
    @Id
    @Size(min = 2, max = 10, message = "Course ID must be between 2 and 10 characters!")
    @Column(name = "course_id", length = 10)
    private String courseID;

    @Pattern(regexp = "^[a-zA-Z0-9 ]+$", message = "Course name must not contain special characters!")
    @Size(max = 25, message = "Course name must be between 2 and 100 characters")
    @Column(name = "course_name", length = 100)
    private String courseName;

    @Size(max = 255, message = "Course description must be less than 255 characters")
    @Column(name = "course_description", length = 255)
    private String courseDescription;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Course date must be in the format yyyy-MM-dd")
    @Column(name = "course_date", length = 20)
    private String courseDate;

    @Size(min = 2, max = 50, message = "Course category must be between 2 and 50 characters")
    @Column(name = "course_category", length = 50)
    private String courseCategory;

    @Pattern(regexp = "^(Kid|Teen|Adult)$", message = "Age group must be Kid, Teen or Adult")
    @Column(name = "age_group", length = 20)
    private String ageGroup;

    @Pattern(regexp = "^(Active|Inactive|Archived)$", message = "Status must be Active, Inactive or Archived")
    @Column(name = "course_status", length = 20)
    private String courseStatus;
}
