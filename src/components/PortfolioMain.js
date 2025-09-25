import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Education from './Education';
import Certifications from './Certifications';
import Projects from './Projects';
import Experience from './Experience';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const PortfolioMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* 고정 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* 로고 */}
            <div className="text-2xl font-bold text-[#748DAE]">
              구경선
            </div>
            
            {/* 네비게이션 메뉴 */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">About</a>
              <a href="#education" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Education</a>
              <a href="#projects" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Projects</a>
              <a href="#skills" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Skills</a>
              <a href="#certifications" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Awards</a>
              <a href="#contact" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Contact</a>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              className="md:hidden text-[#748DAE] hover:text-[#9ECAD6] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <a href="#about" className="block text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#education" className="block text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#projects" className="block text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="block text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#certifications" className="block text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Awards</a>
              <a href="#contact" className="block text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      <Hero />
      <main className="relative">
        <div className="relative">
          <About />
          <Education />
          <Certifications />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="bg-white py-8 text-center border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <a href="mailto:koo0685@naver.com" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/kookyungseon" target="_blank" rel="noopener noreferrer" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-[#748DAE] text-sm">© 2024 구경선. All rights reserved.</p>
          <div className="mt-2 text-xs text-[#748DAE]">
            <span>Built with React & </span>
            <span className="mx-1">♥</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioMain;