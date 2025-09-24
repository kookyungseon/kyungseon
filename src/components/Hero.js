import React, { useState, useEffect } from "react";
import { Github, Mail, ArrowDown, Sparkles, Code, Cloud, Database, Zap, Star, Rocket } from "lucide-react";

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
    <header className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden">
      {/* 동적 배경 효과 */}
      <div className="absolute inset-0">
        {/* 메인 그라데이션 원들 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        {/* 작은 떠다니는 원들 */}
        <div className="absolute top-1/6 right-1/6 w-4 h-4 bg-white rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-2000 opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-purple-400 rounded-full animate-float animation-delay-4000 opacity-40"></div>
      </div>

      {/* 네온 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      {/* 이름 등장 애니메이션 */}
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider animate-fade-in bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Koo kyungseon
            </h1>
            <div className="mt-8 flex justify-center space-x-4">
              <Sparkles className="animate-spin text-blue-400" size={32} />
              <Rocket className="animate-bounce text-purple-400" size={32} />
              <Zap className="animate-pulse text-cyan-400" size={32} />
            </div>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      {showContent && (
        <div className="relative text-center px-6 md:px-12 max-w-6xl w-full z-10">
          {/* 프로필 이미지 영역 */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* 네온 링 효과 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin opacity-75 blur-sm"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse opacity-50"></div>
              
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-gray-900 to-black p-1 border-2 border-transparent bg-clip-border">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-gray-700 group-hover:border-purple-500 transition-all duration-300">
                  <div className="relative">
                    <Code className="text-white group-hover:text-blue-400 transition-colors duration-300" size={56} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* 떠다니는 아이콘들 */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <Star size={12} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-bounce animation-delay-2000">
                <Zap size={12} className="text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce animation-delay-4000">
                <Rocket size={12} className="text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide animate-slide-up">
              안녕하세요, <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                구경선
              </span>입니다
            </h1>

            <div className="flex justify-center items-center space-x-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                <Cloud className="text-blue-400" size={20} />
                <span className="text-sm md:text-lg text-blue-300">Cloud</span>
              </div>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
                <Database className="text-purple-400" size={20} />
                <span className="text-sm md:text-lg text-purple-300">Data</span>
              </div>
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 px-4 py-2 rounded-full border border-cyan-500/30">
                <Code className="text-cyan-400" size={20} />
                <span className="text-sm md:text-lg text-cyan-300">AI</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s" }}>
              충북대학교 지구환경과학 & 소프트웨어 복수전공
              <br />
              <span className="text-white font-semibold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  {words[currentWord]}
                </span> 전문성을 바탕으로 DX 혁신을 이끌어갑니다
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.9s" }}>
              <a
                href="mailto:koo0685@naver.com"
                className="group flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 border border-blue-400/30"
              >
                <Mail size={20} className="mr-3 group-hover:animate-bounce" />
                이메일 보내기
              </a>
              <a
                href="https://github.com/kookyungseon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-600 rounded-2xl shadow-xl hover:shadow-2xl hover:from-purple-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 border border-purple-400/30"
              >
                <Github size={20} className="mr-3 group-hover:animate-bounce" />
                깃허브
              </a>
            </div>
          </div>

          {/* 스크롤 인디케이터 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="text-blue-400" size={24} />
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;
