import React, { useState } from "react";
import CRAFFTComponent from "../components/surveys/CRAFFTComponent.jsx";
import ASSISTComponent from "../components/surveys/ASSISTComponent.jsx"

const TakeSurvey = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [isUnder18, setIsUnder18] = useState(null);


  const handleSurveySubmit = (data) => {
  console.log("CRAFFT or ASSIST result:", data);
  // save to database, show thank-you screen, etc.
};

  const handleAgeSelection = (under18) => {
    setIsUnder18(under18);
    setAgeVerified(true);
  };

  if (!ageVerified) {
    return (
      <div className="p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Age Verification</h2>
          <p className="text-gray-600 mb-6 text-center">
            Please confirm your age to continue with the appropriate survey.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => handleAgeSelection(true)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              I am under 18 years old
            </button>
            
            <button
              onClick={() => handleAgeSelection(false)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              I am 18 years old or older
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      {isUnder18 ? (
        <CRAFFTComponent onSubmit={handleSurveySubmit} />
      ) : (
        <ASSISTComponent />
      )}
    </div>
  );
};

export default TakeSurvey;