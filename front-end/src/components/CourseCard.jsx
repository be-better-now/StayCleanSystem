import React from "react";
import "./CourseCard.css"

const CourseCard = ({ title, image, description }) => {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img
          className="card-img"
          src={image}
          alt={title} 
        />
      </div>

      <div className="card-text-area">
        <h2 className="card-title">{title}</h2>
        <p className="card-desciption">{description}</p>
        <button className="card-button">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
