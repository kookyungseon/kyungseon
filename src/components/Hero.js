import React, { useState, useEffect } from "react";
import { Github, Mail, ArrowDown, Sparkles, Code, Cloud, Database } from "lucide-react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const words = ["클라우드", "AI", "데이터", "DX"];
  const colors = ["from-cyan-400 to-cyan-600", "from-cyan-400 to-cyan-600", "from-cyan-400 to-cyan-600", "from-cyan-400 to-cyan-600"];

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
    <header className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gray-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* 이름 등장 애니메이션 */}
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider animate-fade-in text-white">
              Koo kyungseon
            </h1>
            <div className="mt-8 flex justify-center">
              <Sparkles className="animate-spin text-white" size={32} />
            </div>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      {showContent && (
        <div className="relative text-center px-6 md:px-12 max-w-6xl w-full z-10">
          {/* 프로필 이미지 영역 */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-gray-700">
                  <Code className="text-white" size={48} />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles size={16} className="text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide animate-slide-up">
              안녕하세요, <br />
              <span className="text-gray-300">
                구경선
              </span>입니다
            </h1>

            <div className="flex justify-center items-center space-x-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center space-x-2 text-gray-400">
                <Cloud className="text-white" size={20} />
                <span className="text-sm md:text-lg">Cloud</span>
              </div>
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Database className="text-white" size={20} />
                <span className="text-sm md:text-lg">Data</span>
              </div>
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Code className="text-white" size={20} />
                <span className="text-sm md:text-lg">AI</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s" }}>
              충북대학교 지구환경과학 & 소프트웨어 복수전공
              <br />
              <span className="text-white font-semibold">
                <span className="text-gray-300">
                  {words[currentWord]}
                </span> 전문성을 바탕으로 DX 혁신을 이끌어갑니다
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.9s" }}>
              <a
                href="mailto:koo0685@naver.com"
                className="group flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} className="mr-3 group-hover:animate-bounce" />
                이메일 보내기
              </a>
              <a
                href="https://github.com/kookyungseon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white border border-gray-300 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} className="mr-3 group-hover:animate-bounce text-black" />
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
