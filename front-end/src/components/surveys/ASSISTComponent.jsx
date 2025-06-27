// ASSISTComponent.jsx
import React, { useState } from "react";

const ASSIST_QUESTIONS = [
  {
    id: "q1",
    question: "Which of the following substances have you ever used in your life?",
    options: [
      "Tobacco",
      "Alcohol",
      "Cannabis",
      "Cocaine",
      "Amphetamines",
      "Inhalants",
      "Sedatives",
      "Hallucinogens",
      "Opioids",
      "Other",
    ],
    type: "checkbox",
  },
  {
    id: "q2",
    question: "In the past 3 months, how often have you used the selected substance(s)?",
    options: ["Never", "Once or Twice", "Monthly", "Weekly", "Daily or Almost Daily"],
  },
  {
    id: "q3",
    question: "How often have you had a strong desire or urge to use the selected substance(s)?",
    options: ["Never", "Once or Twice", "Monthly", "Weekly", "Daily or Almost Daily"],
  },
  {
    id: "q4",
    question: "Has your use of these substances led to health, social, legal, or financial problems?",
    options: ["No", "Yes, but not in the past 3 months", "Yes, in the past 3 months"],
  },
  {
    id: "q5",
    question: "Has a friend, relative, or doctor ever expressed concern about your substance use?",
    options: ["No", "Yes, but not in the past 3 months", "Yes, in the past 3 months"],
  },
];

export function ASSISTComponent() {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <h2>ASSIST Questionnaire</h2>
      {ASSIST_QUESTIONS.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.type === "checkbox" ? (
            q.options.map((opt) => (
              <label key={opt}>
                <input
                  type="checkbox"
                  name={q.id}
                  value={opt}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setAnswers((prev) => {
                      const existing = prev[q.id] || [];
                      const updated = checked
                        ? [...existing, opt]
                        : existing.filter((item) => item !== opt);
                      return { ...prev, [q.id]: updated };
                    });
                  }}
                />
                {opt}
              </label>
            ))
          ) : (
            q.options.map((opt) => (
              <label key={opt}>
                <input
                  type="radio"
                  name={q.id}
                  value={opt}
                  onChange={() => handleChange(q.id, opt)}
                />
                {opt}
              </label>
            ))
          )}
        </div>
      ))}
    </div>
  );
}