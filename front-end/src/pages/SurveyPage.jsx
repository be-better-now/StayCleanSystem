import React, { useState } from "react";
import { ASSISTComponent } from "../components/surveys/ASSISTComponent";
import { CRAFFTComponent } from "../components/surveys/CRAFFTComponent";

const TakeSurvey = () => {
  const [ageGroup, setAgeGroup] = useState(null);

  return (
    <div className="container mt-5 text-center bg-white">
      {!ageGroup && (
        <>
          <h3>Welcome to the Risk Assessment Survey</h3>
          <p>Please select your age group:</p>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-primary"
              onClick={() => setAgeGroup("teen")}
            >
              Teenager (under 18)
            </button>
            <button
              className="btn btn-success"
              onClick={() => setAgeGroup("adult")}
            >
              Adult (18+)
            </button>
          </div>
        </>
      )}

      {ageGroup === "teen" && <CRAFFTComponent />}
      {ageGroup === "adult" && <ASSISTComponent />}

      {ageGroup && (
        <button
          className="btn btn-outline-secondary mt-4"
          onClick={() => setAgeGroup(null)}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default TakeSurvey; 
