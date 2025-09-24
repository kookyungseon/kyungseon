import React, { useState, useEffect } from "react";
import { Github, Mail, ArrowDown, Code, Cloud, Database, MapPin, Calendar } from "lucide-react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const words = ["클라우드", "AI", "데이터", "DX"];

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
  }, [showContent]);

  return (
    <header className="relative w-full h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden">
      {/* Three.js 3D 배경 */}
      <div className="absolute inset-0 opacity-30">
        <ThreeScene />
      </div>

      {/* 미니멀 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

      {/* 이름 등장 애니메이션 */}
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light tracking-wider animate-fade-in text-gray-900">
              Koo kyungseon
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      {showContent && (
        <div className="relative text-center px-6 md:px-12 max-w-6xl w-full z-10">
          {/* 프로필 이미지 영역 */}
          <div className="mb-16 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200">
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
              <div className="flex items-center space-x-2 text-gray-600">
                <Cloud className="text-gray-500" size={20} />
                <span className="text-sm md:text-lg">Cloud</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Database className="text-gray-500" size={20} />
                <span className="text-sm md:text-lg">Data</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Code className="text-gray-500" size={20} />
                <span className="text-sm md:text-lg">AI</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s" }}>
              충북대학교 지구환경과학 & 소프트웨어 복수전공
              <br />
              <span className="text-gray-800 font-medium">
                <span className="text-gray-900 font-semibold">
                  {words[currentWord]}
                </span> 전문성을 바탕으로 DX 혁신을 이끌어갑니다
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

          {/* 스크롤 인디케이터 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;
