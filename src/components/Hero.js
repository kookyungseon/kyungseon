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
    <header className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden">
      {/* 미니멀 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* 미니멀 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* 메인 콘텐츠 */}
      <div className="relative text-center px-6 md:px-12 max-w-6xl w-full z-10">
        {/* 프로필 이미지 영역 */}
        <div className="mb-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-xl">
              <Code className="text-gray-600" size={48} />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide animate-slide-up text-gray-900">
            안녕하세요, <br />
            <span className="font-medium text-gray-800">
              구경선
            </span>입니다
          </h1>

                 <div className="flex justify-center items-center space-x-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                   <div className="flex items-center space-x-2 text-gray-600 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                     <Cloud className="text-gray-500" size={20} />
                     <span className="text-sm md:text-lg font-medium">Cloud</span>
                   </div>
                   <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                   <div className="flex items-center space-x-2 text-gray-600 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                     <Database className="text-gray-500" size={20} />
                     <span className="text-sm md:text-lg font-medium">Data</span>
                   </div>
                   <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                   <div className="flex items-center space-x-2 text-gray-600 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                     <Code className="text-gray-500" size={20} />
                     <span className="text-sm md:text-lg font-medium">AI</span>
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

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.9s" }}>
            <a
              href="mailto:koo0685@naver.com"
              className="group flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <Mail size={20} className="mr-3" />
              이메일 보내기
            </a>
            <a
              href="https://github.com/kookyungseon"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 border-2 border-gray-900 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-300"
            >
              <Github size={20} className="mr-3" />
              깃허브
            </a>
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">더 알아보기</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;