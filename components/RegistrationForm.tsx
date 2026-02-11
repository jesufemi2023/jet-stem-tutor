
import React, { useState } from 'react';

const RegistrationForm: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl text-center animate-in zoom-in duration-500 border border-indigo-50">
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8 text-indigo-600">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">Enrollment Received</h2>
        <p className="text-gray-500 font-medium mb-10 leading-relaxed">
          Welcome to the STEM-Elevate family! Our Academic Director will review your child's profile and contact you within 12 hours to assign a dedicated mentor.
        </p>
        <button 
          onClick={onBack}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl hover:bg-indigo-700 transition"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-600 font-black text-xs uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          Back
        </button>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Student <span className="text-indigo-600">Registration</span></h1>
          <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">Step {step} of 3</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl">
        {step === 1 && (
          <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Basic Information</h3>
              <p className="text-sm text-gray-500 font-medium">Let's start with the student's details.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Student Full Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:ring-4 focus:ring-indigo-50 transition font-semibold" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Current Grade</label>
                <select className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:ring-4 focus:ring-indigo-50 transition font-semibold appearance-none">
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
            </div>
            <button onClick={nextStep} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-lg">Continue to Academic Goals</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Academic Profile</h3>
              <p className="text-sm text-gray-500 font-medium">Which subjects need reinforcement?</p>
            </div>
            <div className="space-y-4">
              {['Mathematics', 'Physics', 'Chemistry', 'Coding'].map(sub => (
                <label key={sub} className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 cursor-pointer hover:bg-indigo-50 transition">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-50 mr-4" />
                  <span className="font-bold text-gray-700">{sub}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 py-5 bg-gray-100 text-gray-600 rounded-2xl font-black">Back</button>
              <button onClick={nextStep} className="flex-[2] py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-lg">Character & Values</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Holistic Development</h3>
              <p className="text-sm text-gray-500 font-medium">Our mission includes building responsible, disciplined individuals.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Character Focus Areas</label>
                <textarea className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:ring-4 focus:ring-indigo-50 transition font-semibold h-32 resize-none" placeholder="E.g. Building discipline in homework, responsibility for chores, community impact projects..."></textarea>
              </div>
              <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <div className="flex items-center space-x-3 text-indigo-700 font-black text-xs uppercase tracking-widest mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Our Promise</span>
                </div>
                <p className="text-sm text-indigo-600 leading-relaxed font-medium">
                  We assign teachers who aren't just subject experts, but mentors who model high moral character and hard work.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 py-5 bg-gray-100 text-gray-600 rounded-2xl font-black">Back</button>
              <button onClick={() => setSubmitted(true)} className="flex-[2] py-5 bg-green-600 text-white rounded-2xl font-black shadow-lg hover:bg-green-700 transition">Complete Enrollment</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
