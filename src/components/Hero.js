import React, { useState, useEffect } from "react";
import { Github, Mail, Code, Cloud, Database, Star } from "lucide-react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const words = ["Full-Stack Developer", "Data Science Enthusiast", "AI/ML Developer"];

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showContent) {
      const interval = setInterval(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showContent, words.length]);

  return (
    <header className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center py-20 overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#9ECAD6]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#748DAE]/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#F5CBCB]/20 rounded-full blur-lg"></div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="text-center">
          {/* 네비게이션 */}
          <nav className="mb-16">
            <div className="flex justify-center space-x-8">
              <a href="#about" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">About</a>
              <a href="#projects" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Projects</a>
              <a href="#skills" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Skills</a>
              <a href="#awards" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Awards</a>
              <a href="#contact" className="text-[#748DAE] hover:text-[#9ECAD6] transition-colors font-medium">Contact</a>
            </div>
          </nav>

          {/* 메인 타이틀 */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#748DAE] mb-4">
            안녕하세요, 구경선입니다
          </h1>
          
          {/* 서브타이틀 */}
          <div className="text-2xl text-[#9ECAD6] font-medium mb-6">
            {words[currentWord]}
          </div>

          {/* 설명 */}
          <p className="text-[#748DAE] text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            데이터 분석과 인공지능 기술을 통해 문제를 해결하고, 의미 있는 인사이트를 도출하는 것을 목표로 합니다. 
            다양한 프로젝트 경험을 바탕으로 실무에 적용 가능한 AI 솔루션을 개발하고 있습니다.
          </p>

          {/* 스킬 아이콘들 */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9ECAD6] rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-sm text-[#748DAE] font-medium">AI/ML</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9ECAD6] rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-sm text-[#748DAE] font-medium">Data Analysis</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9ECAD6] rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-sm text-[#748DAE] font-medium">Development</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9ECAD6] rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🔬</span>
              </div>
              <span className="text-sm text-[#748DAE] font-medium">Research</span>
            </div>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#748DAE] text-white rounded-lg hover:bg-[#9ECAD6] transition-colors font-medium"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#748DAE] text-[#748DAE] rounded-lg hover:bg-[#748DAE] hover:text-white transition-colors font-medium"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;