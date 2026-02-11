
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'dashboard' | 'consult') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (page: 'home' | 'dashboard' | 'consult' | string) => {
    setIsMenuOpen(false);
    if (page === 'home' || page === 'dashboard' || page === 'consult') {
      onNavigate(page as any);
    } else {
      const el = document.getElementById(page);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => handleLinkClick('home')}
        >
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600 tracking-tight">
            STEM-Elevate
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleLinkClick('home')}
            className={`text-sm font-medium transition ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Home
          </button>
          <button 
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
            onClick={() => handleLinkClick('features')}
          >
            Our Values
          </button>
          <button 
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
            onClick={() => handleLinkClick('teachers')}
          >
            Our Teachers
          </button>
          <button 
            onClick={() => handleLinkClick('dashboard')}
            className={`text-sm font-medium transition ${currentPage === 'dashboard' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Parent Login
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => onNavigate('consult')}
            className="hidden sm:block bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-100"
          >
            Register Student
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            <button onClick={() => handleLinkClick('home')} className="text-left py-2 font-semibold text-gray-700">Home</button>
            <button onClick={() => handleLinkClick('features')} className="text-left py-2 font-semibold text-gray-700">Our Values</button>
            <button onClick={() => handleLinkClick('teachers')} className="text-left py-2 font-semibold text-gray-700">Our Teachers</button>
            <button onClick={() => handleLinkClick('dashboard')} className="text-left py-2 font-semibold text-gray-700">Parent Login</button>
            <button 
              onClick={() => handleLinkClick('consult')}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-center"
            >
              Register Student
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
