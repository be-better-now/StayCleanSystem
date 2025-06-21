// src/pages/Courses.jsx
import React from "react";
import CourseCard from "../components/CourseCard";
import "./CoursePage.css";

const courses = [
  {
    id: 1,
    title: "Erwin Smith",
    image: "/images/erwin-pfp.jpg",
    description: "Raise awareness about drug prevention and healthy lifestyles.",
  },
  {
    id: 2,
    title: "Levi Ackerman",
    image: "/images/levi-pfp.jpg",
    description: "Opportunities to contribute to the community as a young leader.",
  },
  {
    id: 3,
    title: "Hange Zoe",
    image: "/images/hange-pfp.jpg",
    description: "Opportunities to contribute to the community as a young leader.",
  },
  {
    id: 4,
    title: "Eren Yeager",
    image: "/images/eren-pfp.jpg",
    description: "Opportunities to contribute to the community as a young leader.",
  },
  // More courses...
];

const Courses = () => {
  return (
    <div className="min-h-screen py-10 px-5 bg-white">
      <h1 className="p-4 text-3xl font-bold mb-8 text-center">Our Courses</h1>
      <h4 className="text-center">Demo thoi nha ae</h4>
      <div className="course-container pb-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
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
