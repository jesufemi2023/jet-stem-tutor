
import React from 'react';

const Hero: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <section className="relative pt-12 pb-20 sm:py-24 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-1.5 mb-8 text-xs sm:text-sm font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 rounded-full border border-indigo-100">
            <span className="mr-2">✨</span> Premium STEM Tutoring
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
            Excellence in <span className="text-indigo-600 italic">Character</span> & Academics
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Personalized online tutoring for Grades 7-12. We reinforce school curriculum while instilling discipline, responsibility, and God-fearing values.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl shadow-indigo-100"
            >
              Start Free Consultation
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition">
              Meet Our Tutors
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 font-semibold text-sm">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-green-50 rounded-full text-green-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <span>1:1 Sessions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-green-50 rounded-full text-green-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <span>School Reinforced</span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-xl lg:max-w-none">
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-200/50 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90" 
                alt="Students collaborating online"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent"></div>
            </div>
            {/* Float badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce hidden sm:block">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  🏆
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Success Rate</p>
                  <p className="text-sm font-black text-gray-900">98% Improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
