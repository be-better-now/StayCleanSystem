import React, { useState } from "react";
import "./survey.css";

const CRAFFT_PART_A = [
  { id: "a1", question: "During the past 12 months, did you drink any alcohol (more than a few sips)?" },
  { id: "a2", question: "Did you smoke any marijuana or hashish?" },
  { id: "a3", question: "Did you use anything else to get high?" },
];

const CRAFFT_PART_B = [
  { id: "b1", question: "Have you ever ridden in a Car driven by someone (including yourself) who was high or had been using alcohol or drugs?" },
  { id: "b2", question: "Do you ever use alcohol or drugs to Relax, feel better about yourself, or fit in?" },
  { id: "b3", question: "Do you ever use alcohol or drugs while you are Alone?" },
  { id: "b4", question: "Do you ever Forget things you did while using alcohol or drugs?" },
  { id: "b5", question: "Do your Family or friends ever tell you that you should cut down on your drinking or drug use?" },
  { id: "b6", question: "Have you ever gotten into Trouble while you were using alcohol or drugs?" },
];

export function CRAFFTComponent() {
  const [answers, setAnswers] = useState({});
  const [showPartB, setShowPartB] = useState(false);
  const [surveyComplete, setSurveyComplete] = useState(false);
  const [partASubmitted, setPartASubmitted] = useState(false);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    const allPartAAnswered = CRAFFT_PART_A.every((q) => answers[q.id]);
    if (!allPartAAnswered) {
      alert("Please answer all questions in Part A before continuing.");
      return;
    }

    const anyYesInPartA = CRAFFT_PART_A.some((q) => answers[q.id] === "yes");

    if (anyYesInPartA) {
      setShowPartB(true);
    } else {
      setSurveyComplete(true);
    }

    setPartASubmitted(true);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">CRAFFT Questionnaire</h2>

      {/* Part A */}
 <div className="space-y-4">
  <h3 className="text-xl font-semibold">Part A</h3>
  {CRAFFT_PART_A.map((q) => (
    <div key={q.id} className="border p-3 rounded shadow m-4">
      <p className="survey-question-text">{q.question}</p>
      <div className="flex">
      <button
        className={`survey-button yes ${answers[q.id] === "yes" ? "active" : ""}`}
        onClick={() => handleChange(q.id, "yes")}
      >
        YES
      </button>
      <button
        className={`survey-button no ${answers[q.id] === "no" ? "active" : ""}`}
        onClick={() => handleChange(q.id, "no")}
      >
        NO
      </button>


     {/*   <button
          className={`w-[30vh] text-center py-3 rounded text-white font-bold transition ${
            answers[q.id] === "no" ? "bg-green-600" : "bg-green-400 hover:bg-green-500"
          }`}
          onClick={() => handleChange(q.id, "no")}
        >
          No
        </button> */}
      </div>
    </div>
  ))}



        {!partASubmitted && (
          <button
            onClick={handleNext}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Next
          </button>
        )}
      </div>

      {/* Part B */}
      {showPartB && (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Part B</h3>
    {CRAFFT_PART_B.map((q) => (
      <div key={q.id} className="border p-3 rounded shadow m-4">
        <p className="mb-4">{q.question}</p>
        <div className="flex space-x-4">
          <button
            className={`survey-button yes ${answers[q.id] === "yes" ? "active" : ""}`}
            onClick={() => handleChange(q.id, "yes")}
          >
            YES
          </button>
          <button
            className={`survey-button no ${answers[q.id] === "no" ? "active" : ""}`}
            onClick={() => handleChange(q.id, "no")}
          >
            NO
          </button>
        </div>
      </div>
    ))}
  </div>
)}
      {showPartB && CRAFFT_PART_B.every((q) => answers[q.id]) && !surveyComplete && (
        <button
          onClick={() => setSurveyComplete(true)}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Submit
        </button>
      )}



      {/* Survey Complete Message */}
      {surveyComplete && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          🎉 Thank you! Your survey is complete.
        </div>
      )}
    </div>
  );
}
