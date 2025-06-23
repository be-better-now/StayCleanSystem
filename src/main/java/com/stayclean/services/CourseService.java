package com.stayclean.services;

import com.stayclean.entity.CourseEntity;
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
}
