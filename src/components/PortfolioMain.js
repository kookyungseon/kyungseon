import React, { useState } from 'react';
import Education from './Education';
import Certifications from './Certifications';
import Projects from './Projects';
import Experience from './Experience';
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
    <div className="min-h-screen bg-white text-gray-800">
      <Hero />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      <main className="relative">
        <div className="relative">
          <Education />
          <Certifications />
          <Projects />
          <Experience />
        </div>
      </main>
      <footer className="bg-gray-50 py-8 text-center text-gray-600">
        <div className="container mx-auto px-4">
          <p className="text-sm">© 2024 구경선. All rights reserved.</p>
          <div className="mt-4 text-xs text-gray-400">
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