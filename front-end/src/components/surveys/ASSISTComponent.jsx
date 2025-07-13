import { useState, useCallback } from 'react';

const SUBSTANCES = [
  { id: 'tobacco', name: 'Tobacco products (cigarettes, chewing tobacco, cigars, etc.)' },
  { id: 'alcohol', name: 'Alcoholic beverages (beer, wine, spirits, etc.)' },
  { id: 'cannabis', name: 'Cannabis (marijuana, pot, grass, hash, etc.)' },
  { id: 'cocaine', name: 'Cocaine (coke, crack, etc.)' },
  { id: 'amphetamine', name: 'Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)' },
  { id: 'inhalants', name: 'Inhalants (nitrous, glue, petrol, paint thinner, etc.)' },
  { id: 'sedatives', name: 'Sedatives or Sleeping Pills (Valium, Serepax, Rohypnol, etc.)' },
  { id: 'hallucinogens', name: 'Hallucinogens (LSD, acid, mushrooms, PCP, Special K, etc.)' },
  { id: 'opioids', name: 'Opioids (heroin, morphine, methadone, codeine, etc.)' },
  { id: 'other', name: 'Other drugs - specify' }
];

const FREQUENCY_OPTIONS = [
  { value: 0, label: 'Never' },
  { value: 2, label: 'Once or Twice' },
  { value: 3, label: 'Monthly' },
  { value: 4, label: 'Weekly' },
  { value: 6, label: 'Daily or Almost Daily' }
];

const FREQUENCY_OPTIONS_Q3 = [
  { value: 0, label: 'Never' },
  { value: 3, label: 'Once or Twice' },
  { value: 4, label: 'Monthly' },
  { value: 5, label: 'Weekly' },
  { value: 6, label: 'Daily or Almost Daily' }
];

const FREQUENCY_OPTIONS_Q4 = [
  { value: 0, label: 'Never' },
  { value: 4, label: 'Once or Twice' },
  { value: 5, label: 'Monthly' },
  { value: 6, label: 'Weekly' },
  { value: 7, label: 'Daily or Almost Daily' }
];

const FREQUENCY_OPTIONS_Q5 = [
  { value: 0, label: 'Never' },
  { value: 5, label: 'Once or Twice' },
  { value: 6, label: 'Monthly' },
  { value: 7, label: 'Weekly' },
  { value: 8, label: 'Daily or Almost Daily' }
];

const CONCERN_OPTIONS = [
  { value: 0, label: 'No, never' },
  { value: 6, label: 'Yes, in the past 3 months' },
  { value: 3, label: 'Yes, but not in the past 3 months' }
];

const INJECTION_OPTIONS = [
  { value: 0, label: 'No, never' },
  { value: 2, label: 'Yes, in the past 3 months' },
  { value: 1, label: 'Yes, but not in the past 3 months' }
];

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8fafc'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '16px',
    color: '#64748b',
    marginBottom: '20px'
  },
  disclaimer: {
    fontSize: '14px',
    color: '#475569',
    backgroundColor: '#f1f5f9',
    padding: '16px',
    borderRadius: '8px',
    borderLeft: '4px solid #3b82f6',
    lineHeight: '1.5'
  },
  questionCard: {
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease'
  },
  questionNumber: {
    display: 'inline-block',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    padding: '6px 12px',
    borderRadius: '20px',
    marginBottom: '12px'
  },
  questionText: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '20px',
    lineHeight: '1.5'
  },
  substanceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
    marginBottom: '20px'
  },
  substanceCard: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f8fafc'
  },
  substanceName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '12px'
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#4b5563',
    padding: '4px 0'
  },
  radio: {
    marginRight: '8px',
    transform: 'scale(1.1)'
  },
  progressContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    transition: 'width 0.3s ease'
  },
  progressText: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '8px'
  },
  actionButton: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    marginTop: '20px'
  },
  buttonEnabled: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  buttonDisabled: {
    backgroundColor: '#e2e8f0',
    color: '#9ca3af',
    cursor: 'not-allowed'
  },
  resultsContainer: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center'
  },
  resultsHeader: {
    marginBottom: '30px'
  },
  completionIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    margin: '0 auto 20px'
  },
  resultsTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '8px'
  },
  resultsSubtitle: {
    fontSize: '16px',
    color: '#64748b',
    marginBottom: '30px'
  },
  scoreCard: {
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '16px',
    textAlign: 'left'
  },
  scoreTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '8px'
  },
  scoreValue: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  riskLevel: {
    fontSize: '14px',
    fontWeight: '500',
    padding: '4px 8px',
    borderRadius: '4px',
    display: 'inline-block'
  },
  lowRisk: {
    backgroundColor: '#dcfce7',
    color: '#166534'
  },
  moderateRisk: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },
  highRisk: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  otherInput: {
    width: '100%',
    padding: '8px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '14px',
    marginTop: '8px'
  }
};

export default function ASSISTComponent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    q1: {},
    q2: {},
    q3: {},
    q4: {},
    q5: {},
    q6: {},
    q7: {},
    q8: null,
    otherSubstance: ''
  });
  const [usedSubstances, setUsedSubstances] = useState([]);
  const [recentSubstances, setRecentSubstances] = useState([]);
  const [surveyComplete, setSurveyComplete] = useState(false);

  const handleQ1Answer = useCallback((substanceId, value) => {
    setAnswers(prev => ({
      ...prev,
      q1: { ...prev.q1, [substanceId]: value }
    }));
    
    if (value) {
      setUsedSubstances(prev => [...prev.filter(s => s !== substanceId), substanceId]);
    } else {
      setUsedSubstances(prev => prev.filter(s => s !== substanceId));
    }
  }, []);

  const handleQ2Answer = useCallback((substanceId, value) => {
    setAnswers(prev => ({
      ...prev,
      q2: { ...prev.q2, [substanceId]: value }
    }));
    
    if (value > 0) {
      setRecentSubstances(prev => [...prev.filter(s => s !== substanceId), substanceId]);
    } else {
      setRecentSubstances(prev => prev.filter(s => s !== substanceId));
    }
  }, []);

  const handleAnswer = useCallback((question, substanceId, value) => {
    setAnswers(prev => ({
      ...prev,
      [question]: { ...prev[question], [substanceId]: value }
    }));
  }, []);

  const handleSingleAnswer = useCallback((question, value) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value
    }));
  }, []);

  const canProceedFromStep = (step) => {
    switch (step) {
      case 1:
        // Proceed if all substances have been answered (Yes or No)
        return SUBSTANCES.every(s => answers.q1.hasOwnProperty(s.id));
      case 2:
        return usedSubstances.every(s => answers.q2[s] !== undefined);
      case 3:
        return recentSubstances.length === 0 || recentSubstances.every(s => answers.q3[s] !== undefined);
      case 4:
        return recentSubstances.length === 0 || recentSubstances.every(s => answers.q4[s] !== undefined);
      case 5:
        return recentSubstances.length === 0 || recentSubstances.every(s => answers.q5[s] !== undefined);
      case 6:
        return usedSubstances.every(s => answers.q6[s] !== undefined);
      case 7:
        return usedSubstances.every(s => answers.q7[s] !== undefined);
      case 8:
        return answers.q8 !== null;
      default:
        return true;
    }
  };

  const calculateSubstanceScore = (substanceId) => {
    let score = 0;
    
    // Q2-Q7 scores (Q1 and Q8 are not included in substance-specific scores)
    if (answers.q2[substanceId]) score += answers.q2[substanceId];
    if (answers.q3[substanceId]) score += answers.q3[substanceId];
    if (answers.q4[substanceId]) score += answers.q4[substanceId];
    
    // Q5 is not scored for tobacco
    if (substanceId !== 'tobacco' && answers.q5[substanceId]) {
      score += answers.q5[substanceId];
    }
    
    if (answers.q6[substanceId]) score += answers.q6[substanceId];
    if (answers.q7[substanceId]) score += answers.q7[substanceId];
    
    return score;
  };

  const getRiskLevel = (substanceId, score) => {
    if (substanceId === 'alcohol') {
      if (score <= 10) return { level: 'Low Risk', style: styles.lowRisk, intervention: 'No intervention' };
      if (score <= 26) return { level: 'Moderate Risk', style: styles.moderateRisk, intervention: 'Brief intervention' };
      return { level: 'High Risk', style: styles.highRisk, intervention: 'More intensive treatment' };
    } else {
      if (score <= 3) return { level: 'Low Risk', style: styles.lowRisk, intervention: 'No intervention' };
      if (score <= 26) return { level: 'Moderate Risk', style: styles.moderateRisk, intervention: 'Brief intervention' };
      return { level: 'High Risk', style: styles.highRisk, intervention: 'More intensive treatment' };
    }
  };

  const getProgress = () => {
    let totalSteps = 8;
    if (usedSubstances.length === 0) totalSteps = 1;
    else if (recentSubstances.length === 0) totalSteps = 6;
    
    return (currentStep / totalSteps) * 100;
  };

  const nextStep = () => {
    if (currentStep === 1 && usedSubstances.length === 0) {
      setSurveyComplete(true);
      return;
    }
    if (currentStep === 2 && recentSubstances.length === 0) {
      setCurrentStep(6);
      return;
    }
    if (currentStep === 8) {
      setSurveyComplete(true);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep === 6 && recentSubstances.length === 0) {
      setCurrentStep(2);
      return;
    }
    setCurrentStep(prev => prev - 1);
  };

  if (surveyComplete) {
    const substanceScores = usedSubstances.map(substanceId => {
      const score = calculateSubstanceScore(substanceId);
      const risk = getRiskLevel(substanceId, score);
      const substance = SUBSTANCES.find(s => s.id === substanceId);
      return {
        substance: substance.name,
        score,
        risk
      };
    });

    return (
      <div style={styles.resultsContainer}>
        <div style={styles.resultsHeader}>
          <div style={styles.completionIcon}>✓</div>
          <h2 style={styles.resultsTitle}>ASSIST Assessment Complete</h2>
          <p style={styles.resultsSubtitle}>
            Your substance involvement screening results
          </p>
        </div>

        {substanceScores.map((result, index) => (
          <div key={index} style={styles.scoreCard}>
            <h3 style={styles.scoreTitle}>{result.substance}</h3>
            <div style={{ ...styles.scoreValue, color: result.risk.style.color }}>
              Score: {result.score}
            </div>
            <div style={{ ...styles.riskLevel, ...result.risk.style }}>
              {result.risk.level}
            </div>
            <div style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>
              Recommendation: {result.risk.intervention}
            </div>
          </div>
        ))}

        {answers.q8 === 2 && (
          <div style={{ ...styles.scoreCard, backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
            <h3 style={styles.scoreTitle}>Injection Drug Use Alert</h3>
            <p style={{ color: '#991b1b', fontSize: '14px', margin: 0 }}>
              Recent injection drug use detected. Please consult with a healthcare provider for proper assessment and intervention.
            </p>
          </div>
        )}

        <button
          onClick={() => {
            setCurrentStep(1);
            setAnswers({
              q1: {}, q2: {}, q3: {}, q4: {}, q5: {}, q6: {}, q7: {}, q8: null, otherSubstance: ''
            });
            setUsedSubstances([]);
            setRecentSubstances([]);
            setSurveyComplete(false);
          }}
          style={{ ...styles.actionButton, ...styles.buttonEnabled }}
        >
          Take Assessment Again
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>WHO ASSIST V3.0</h1>
        <p style={styles.subtitle}>
          Alcohol, Smoking and Substance Involvement Screening Test
        </p>
        <div style={styles.disclaimer}>
          <strong>Important:</strong> This screening tool is for educational purposes. 
          Information about substance use will be treated as confidential. 
          We are interested in medications only if taken for non-medical purposes 
          or at higher doses than prescribed.
        </div>
      </div>

      <div style={styles.progressContainer}>
        <div style={styles.progressText}>
          Step {currentStep} of 8
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${getProgress()}%` }} />
        </div>
      </div>

      {currentStep === 1 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 1</div>
          <h3 style={styles.questionText}>
            In your life, which of the following substances have you ever used? 
            (NON-MEDICAL USE ONLY)
          </h3>
          <div style={styles.substanceGrid}>
            {SUBSTANCES.map(substance => (
              <div key={substance.id} style={styles.substanceCard}>
                <div style={styles.substanceName}>{substance.name}</div>
                {substance.id === 'other' && answers.q1[substance.id] && (
                  <input
                    type="text"
                    placeholder="Please specify..."
                    value={answers.otherSubstance}
                    onChange={(e) => handleSingleAnswer('otherSubstance', e.target.value)}
                    style={styles.otherInput}
                  />
                )}
                <div style={styles.radioGroup}>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name={substance.id}
                      checked={answers.q1[substance.id] === false}
                      onChange={() => handleQ1Answer(substance.id, false)}
                      style={styles.radio}
                    />
                    No
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name={substance.id}
                      checked={answers.q1[substance.id] === true}
                      onChange={() => handleQ1Answer(substance.id, true)}
                      style={styles.radio}
                    />
                    Yes
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 2</div>
          <h3 style={styles.questionText}>
            In the past three months, how often have you used the substances you mentioned?
          </h3>
          <div style={styles.substanceGrid}>
            {usedSubstances.map(substanceId => {
              const substance = SUBSTANCES.find(s => s.id === substanceId);
              return (
                <div key={substanceId} style={styles.substanceCard}>
                  <div style={styles.substanceName}>{substance.name}</div>
                  <div style={styles.radioGroup}>
                    {FREQUENCY_OPTIONS.map(option => (
                      <label key={option.value} style={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`q2_${substanceId}`}
                          checked={answers.q2[substanceId] === option.value}
                          onChange={() => handleQ2Answer(substanceId, option.value)}
                          style={styles.radio}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentStep === 3 && recentSubstances.length > 0 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 3</div>
          <h3 style={styles.questionText}>
            During the past three months, how often have you had a strong desire or urge to use these substances?
          </h3>
          <div style={styles.substanceGrid}>
            {recentSubstances.map(substanceId => {
              const substance = SUBSTANCES.find(s => s.id === substanceId);
              return (
                <div key={substanceId} style={styles.substanceCard}>
                  <div style={styles.substanceName}>{substance.name}</div>
                  <div style={styles.radioGroup}>
                    {FREQUENCY_OPTIONS_Q3.map(option => (
                      <label key={option.value} style={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`q3_${substanceId}`}
                          checked={answers.q3[substanceId] === option.value}
                          onChange={() => handleAnswer('q3', substanceId, option.value)}
                          style={styles.radio}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentStep === 4 && recentSubstances.length > 0 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 4</div>
          <h3 style={styles.questionText}>
            During the past three months, how often has your use of these substances led to health, social, legal or financial problems?
          </h3>
          <div style={styles.substanceGrid}>
            {recentSubstances.map(substanceId => {
              const substance = SUBSTANCES.find(s => s.id === substanceId);
              return (
                <div key={substanceId} style={styles.substanceCard}>
                  <div style={styles.substanceName}>{substance.name}</div>
                  <div style={styles.radioGroup}>
                    {FREQUENCY_OPTIONS_Q4.map(option => (
                      <label key={option.value} style={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`q4_${substanceId}`}
                          checked={answers.q4[substanceId] === option.value}
                          onChange={() => handleAnswer('q4', substanceId, option.value)}
                          style={styles.radio}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentStep === 5 && recentSubstances.length > 0 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 5</div>
          <h3 style={styles.questionText}>
            During the past three months, how often have you failed to do what was normally expected of you because of your use of these substances?
          </h3>
          <div style={styles.substanceGrid}>
            {recentSubstances.filter(s => s !== 'tobacco').map(substanceId => {
              const substance = SUBSTANCES.find(s => s.id === substanceId);
              return (
                <div key={substanceId} style={styles.substanceCard}>
                  <div style={styles.substanceName}>{substance.name}</div>
                  <div style={styles.radioGroup}>
                    {FREQUENCY_OPTIONS_Q5.map(option => (
                      <label key={option.value} style={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`q5_${substanceId}`}
                          checked={answers.q5[substanceId] === option.value}
                          onChange={() => handleAnswer('q5', substanceId, option.value)}
                          style={styles.radio}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          {recentSubstances.filter(s => s !== 'tobacco').length === 0 && (
            <p style={{ color: '#64748b', fontStyle: 'italic' }}>
              No applicable substances for this question (tobacco is excluded from Question 5).
            </p>
          )}
        </div>
      )}

      {currentStep === 6 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 6</div>
          <h3 style={styles.questionText}>
            Has a friend or relative or anyone else ever expressed concern about your use of these substances?
          </h3>
          <div style={styles.substanceGrid}>
            {usedSubstances.map(substanceId => {
              const substance = SUBSTANCES.find(s => s.id === substanceId);
              return (
                <div key={substanceId} style={styles.substanceCard}>
                  <div style={styles.substanceName}>{substance.name}</div>
                  <div style={styles.radioGroup}>
                    {CONCERN_OPTIONS.map(option => (
                      <label key={option.value} style={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`q6_${substanceId}`}
                          checked={answers.q6[substanceId] === option.value}
                          onChange={() => handleAnswer('q6', substanceId, option.value)}
                          style={styles.radio}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentStep === 7 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 7</div>
          <h3 style={styles.questionText}>
            Have you ever tried and failed to control, cut down or stop using these substances?
          </h3>
          <div style={styles.substanceGrid}>
            {usedSubstances.map(substanceId => {
              const substance = SUBSTANCES.find(s => s.id === substanceId);
              return (
                <div key={substanceId} style={styles.substanceCard}>
                  <div style={styles.substanceName}>{substance.name}</div>
                  <div style={styles.radioGroup}>
                    {CONCERN_OPTIONS.map(option => (
                      <label key={option.value} style={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`q7_${substanceId}`}
                          checked={answers.q7[substanceId] === option.value}
                          onChange={() => handleAnswer('q7', substanceId, option.value)}
                          style={styles.radio}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentStep === 8 && (
        <div style={styles.questionCard}>
          <div style={styles.questionNumber}>Question 8</div>
          <h3 style={styles.questionText}>
            Have you ever used any drug by injection? (NON-MEDICAL USE ONLY)
          </h3>
          <div style={styles.radioGroup}>
            {INJECTION_OPTIONS.map(option => (
              <label key={option.value} style={styles.radioLabel}>
                <input
                  type="radio"
                  name="q8"
                  checked={answers.q8 === option.value}
                  onChange={() => handleSingleAnswer('q8', option.value)}
                  style={styles.radio}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          style={{
            ...styles.actionButton,
            ...styles.buttonEnabled,
            marginBottom: '10px',
            backgroundColor: currentStep === 1 ? '#e2e8f0' : '#94a3b8',
            color: currentStep === 1 ? '#9ca3af' : 'white',
            cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={!canProceedFromStep(currentStep)}
          style={{
            ...styles.actionButton,
            ...(canProceedFromStep(currentStep)
              ? styles.buttonEnabled
              : styles.buttonDisabled)
          }}
        >
          {currentStep === 8 || (currentStep === 1 && usedSubstances.length === 0) ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
