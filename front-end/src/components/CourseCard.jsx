// src/components/CourseCard.jsx
import React from "react";

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="w-[30vw] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
