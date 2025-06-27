// src/pages/Courses.jsx
import React from "react";
import CourseCard from "../components/CourseCard";
import "./CoursePage.css";
import courses from "../mock/courses";

const Courses = () => {
  return (
    <div className="min-h-screen py-10 px-5 bg-white">
      <h1 className="p-4 text-3xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="course-container pb-4">
        {courses.map((course) => (
          <CourseCard
            title={course.title}
            image={course.image}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
