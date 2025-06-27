package com.stayclean.controller.web;


import com.stayclean.entity.CourseEntity;
import com.stayclean.services.CourseService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@SecurityRequirement(name = "api")
public class CourseController {

    @Autowired
    private CourseService courseService;

    // GET all courses
    @GetMapping
    public List<CourseEntity> getAllCourses() {
        return courseService.getAllCourses();
    }

    // GET course by ID
    @GetMapping("/{id}")
    public CourseEntity getCourseById(@PathVariable("id") String courseId) {
        return courseService.getCourseById(courseId);
    }

    // POST create new course
    @PostMapping
    public CourseEntity createCourse(@RequestBody CourseEntity courseEntity) {
        return courseService.addCourse(courseEntity);
    }

    // PUT update course
    @PutMapping("/{id}")
    public CourseEntity updateCourse(@PathVariable("id") String courseId,
                                     @RequestBody CourseEntity updatedCourse) {
        return courseService.updateCourse(courseId, updatedCourse);
    }

    // DELETE course
    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable("id") String courseId) {
        courseService.deleteCourse(courseId);
    }

    // Optional: search course by name
    @GetMapping("/search")
    public List<CourseEntity> searchCoursesByName(@RequestParam("keyword") String keyword) {
        return courseService.searchCoursesByName(keyword);
    }
}
