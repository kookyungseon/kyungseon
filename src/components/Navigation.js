import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => (
  <nav className="fixed w-full bg-white shadow-sm z-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <span className="text-2xl font-light text-gray-900">kyungseon</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('education')}
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            학력
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            자격증
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            프로젝트
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            경력
          </button>
          <a
            href="mailto:koo0685@naver.com"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition font-medium"
          >
            연락하기
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 space-y-4">
          <button
            onClick={() => scrollToSection('education')}
            className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            학력
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            자격증
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            프로젝트
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            경력
          </button>
          <a
            href="mailto:koo0685@naver.com"
            className="block text-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition font-medium"
          >
            연락하기
          </a>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;
