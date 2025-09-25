import React, { useState, useEffect } from "react";

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
    <header className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#9ECAD6]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#748DAE]/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#F5CBCB]/20 rounded-full blur-lg"></div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="text-center">
          {/* 메인 타이틀 */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D3748] mb-4">
            안녕하세요, 구경선입니다
          </h1>
          
          {/* 서브타이틀 */}
          <div className="text-2xl text-[#4A5568] font-medium mb-6">
            {words[currentWord]}
          </div>

          {/* 설명 */}
          <p className="text-[#2D3748] text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            지구환경과학과와 소프트웨어학과 복수전공으로 체계적인 사고력과 기술적 역량을 겸비했습니다. 
            AI, 데이터 분석, 클라우드 인프라 분야에서 창의적 문제해결 능력을 발휘하며, 
            안정성과 사용자 경험을 동시에 고려하는 풀스택 개발자입니다. 
            기술의 완성도가 곧 서비스의 신뢰와 직결된다는 믿음으로, 
            지속 가능하고 확장 가능한 솔루션을 만드는 것을 목표로 합니다.
          </p>

          {/* 스킬 아이콘들 */}
          <div className="flex justify-center items-center space-x-6 mb-8 flex-wrap gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3182CE] to-[#2B6CB0] rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-sm text-[#2D3748] font-semibold">AI/ML</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38A169] to-[#2F855A] rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-sm text-[#2D3748] font-semibold">Data Analysis</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D53F8C] to-[#B83280] rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-sm text-[#2D3748] font-semibold">Development</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#805AD5] to-[#6B46C1] rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl">☁️</span>
              </div>
              <span className="text-sm text-[#2D3748] font-semibold">Cloud</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DD6B20] to-[#C05621] rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl">🔬</span>
              </div>
              <span className="text-sm text-[#2D3748] font-semibold">Research</span>
            </div>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#3182CE] to-[#2B6CB0] text-white rounded-lg hover:from-[#2B6CB0] hover:to-[#1E4A72] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#3182CE] text-[#3182CE] rounded-lg hover:bg-[#3182CE] hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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