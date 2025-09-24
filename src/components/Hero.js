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
    <header className="relative w-full h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center overflow-hidden">
      {/* 동적 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        
        {/* 부드럽게 움직이는 원형 요소들 */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* 미묘한 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* 향상된 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* 메인 콘텐츠 */}
      <div className="relative text-center px-6 md:px-12 max-w-6xl w-full z-10">
        {/* 프로필 이미지 영역 */}
        <div className="mb-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative group">
            {/* 배경 링 */}
            <div className="absolute inset-0 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 animate-spin-slow opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            {/* 메인 프로필 */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
              <Code className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300" size={48} />
            </div>
            
            {/* 호버 시 나타나는 장식 요소들 */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide animate-slide-up text-gray-900">
            안녕하세요, <br />
            <span className="font-medium text-gray-800">
              구경선
            </span>입니다
          </h1>

                 <div className="flex justify-center items-center space-x-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                   <div className="group flex items-center space-x-2 text-gray-700 bg-white/90 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                     <Cloud className="text-gray-600 group-hover:text-gray-800 transition-colors" size={20} />
                     <span className="text-sm md:text-lg font-semibold">Cloud</span>
                   </div>
                   <div className="w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse"></div>
                   <div className="group flex items-center space-x-2 text-gray-700 bg-white/90 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                     <Database className="text-gray-600 group-hover:text-gray-800 transition-colors" size={20} />
                     <span className="text-sm md:text-lg font-semibold">Data</span>
                   </div>
                   <div className="w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                   <div className="group flex items-center space-x-2 text-gray-700 bg-white/90 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                     <Code className="text-gray-600 group-hover:text-gray-800 transition-colors" size={20} />
                     <span className="text-sm md:text-lg font-semibold">AI</span>
                   </div>
                 </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s" }}>
            충북대학교 지구환경과학 & 소프트웨어 복수전공
            <br />
            <span className="text-gray-800 font-medium">
              <span className="text-gray-900 font-semibold">
                {words[currentWord]}
              </span>
            </span>
          </p>

                 <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.9s" }}>
                   <a
                     href="mailto:koo0685@naver.com"
                     className="group flex items-center justify-center px-10 py-4 text-lg font-semibold text-gray-800 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-gray-300 hover:scale-105 transition-all duration-500"
                   >
                     <Mail size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                     이메일 보내기
                   </a>
                   <a
                     href="https://github.com/kookyungseon"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:from-gray-700 hover:to-gray-800 hover:scale-105 transition-all duration-500"
                   >
                     <Github size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                     깃허브
                   </a>
                 </div>
        </div>

        {/* 향상된 스크롤 힌트 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 group cursor-pointer">
          <span className="text-sm font-medium mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">더 알아보기</span>
          <div className="relative">
            <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-gray-600 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-gray-600 transition-colors duration-300"></div>
            </div>
            <div className="absolute inset-0 w-8 h-12 border-2 border-transparent rounded-full group-hover:border-gray-300 group-hover:animate-ping"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;