
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import ProgramsSection from './components/ProgramsSection.tsx';
import ConsultationForm from './components/ConsultationForm.tsx';
import RegistrationForm from './components/RegistrationForm.tsx';
import TeacherProfiles from './components/TeacherProfiles.tsx';
import SuccessStories from './components/SuccessStories.tsx';
import SuccessStoriesSlider from './components/SuccessStoriesSlider.tsx';
import BookingCalendar from './components/BookingCalendar.tsx';

type Page = 'home' | 'consult' | 'stories' | 'booking' | 'register';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-1000">
            <Hero 
              onStart={() => setCurrentPage('consult')} 
              onStories={() => setCurrentPage('stories')}
            />
            
            {/* Direct Booking Invitation */}
            <section className="py-12 bg-indigo-50/50 border-y border-indigo-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">Prefer a direct conversation?</h3>
                  <p className="text-gray-500 font-medium">Speak with our academic director to discuss your child's specific needs.</p>
                </div>
                <button 
                  onClick={() => setCurrentPage('booking')}
                  className="px-8 py-4 bg-white border border-indigo-200 text-indigo-600 rounded-2xl font-black hover:bg-indigo-600 hover:text-white transition shadow-sm"
                >
                  Book a Direct Call
                </button>
              </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white px-4 sm:px-6">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 w-full order-2 lg:order-1">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=90" 
                      alt="Education focus"
                      className="rounded-[3rem] shadow-2xl border-4 border-gray-50"
                    />
                    <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
                      <p className="text-4xl font-black mb-1">100%</p>
                      <p className="text-xs font-black uppercase tracking-widest opacity-80">Commitment to Character</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-8 order-1 lg:order-2">
                  <h2 className="text-xs font-black text-indigo-600 uppercase tracking-widest">Holistic Mentorship</h2>
                  <h3 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">More than just a <span className="text-indigo-600">tutoring service.</span></h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    We believe true excellence comes from a balanced heart and mind. Our specialized counseling sessions help students manage school stress, build self-confidence, and develop a sense of duty to their community.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-3 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <h4 className="font-black text-indigo-600 uppercase text-xs tracking-widest">Counseling</h4>
                      <p className="text-sm text-gray-500 font-semibold leading-relaxed">Emotional and academic guidance for every learner.</p>
                    </div>
                    <div className="space-y-3 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <h4 className="font-black text-indigo-600 uppercase text-xs tracking-widest">Foundations</h4>
                      <p className="text-sm text-gray-500 font-semibold leading-relaxed">Closing knowledge gaps from previous grades.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ProgramsSection />

            <Features />

            <TeacherProfiles />

            <SuccessStoriesSlider onViewAll={() => setCurrentPage('stories')} />

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6">
              <div className="max-w-6xl mx-auto rounded-[3.5rem] bg-indigo-600 relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="100" cy="0" r="100" fill="white" />
                  </svg>
                </div>
                <div className="relative z-10 p-10 sm:p-20 text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 tracking-tight">Invest in your child's <span className="text-indigo-200 underline decoration-indigo-300 underline-offset-8">total future.</span></h2>
                  <p className="text-lg sm:text-xl text-indigo-100 mb-12 leading-relaxed font-medium">
                    Join hundreds of families who have seen their children transform from struggling students to confident, top-performing STEM leaders with a heart for service.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button 
                      onClick={() => setCurrentPage('register')}
                      className="w-full sm:w-auto px-12 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:scale-105 transition shadow-2xl"
                    >
                      Register Student
                    </button>
                    <button 
                      onClick={() => setCurrentPage('stories')}
                      className="text-indigo-50 font-black uppercase text-xs tracking-widest hover:text-white transition"
                    >
                      View Success Stories
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'stories':
        return (
          <div className="bg-gray-50 min-h-screen animate-in fade-in duration-700">
            <SuccessStories onBack={() => setCurrentPage('home')} />
          </div>
        );
      case 'consult':
        return (
          <div className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700">
            <ConsultationForm />
          </div>
        );
      case 'register':
        return (
          <div className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700">
            <RegistrationForm onBack={() => setCurrentPage('home')} />
          </div>
        );
      case 'booking':
        return (
          <div className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50 min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-700">
            <BookingCalendar onBack={() => setCurrentPage('home')} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30 selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-indigo-600 p-1.5 rounded-xl">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tighter">STEM-Elevate</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed font-medium text-sm">
              Premium secondary education reinforcement focusing on technical mastery, character building, and community impact.
            </p>
          </div>
          <div>
            <h4 className="font-black text-gray-900 mb-8 uppercase text-xs tracking-widest">Learning</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><button className="hover:text-indigo-600 transition" onClick={() => setCurrentPage('home')}>Mathematics</button></li>
              <li><button className="hover:text-indigo-600 transition" onClick={() => setCurrentPage('home')}>Physics & Chemistry</button></li>
              <li><button className="hover:text-indigo-600 transition" onClick={() => setCurrentPage('home')}>Coding & AI</button></li>
              <li><button className="hover:text-indigo-600 transition" onClick={() => setCurrentPage('home')}>Foundation Builder</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-gray-900 mb-8 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><button className="hover:text-indigo-600 transition" onClick={() => setCurrentPage('stories')}>Success Stories</button></li>
              <li><button className="hover:text-indigo-600 transition" onClick={() => setCurrentPage('booking')}>Book a Call</button></li>
              <li><button className="hover:text-indigo-600 transition" onClick={() => setCurrentPage('consult')}>Get AI Plan</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>© 2024 STEM-Elevate Education</span>
          <div className="flex space-x-8">
            <button className="hover:text-indigo-600 transition">Privacy Policy</button>
            <button className="hover:text-indigo-600 transition">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
