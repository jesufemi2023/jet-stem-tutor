
import React from 'react';
import { GradeLevel } from '../types';

const ParentDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Parent Hub</h1>
          <p className="text-gray-500 font-semibold mt-1">Monitoring growth, character, and STEM performance.</p>
        </div>
        <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
          + Add New Student
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/20 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-white">
                <h3 className="text-xl font-black tracking-tight">John Doe</h3>
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest">{GradeLevel.GRADE_11} • Advance Mathematics</p>
              </div>
              <span className="bg-green-400/20 text-green-300 text-[10px] font-black px-4 py-1.5 rounded-full border border-green-400/30 uppercase tracking-widest">ON TRACK</span>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] text-indigo-400 uppercase font-black mb-1">Upcoming</p>
                  <p className="font-black text-gray-900">Tomorrow, 4PM</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] text-indigo-400 uppercase font-black mb-1">Total Hours</p>
                  <p className="font-black text-gray-900">24.5h</p>
                </div>
                <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100 col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-indigo-600 uppercase font-black mb-1">Character Score</p>
                  <p className="font-black text-indigo-600 text-lg">9.8/10</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest">Topic Mastery</h4>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-gray-700">Algebraic Calculus</span>
                      <span className="text-xs font-black text-indigo-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[85%] rounded-full shadow-lg shadow-indigo-200"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-gray-700">Trigonometry Basics</span>
                      <span className="text-xs font-black text-indigo-600">40%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div className="bg-indigo-600/40 h-full w-[40%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-50 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 transition shadow-lg">
                  Join Live Room
                </button>
                <button className="flex-1 py-4 bg-gray-50 text-gray-600 rounded-2xl font-black text-sm hover:bg-gray-100 transition">
                  Session Notes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
            <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Character Highlights</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-xl text-green-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900">Excellent Punctuality</p>
                  <p className="text-xs text-gray-500 font-medium">Always online 5 mins early.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900">Self-Disciplined</p>
                  <p className="text-xs text-gray-500 font-medium">Completes all homework solo.</p>
                </div>
              </div>
              <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100/50">
                <p className="text-xs text-indigo-800 leading-relaxed font-semibold italic">
                  "John's focus is remarkable. He's showing genuine leadership in peer-coding groups."
                  <span className="block mt-2 font-black not-italic text-[10px] uppercase opacity-60">— Tutor Grace</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-100">
            <h4 className="font-black uppercase text-xs tracking-widest mb-3 opacity-80">Announcements</h4>
            <p className="text-lg font-black mb-4 leading-tight">Holiday Foundation Camp starts June 15th.</p>
            <p className="text-sm font-medium opacity-90 mb-6">Reinforce early STEM gaps before next semester begins. Limited spots.</p>
            <button className="w-full py-4 bg-white text-indigo-700 rounded-2xl font-black text-sm shadow-xl">
              Register Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
