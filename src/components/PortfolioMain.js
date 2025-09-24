import React, { useState } from 'react';

import Education from './Certifications';
import Certifications from './Experience';
import Projects from './Projects';
import Experience from './Education'
import Navigation from './Navigation';
import Hero from './Hero';

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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 text-gray-800">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      <Hero />
      <main className="relative">
        {/* 배경 장식 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-100 blur-3xl opacity-30" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-violet-100 blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-purple-100 blur-3xl opacity-30" />
        </div>

        {/* 컨텐츠 */}
        <div className="relative">
          <Education />
          <Certifications />
          <Projects />
          <Experience />
        </div>
      </main>
      
      <footer className="bg-white bg-opacity-90 py-8 text-center text-gray-600 shadow-lg">
        <div className="container mx-auto px-4">
          <p className="text-sm">© 2024 구경선. All rights reserved.</p>
          <div className="mt-4 text-xs text-pink-400">
            <span>Made with </span>
            <span className="mx-1">♥</span>
            <span>by kyungseon</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioMain;