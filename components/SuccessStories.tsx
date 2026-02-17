
import React from 'react';

const stories = [
  {
    name: "Aiden M.",
    grade: "Grade 11",
    subject: "Physics & Calculus",
    improvement: "C+ to A",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=600&q=80",
    quote: "Jet Consults Academy didn't just help me solve equations; they taught me the discipline to approach every problem with a plan. I'm now leading my school's robotics club.",
    characterFocus: "Self-Discipline & Leadership"
  },
  {
    name: "Sophia L.",
    grade: "Grade 9",
    subject: "Mathematics",
    improvement: "Foundational Gap Closed",
    image: "https://images.unsplash.com/photo-1491013516836-7dbf4369755a?auto=format&fit=crop&w=600&q=80",
    quote: "My daughter had a weak foundation in Math. Her tutor went back to basics and built her confidence from scratch. She no longer fears exams.",
    characterFocus: "Academic Confidence"
  },
  {
    name: "Daniel K.",
    grade: "Grade 12",
    subject: "Computer Science",
    improvement: "State Coding Competition Winner",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    quote: "Beyond coding, my mentor taught me the importance of using tech for community impact. We built an app for a local food bank together.",
    characterFocus: "Social Responsibility"
  },
  {
    name: "Maya R.",
    grade: "Grade 10",
    subject: "Chemistry",
    improvement: "B to A+",
    image: "https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?auto=format&fit=crop&w=600&q=80",
    quote: "The holiday coaching camp was a game-changer. I mastered organic chemistry concepts that I used to find impossible.",
    characterFocus: "Hard Work & Persistence"
  }
];

const SuccessStories: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-600 font-black text-xs uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </button>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight mb-6">Real Results. <span className="text-indigo-600">Real Character.</span></h1>
        <p className="text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
          See how our holistic approach to STEM tutoring transforms grades and develops responsible, hard-working students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {stories.map((story, idx) => (
          <div key={idx} className="bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/20 overflow-hidden flex flex-col sm:flex-row group">
            <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
              <img 
                src={story.image} 
                alt={story.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent sm:hidden"></div>
            </div>
            <div className="p-8 sm:p-10 sm:w-3/5 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">{story.name}</h3>
                  <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">{story.grade} • {story.subject}</p>
                </div>
                <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                  {story.improvement}
                </div>
              </div>
              
              <div className="flex-1 italic text-gray-600 font-medium leading-relaxed mb-8 relative">
                <span className="text-5xl text-indigo-100 absolute -top-4 -left-2 font-serif">“</span>
                <p className="relative z-10">{story.quote}</p>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Character Transformation</p>
                <div className="flex items-center space-x-2 text-indigo-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745a3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-sm font-black">{story.characterFocus}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-indigo-600 rounded-[3rem] p-10 sm:p-20 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-black mb-6">Ready to write your child's success story?</h2>
        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Join our community of high-achieving, disciplined, and purposeful students today.</p>
        <button 
          onClick={() => window.scrollTo(0, 0)}
          className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition"
        >
          Apply for Admission
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;