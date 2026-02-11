
import React, { useState } from 'react';
import { Subject, ConsultationRequest, TutoringPlan } from '../types.ts';
import { generateStudyPlan } from '../services/geminiService.ts';

const ConsultationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<TutoringPlan | null>(null);
  const [formData, setFormData] = useState<ConsultationRequest>({
    parentName: '',
    email: '',
    studentName: '',
    schoolName: '',
    subject: Subject.MATHS,
    location: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const generatedPlan = await generateStudyPlan(formData);
      setPlan(generatedPlan);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (plan) {
    return (
      <div className="bg-white p-6 sm:p-12 rounded-[2.5rem] shadow-2xl border border-indigo-50 max-w-3xl mx-auto animate-in fade-in zoom-in duration-500">
        <div className="flex items-center space-x-4 mb-10">
          <div className="bg-green-100 p-3 rounded-2xl">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Expert Plan Ready</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Prepared for {formData.studentName} • {formData.schoolName}</p>
          </div>
        </div>
        
        <div className="space-y-10">
          <div className="bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Academic Strategy</h3>
            <p className="text-gray-700 leading-relaxed font-medium text-lg italic">"{plan.summary}"</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-6">Focus Roadmap</h3>
              <ul className="space-y-3">
                {plan.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-700 font-semibold">
                    <span className="mr-3 text-indigo-500">◈</span>
                    <span className="text-xs">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 flex flex-col justify-center">
               <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2">Monthly Investment</p>
               <p className="text-3xl font-black text-indigo-900">{plan.monthlyFee}</p>
               <p className="text-[10px] text-indigo-400 font-bold uppercase mt-4">Pre-payment required for teacher assignment.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-indigo-600 rounded-3xl text-white gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest opacity-70 mb-1">Standard Schedule</p>
              <p className="text-xl font-black">{plan.estimatedDuration}</p>
            </div>
            <button 
              className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black shadow-lg hover:bg-gray-50 transition"
              onClick={() => alert("Registration confirmed! Redirecting to secure payment portal...")}
            >
              Proceed to Enrollment
            </button>
          </div>
        </div>

        <button 
          onClick={() => setPlan(null)}
          className="w-full mt-8 py-4 text-gray-400 font-bold hover:text-gray-600 transition text-sm uppercase tracking-widest"
        >
          Modify Details
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-12 rounded-[2.5rem] shadow-xl border border-gray-50 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-inner">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">Consult an Educator</h2>
        <p className="text-gray-500 font-medium text-lg">Classes via Google Meet, 2x per week. Monthly tuition starts at $120.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest ml-1">Parent Name</label>
            <input 
              required
              type="text" 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
              placeholder="e.g. John Smith"
              value={formData.parentName}
              onChange={(e) => setFormData({...formData, parentName: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest ml-1">Email</label>
            <input 
              required
              type="email" 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest ml-1">Student Name</label>
            <input 
              required
              type="text" 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
              placeholder="First Name"
              value={formData.studentName}
              onChange={(e) => setFormData({...formData, studentName: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest ml-1">Current School</label>
            <input 
              required
              type="text" 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest ml-1">Country or Continent</label>
            <input 
              required
              type="text" 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold"
              placeholder="e.g. Nigeria, USA, Europe"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest ml-1">Core Subject</label>
            <select 
              className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold appearance-none cursor-pointer"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value as Subject})}
            >
              {Object.values(Subject).map(sub => <option key={sub} value={sub}>{sub}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-indigo-600 uppercase tracking-widest ml-1">Detailed Academic Context</label>
          <textarea 
            className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition font-semibold min-h-[160px] resize-none"
            placeholder="Tell us about their school performance, specific topics they find hard, and any character development goals..."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black text-xl hover:bg-indigo-700 transition shadow-2xl shadow-indigo-100 disabled:opacity-50 flex items-center justify-center space-x-4"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Analyzing Region & Profiles...</span>
            </>
          ) : (
            <span>Generate Geo-Aligned Study Plan</span>
          )}
        </button>
        <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-widest">
          Geographically Relevant • AI-Powered Consultation • Verified Educators
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;
