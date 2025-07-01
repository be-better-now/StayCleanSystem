import React, { useState, useCallback } from "react";

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

// Reusable Question Component
const QuestionCard = ({ question, answer, onAnswer, questionNumber }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
        Question {questionNumber}
      </span>
      <p className="text-gray-800 text-lg leading-relaxed">{question}</p>
    </div>
    
    <div className="flex gap-3">
      <button
        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          answer === "yes"
            ? "bg-red-500 text-white shadow-md focus:ring-red-300"
            : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 focus:ring-gray-300"
        }`}
        onClick={() => onAnswer("yes")}
        aria-pressed={answer === "yes"}
      >
        YES
      </button>
      <button
        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          answer === "no"
            ? "bg-green-500 text-white shadow-md focus:ring-green-300"
            : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 focus:ring-gray-300"
        }`}
        onClick={() => onAnswer("no")}
        aria-pressed={answer === "no"}
      >
        NO
      </button>
    </div>
  </div>
);

// Progress Bar Component
const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div 
        className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

export default function CRAFFTComponent() {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState("partA");
  const [surveyComplete, setSurveyComplete] = useState(false);

  const handleAnswerChange = useCallback((id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  }, []);

  const getAnsweredCount = (questions) => {
    return questions.filter(q => answers[q.id]).length;
  };

  const isPartComplete = (questions) => {
    return questions.every(q => answers[q.id]);
  };

  const hasYesAnswer = (questions) => {
    return questions.some(q => answers[q.id] === "yes");
  };

  const handlePartANext = () => {
    if (!isPartComplete(CRAFFT_PART_A)) {
      alert("Please answer all questions in Part A before continuing.");
      return;
    }

    if (hasYesAnswer(CRAFFT_PART_A)) {
      setCurrentStep("partB");
    } else {
      setSurveyComplete(true);
    }
  };

  const handlePartBSubmit = () => {
    if (!isPartComplete(CRAFFT_PART_B)) {
      alert("Please answer all questions in Part B before submitting.");
      return;
    }
    setSurveyComplete(true);
  };

  const calculateTotalScore = () => {
    const partBYesCount = CRAFFT_PART_B.filter(q => answers[q.id] === "yes").length;
    return partBYesCount;
  };

  const getScoreInterpretation = (score) => {
    if (score === 0) return { level: "Low Risk", color: "text-green-600", bg: "bg-green-50" };
    if (score === 1) return { level: "Low-Medium Risk", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (score >= 2) return { level: "High Risk", color: "text-red-600", bg: "bg-red-50" };
  };

  if (surveyComplete) {
    const score = currentStep === "partB" ? calculateTotalScore() : 0;
    const interpretation = getScoreInterpretation(score);
    
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Survey Complete!</h2>
          <p className="text-gray-600">Thank you for completing the CRAFFT questionnaire.</p>
        </div>

        {currentStep === "partB" && (
          <div className={`p-6 rounded-lg ${interpretation.bg} border`}>
            <h3 className="text-lg font-semibold mb-2">Results Summary</h3>
            <p className="mb-2">
              <span className="font-medium">CRAFFT Score: </span>
              <span className="font-bold">{score}/6</span>
            </p>
            <p className={`font-medium ${interpretation.color}`}>
              Risk Level: {interpretation.level}
            </p>
          </div>
        )}

        <button
          onClick={() => {
            setAnswers({});
            setCurrentStep("partA");
            setSurveyComplete(false);
          }}
          className="w-full mt-6 py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Take Survey Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">CRAFFT Questionnaire</h1>
        <p className="text-gray-600">A screening tool for substance use in adolescents</p>
      </div>

      {/* Part A */}
      {currentStep === "partA" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Part A - Initial Screening</h2>
            <span className="text-sm text-gray-500">
              {getAnsweredCount(CRAFFT_PART_A)} of {CRAFFT_PART_A.length} completed
            </span>
          </div>

          <ProgressBar 
            current={getAnsweredCount(CRAFFT_PART_A)} 
            total={CRAFFT_PART_A.length} 
          />

          {CRAFFT_PART_A.map((q, index) => (
            <QuestionCard
              key={q.id}
              question={q.question}
              answer={answers[q.id]}
              onAnswer={(value) => handleAnswerChange(q.id, value)}
              questionNumber={index + 1}
            />
          ))}

          <div className="pt-4">
            <button
              onClick={handlePartANext}
              disabled={!isPartComplete(CRAFFT_PART_A)}
              className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              {isPartComplete(CRAFFT_PART_A) ? "Continue" : `Answer ${CRAFFT_PART_A.length - getAnsweredCount(CRAFFT_PART_A)} more questions`}
            </button>
          </div>
        </div>
      )}

      {/* Part B */}
      {currentStep === "partB" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Part B - Detailed Assessment</h2>
            <span className="text-sm text-gray-500">
              {getAnsweredCount(CRAFFT_PART_B)} of {CRAFFT_PART_B.length} completed
            </span>
          </div>

          <ProgressBar 
            current={getAnsweredCount(CRAFFT_PART_B)} 
            total={CRAFFT_PART_B.length} 
          />

          {CRAFFT_PART_B.map((q, index) => (
            <QuestionCard
              key={q.id}
              question={q.question}
              answer={answers[q.id]}
              onAnswer={(value) => handleAnswerChange(q.id, value)}
              questionNumber={index + 1}
            />
          ))}

          <div className="pt-4 space-y-3">
            <button
              onClick={handlePartBSubmit}
              disabled={!isPartComplete(CRAFFT_PART_B)}
              className="w-full py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              {isPartComplete(CRAFFT_PART_B) ? "Submit Survey" : `Answer ${CRAFFT_PART_B.length - getAnsweredCount(CRAFFT_PART_B)} more questions`}
            </button>
            
            <button
              onClick={() => setCurrentStep("partA")}
              className="w-full py-3 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Back to Part A
            </button>
          </div>
        </div>
      )}
    </div>
  );
}