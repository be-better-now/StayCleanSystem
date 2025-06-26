import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ id, title, image, description }) => {
  const navigate = useNavigate();
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
        <h2 className="card-title">{id}</h2>
        <p className="card-desciption">{description}</p>
        <button className="card-button" onClick={() => navigate(`/view-course/${id}`)}>View Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
