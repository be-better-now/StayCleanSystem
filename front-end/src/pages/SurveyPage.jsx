import React, { useState } from "react";
import { ASSISTComponent } from "../components/surveys/ASSISTComponent";
import CRAFFTComponent from "../components/surveys/CRAFFTComponent";

const TakeSurvey = () => {
  const [ageGroup, setAgeGroup] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {!ageGroup && (
          <div className="max-w-2xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Risk Assessment Survey
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Take a confidential assessment to better understand your situation. 
                This survey is designed to provide insights tailored to your age group.
              </p>
            </div>

            {/* Age Selection Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Please select your age group to begin
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Teen Option */}
                <div 
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-200"
                  onClick={() => setAgeGroup("teen")}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Teenager</h3>
                    <p className="text-blue-100 text-center">Under 18 years old</p>
                  </div>
                </div>

                {/* Adult Option */}
                <div 
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-200"
                  onClick={() => setAgeGroup("adult")}
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">Adult</h3>
                    <p className="text-green-100 text-center">18+ years old</p>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">Your Privacy Matters</h4>
                    <p className="text-sm text-blue-700">
                      This survey is completely confidential. Your responses help us provide better resources and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Survey Components */}
        <div className="max-w-4xl mx-auto">
          {ageGroup === "teen" && (
            <div className="animate-fadeIn">
              <CRAFFTComponent />
            </div>
          )}
          {ageGroup === "adult" && (
            <div className="animate-fadeIn">
              <ASSISTComponent />
            </div>
          )}
        </div>

        {/* Back Button */}
        {ageGroup && (
          <div className="max-w-4xl mx-auto mt-8">
            <button
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
              onClick={() => setAgeGroup(null)}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Age Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TakeSurvey;