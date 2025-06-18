// src/pages/Courses.jsx
import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Anti-Drug Education",
    image: "https://via.placeholder.com/300x200",
    description: "Raise awareness about drug prevention and healthy lifestyles.",
  },
  {
    id: 2,
    title: "Youth Volunteering",
    image: "https://via.placeholder.com/300x200",
    description: "Opportunities to contribute to the community as a young leader.",
  },
  // More courses...
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
