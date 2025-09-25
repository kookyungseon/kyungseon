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
      <footer className="bg-gradient-to-r from-[#FFEAEA] to-[#F5CBCB] py-8 text-center">
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