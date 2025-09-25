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
    <header className="relative w-full h-screen bg-gradient-to-br from-[#F0F0F0] via-[#D9E9CF] to-[#B6CEB4] flex items-center justify-center overflow-hidden">
      {/* 미니멀 배경 패턴 */}
      <div className="absolute inset-0">
        {/* 메인 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F0F0] via-[#D9E9CF] to-[#B6CEB4]"></div>
        
        {/* 미니멀 기하학적 요소들 */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#96A78D]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#B6CEB4]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#D9E9CF]/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* 미니멀 그리드 패턴 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2396A78D%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative text-center px-6 md:px-12 max-w-6xl w-full z-10">
        {/* 미니멀 프로필 영역 */}
        <div className="mb-20 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative group">
            {/* 미니멀 배경 */}
            <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#96A78D]/20 backdrop-blur-xl border border-[#96A78D]/30 animate-pulse-glow"></div>
            
            {/* 메인 프로필 */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#B6CEB4]/30 backdrop-blur-xl flex items-center justify-center border border-[#96A78D]/40 shadow-2xl group-hover:shadow-[#96A78D]/25 transition-all duration-700 group-hover:scale-110">
              <Code className="text-[#96A78D] group-hover:text-[#B6CEB4] transition-colors duration-300" size={56} />
            </div>
            
            {/* 미니멀 링 효과 */}
            <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-[#96A78D]/40 opacity-0 group-hover:opacity-100 animate-ping"></div>
            
            {/* 미니멀 장식 요소들 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#96A78D]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B6CEB4]/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <div className="space-y-12">
          {/* 메인 타이틀 */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slide-up">
              <span className="text-[#96A78D]">
                안녕하세요,
              </span>
              <br />
              <span className="text-[#96A78D]">
                구경선
              </span>
              <span className="text-[#96A78D]/80">입니다</span>
            </h1>
            
            {/* 서브타이틀 */}
            <div className="text-xl md:text-2xl text-[#96A78D]/70 font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-[#96A78D] font-semibold">
                {words[currentWord]}
              </span>
            </div>
          </div>

          {/* 미니멀 스킬 태그 */}
          <div className="flex justify-center items-center space-x-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="group flex items-center space-x-3 text-[#96A78D] bg-[#B6CEB4]/30 backdrop-blur-xl px-6 py-3 rounded-2xl border border-[#96A78D]/40 shadow-xl hover:shadow-[#96A78D]/20 transition-all duration-500 hover:scale-105 hover:bg-[#B6CEB4]/40">
              <Cloud className="text-[#96A78D] group-hover:text-[#B6CEB4] transition-colors" size={22} />
              <span className="text-sm md:text-lg font-semibold">Cloud</span>
            </div>
            <div className="w-3 h-3 bg-[#96A78D]/60 rounded-full animate-pulse"></div>
            <div className="group flex items-center space-x-3 text-[#96A78D] bg-[#B6CEB4]/30 backdrop-blur-xl px-6 py-3 rounded-2xl border border-[#96A78D]/40 shadow-xl hover:shadow-[#96A78D]/20 transition-all duration-500 hover:scale-105 hover:bg-[#B6CEB4]/40">
              <Database className="text-[#96A78D] group-hover:text-[#B6CEB4] transition-colors" size={22} />
              <span className="text-sm md:text-lg font-semibold">Data</span>
            </div>
            <div className="w-3 h-3 bg-[#96A78D]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="group flex items-center space-x-3 text-[#96A78D] bg-[#B6CEB4]/30 backdrop-blur-xl px-6 py-3 rounded-2xl border border-[#96A78D]/40 shadow-xl hover:shadow-[#96A78D]/20 transition-all duration-500 hover:scale-105 hover:bg-[#B6CEB4]/40">
              <Code className="text-[#96A78D] group-hover:text-[#B6CEB4] transition-colors" size={22} />
              <span className="text-sm md:text-lg font-semibold">AI</span>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <p className="text-lg md:text-xl text-[#96A78D]/80 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s" }}>
            충북대학교 지구환경과학 & 소프트웨어 복수전공
          </p>

          {/* 미니멀 CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="mailto:koo0685@naver.com"
              className="group relative flex items-center justify-center px-12 py-4 text-lg font-bold text-[#F0F0F0] bg-[#96A78D] rounded-2xl shadow-2xl hover:shadow-[#96A78D]/30 hover:scale-105 transition-all duration-500"
            >
              <Mail size={22} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              이메일 보내기
            </a>
            <a
              href="https://github.com/kookyungseon"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center px-12 py-4 text-lg font-bold text-[#96A78D] bg-[#B6CEB4]/30 backdrop-blur-xl border border-[#96A78D]/40 rounded-2xl shadow-2xl hover:shadow-[#96A78D]/20 hover:scale-105 hover:bg-[#B6CEB4]/40 transition-all duration-500"
            >
              <Github size={22} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              깃허브
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;