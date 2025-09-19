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

// Inline styles for consistency
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px',
    margin: '0 0 8px 0'
  },
  subtitle: {
    color: '#6b7280',
    margin: 0
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0
  },
  completionStatus: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  progressContainer: {
    width: '100%',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    height: '8px',
    marginBottom: '24px'
  },
  progressBar: {
    height: '8px',
    borderRadius: '9999px',
    backgroundColor: '#3b82f6',
    transition: 'width 0.3s ease-out'
  },
  questionCard: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.2s'
  },
  questionCardHover: {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  questionBadge: {
    display: 'inline-block',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '4px 8px',
    borderRadius: '9999px',
    marginBottom: '8px'
  },
  questionText: {
    color: '#1f2937',
    fontSize: '1.125rem',
    lineHeight: '1.6',
    margin: '0 0 16px 0'
  },
  buttonContainer: {
    display: 'flex',
    gap: '12px'
  },
  button: {
    flex: 1,
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '1rem'
  },
  buttonYes: {
    backgroundColor: '#ef4444',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  buttonYesInactive: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  buttonNo: {
    backgroundColor: '#22c55e',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  buttonNoInactive: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  actionButton: {
    width: '100%',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
    marginTop: '16px'
  },
  actionButtonPrimary: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  actionButtonPrimaryHover: {
    backgroundColor: '#2563eb'
  },
  actionButtonSuccess: {
    backgroundColor: '#22c55e',
    color: 'white'
  },
  actionButtonSuccessHover: {
    backgroundColor: '#16a34a'
  },
  actionButtonSecondary: {
    backgroundColor: '#e5e7eb',
    color: '#374151'
  },
  actionButtonSecondaryHover: {
    backgroundColor: '#d1d5db'
  },
  actionButtonDisabled: {
    backgroundColor: '#d1d5db',
    color: '#9ca3af',
    cursor: 'not-allowed'
  },
  completionContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '24px'
  },
  completionIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px auto',
    fontSize: '1.5rem'
  },
  completionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px',
    textAlign: 'center',
    margin: '0 0 8px 0'
  },
  completionSubtitle: {
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '32px',
    margin: '0 0 32px 0'
  },
  resultsCard: {
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    marginBottom: '24px'
  },
  resultsTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: 'black',
    margin: '0 0 8px 0'
  },
  scoreText: {
    marginBottom: '8px',
    color:'grey',
    margin: '0 0 8px 0'
  },
  riskLevel: {
    fontWeight: '600',
    fontSize: '1.5rem',
    margin: 0
  }
};

// Reusable Question Component
const QuestionCard = ({ question, answer, onAnswer, questionNumber }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.questionCard,
        ...(isHovered ? styles.questionCardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <span style={styles.questionBadge}>
          Question {questionNumber}
        </span>
        <p style={styles.questionText}>{question}</p>
      </div>
      
      <div style={styles.buttonContainer}>
        <button
          style={{
            ...styles.button,
            ...(answer === "yes" ? styles.buttonYes : styles.buttonYesInactive)
          }}
          onClick={() => onAnswer("yes")}
          onMouseOver={(e) => {
            if (answer !== "yes") {
              e.target.style.backgroundColor = '#fef2f2';
              e.target.style.color = '#dc2626';
            }
          }}
          onMouseOut={(e) => {
            if (answer !== "yes") {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.color = '#374151';
            }
          }}
        >
          YES
        </button>
        <button
          style={{
            ...styles.button,
            ...(answer === "no" ? styles.buttonNo : styles.buttonNoInactive)
          }}
          onClick={() => onAnswer("no")}
          onMouseOver={(e) => {
            if (answer !== "no") {
              e.target.style.backgroundColor = '#f0fdf4';
              e.target.style.color = '#16a34a';
            }
          }}
          onMouseOut={(e) => {
            if (answer !== "no") {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.color = '#374151';
            }
          }}
        >
          NO
        </button>
      </div>
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  return (
    <div style={styles.progressContainer}>
      <div 
        style={{
          ...styles.progressBar,
          width: `${progress}%`
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};




export default function CRAFFTComponent( onSubmit ) {
  console.log("CRAFFTComponent rendered");
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
    if (score === 0) return { 
      level: "Low Risk", 
      color: "#16a34a", 
      backgroundColor: "#f0fdf4" 
    };
    if (score === 1) return { 
      level: "Low-Medium Risk", 
      color: "#ca8a04", 
      backgroundColor: "#fefce8" 
    };
    if (score >= 2) return { 
      level: "High Risk", 
      color: "#dc2626", 
      backgroundColor: "#fef2f2" 
    };
  };

if (surveyComplete) {
  const score = currentStep === "partB" ? calculateTotalScore() : 0;
  const interpretation = getScoreInterpretation(score);

  console.log("Survey complete block triggered");
  console.log("onSubmit is", onSubmit);
  console.log("hasSubmittedRef.current is", hasSubmittedRef.current);

  if (onSubmit && typeof onSubmit === "function") {
    onSubmit({
      answers,
      score,
      riskLevel: interpretation.level
    });
    hasSubmittedRef.current = true;
  }

  return (
    <div style={styles.completionContainer}>
      <div style={styles.header}>
        <div style={styles.completionIcon}>
          <span>✓</span>
        </div>
        <h2 style={styles.completionTitle}>Survey Complete!</h2>
        <p style={styles.completionSubtitle}>Thank you for completing the CRAFFT questionnaire.</p>
      </div>

      {/* ✅ Always show Results Summary */}
      <div style={{
        ...styles.resultsCard,
        backgroundColor: interpretation.backgroundColor
      }}>
        <h3 style={styles.resultsTitle}>Results Summary</h3>
        <p style={styles.scoreText}>
          <span style={{ fontWeight: '500' }}>CRAFFT Score: </span>
          <span style={{ fontWeight: 'bold' }}>{score}/6</span>
        </p>
        <p style={{
          ...styles.riskLevel,
          color: interpretation.color
        }}>
          Risk Level: {interpretation.level}
        </p>
      </div>

      <button
        onClick={() => {
          setAnswers({});
          setCurrentStep("partA");
          setSurveyComplete(false);
        }}
        style={{
          ...styles.actionButton,
          ...styles.actionButtonPrimary
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = styles.actionButtonPrimaryHover.backgroundColor;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = styles.actionButtonPrimary.backgroundColor;
        }}
      >
        Take Survey Again
      </button>
    </div>
  );
}


  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>CRAFFT Questionnaire</h1>
        <p style={styles.subtitle}>A screening tool for substance use in adolescents</p>
      </div>

      {/* Part A */}
      {currentStep === "partA" && (
        <div>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Part A - Initial Screening</h2>
            <span style={styles.completionStatus}>
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

          <button
            onClick={handlePartANext}
            disabled={!isPartComplete(CRAFFT_PART_A)}
            style={{
              ...styles.actionButton,
              ...(isPartComplete(CRAFFT_PART_A) 
                ? styles.actionButtonPrimary 
                : styles.actionButtonDisabled
              )
            }}
            onMouseOver={(e) => {
              if (isPartComplete(CRAFFT_PART_A)) {
                e.target.style.backgroundColor = styles.actionButtonPrimaryHover.backgroundColor;
              }
            }}
            onMouseOut={(e) => {
              if (isPartComplete(CRAFFT_PART_A)) {
                e.target.style.backgroundColor = styles.actionButtonPrimary.backgroundColor;
              }
            }}
          >
            {isPartComplete(CRAFFT_PART_A) 
              ? "Continue" 
              : `Answer ${CRAFFT_PART_A.length - getAnsweredCount(CRAFFT_PART_A)} more questions`
            }
          </button>
        </div>
      )}

      {/* Part B */}
      {currentStep === "partB" && (
        <div>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Part B - Detailed Assessment</h2>
            <span style={styles.completionStatus}>
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

          <button
            onClick={handlePartBSubmit}
            disabled={!isPartComplete(CRAFFT_PART_B)}
            style={{
              ...styles.actionButton,
              ...(isPartComplete(CRAFFT_PART_B) 
                ? styles.actionButtonSuccess 
                : styles.actionButtonDisabled
              )
            }}
            onMouseOver={(e) => {
              if (isPartComplete(CRAFFT_PART_B)) {
                e.target.style.backgroundColor = styles.actionButtonSuccessHover.backgroundColor;
              }
            }}
            onMouseOut={(e) => {
              if (isPartComplete(CRAFFT_PART_B)) {
                e.target.style.backgroundColor = styles.actionButtonSuccess.backgroundColor;
              }
            }}
          >
            {isPartComplete(CRAFFT_PART_B) 
              ? "Submit Survey" 
              : `Answer ${CRAFFT_PART_B.length - getAnsweredCount(CRAFFT_PART_B)} more questions`
            }
          </button>
          
          <button
            onClick={() => setCurrentStep("partA")}
            style={{
              ...styles.actionButton,
              ...styles.actionButtonSecondary
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.actionButtonSecondaryHover.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.actionButtonSecondary.backgroundColor;
            }}
          >
            Back to Part A
          </button>
        </div>
      )}
    </div>
  );
}