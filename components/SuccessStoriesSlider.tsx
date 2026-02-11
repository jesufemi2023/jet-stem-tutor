
import React, { useState, useEffect, useCallback } from 'react';

const stories = [
  {
    name: "Aiden M.",
    grade: "Grade 11",
    subject: "Physics & Calculus",
    improvement: "C+ to A",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80",
    quote: "STEM-Elevate didn't just help me solve equations; they taught me the discipline to approach every problem with a plan. I'm now leading my school's robotics club.",
    characterFocus: "Self-Discipline & Leadership"
  },
  {
    name: "Sophia L.",
    grade: "Grade 9",
    subject: "Mathematics",
    improvement: "Foundational Gap Closed",
    image: "https://images.unsplash.com/photo-1491013516836-7dbf4369755a?auto=format&fit=crop&w=800&q=80",
    quote: "My daughter had a weak foundation in Math. Her tutor went back to basics and built her confidence from scratch. She no longer fears exams.",
    characterFocus: "Academic Confidence"
  },
  {
    name: "Daniel K.",
    grade: "Grade 12",
    subject: "Computer Science",
    improvement: "State Coding Winner",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    quote: "Beyond coding, my mentor taught me the importance of using tech for community impact. We built an app for a local food bank together.",
    characterFocus: "Social Responsibility"
  },
  {
    name: "Maya R.",
    grade: "Grade 10",
    subject: "Chemistry",
    improvement: "B to A+",
    image: "https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?auto=format&fit=crop&w=800&q=80",
    quote: "The holiday coaching camp was a game-changer. I mastered organic chemistry concepts that I used to find impossible.",
    characterFocus: "Hard Work & Persistence"
  }
];

const SuccessStoriesSlider: React.FC<{ onViewAll: () => void }> = ({ onViewAll }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const currentStory = stories[currentIndex];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-black tracking-widest uppercase text-xs mb-4">Success Stories</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Transforming <span className="text-indigo-600">Lives</span> through STEM
            </h3>
            <p className="mt-6 text-lg text-gray-500 font-medium">
              Join the hundreds of parents who have watched their children gain confidence and master their school subjects.
            </p>
          </div>
          <button 
            onClick={onViewAll}
            className="group flex items-center space-x-2 text-indigo-600 font-black uppercase text-xs tracking-widest hover:opacity-70 transition"
          >
            <span>Browse All Stories</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <div className="relative group/slider">
          <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-indigo-100 border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
            {/* Image side */}
            <div className="lg:w-1/2 relative h-72 lg:h-auto overflow-hidden">
              <img 
                src={currentStory.image} 
                alt={currentStory.name}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-3xl font-black">{currentStory.name}</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">{currentStory.grade}</p>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-1/2 p-8 sm:p-16 flex flex-col justify-center relative">
              <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest mb-8">
                  {currentStory.improvement} Improvement
                </div>
                
                <div className="relative mb-10">
                  <span className="text-8xl text-indigo-50 absolute -top-12 -left-8 font-serif leading-none select-none">“</span>
                  <p className="text-xl sm:text-2xl font-medium text-gray-700 leading-relaxed italic relative z-10">
                    {currentStory.quote}
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Character Focus</p>
                    <div className="flex items-center space-x-2 text-indigo-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745a3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-black text-sm uppercase tracking-tight">{currentStory.characterFocus}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prev}
                      className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 hover:bg-indigo-600 hover:text-white transition flex items-center justify-center border border-gray-100"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button 
                      onClick={next}
                      className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 hover:bg-indigo-600 hover:text-white transition flex items-center justify-center border border-gray-100"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {stories.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-200 hover:bg-indigo-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSlider;
