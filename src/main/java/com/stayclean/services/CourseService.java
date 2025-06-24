package com.stayclean.services;

import com.stayclean.entity.CourseEntity;
import com.stayclean.entity.UserEntity;
import com.stayclean.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<CourseEntity> getAllCourses() {
        return courseRepository.findAll();
    }

    public CourseEntity addCourse(CourseEntity courseEntity) {
        return courseRepository.save(courseEntity);
    }

    public CourseEntity updateCourse(String courseId, CourseEntity updatedCourse) {
        return courseRepository.findById(courseId).map(course -> {
                    course.setCourseName(updatedCourse.getCourseName());
                    course.setCourseDescription(updatedCourse.getCourseDescription());
                    course.setCourseDate(updatedCourse.getCourseDate());
                    course.setCourseCategory(updatedCourse.getCourseCategory());
                    course.setAgeGroup(updatedCourse.getAgeGroup());
                    // Add other fields as needed
                    return courseRepository.save(course);
                })
                .orElseThrow(() -> new RuntimeException("Course not found with id: " + courseId));
    }
    public void deleteCourse(String courseId) {
        courseRepository.deleteById(courseId);
    }


}
