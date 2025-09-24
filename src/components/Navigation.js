import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <span className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            kyungseon
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
            >
              학력
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
            >
              자격증
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
            >
              프로젝트
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
            >
              경력
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a
              href="mailto:koo0685@naver.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
            >
              연락하기
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mx-2 mb-2">
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 px-4 hover:bg-blue-50 rounded"
            >
              학력
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 px-4 hover:bg-blue-50 rounded"
            >
              자격증
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 px-4 hover:bg-blue-50 rounded"
            >
              프로젝트
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 px-4 hover:bg-blue-50 rounded"
            >
              경력
            </button>
            <a
              href="mailto:koo0685@naver.com"
              className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium mx-4"
            >
              연락하기
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;