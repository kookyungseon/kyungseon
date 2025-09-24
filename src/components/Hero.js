import React, { useState, useEffect } from "react";
import { Github, Mail, MousePointer } from "lucide-react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [showClickHint, setShowClickHint] = useState(false);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showContent) {
      const timeout = setTimeout(() => setShowClickHint(true), 3000);
      return () => clearTimeout(timeout);
    }
  }, [showContent]);

  if (showGame) {
    const GamePortfolio = React.lazy(() => import('./GamePortfolio'));
    return (
      <React.Suspense fallback={
        <div className="w-full h-screen bg-black flex items-center justify-center">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      }>
        <GamePortfolio />
      </React.Suspense>
    );
  }

  return (
    <header 
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={() => setShowGame(true)}
    >
      {/* 미니멀 배경 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      </div>

      {/* 이름 등장 애니메이션 */}
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light tracking-wider animate-fade-in text-white">
              Kookyungseon
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      {showContent && (
        <div className="relative text-center px-6 md:px-12 max-w-4xl w-full z-10">
          {/* 타이틀 */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-8 text-white">
              안녕하세요, <br />
              <span className="font-normal text-gray-300">구경선</span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Full-Stack Developer
            </p>
          </div>

          {/* 간단한 소개 */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              클라우드, AI, 데이터 분석을 활용한<br />
              다양한 프로젝트 경험을 가지고 있습니다
            </p>
          </div>

          {/* 클릭 힌트 */}
          {showClickHint && (
            <div className="flex items-center justify-center space-x-3 text-gray-400 animate-pulse">
              <MousePointer size={20} />
              <span className="text-lg font-light">클릭해서 포트폴리오 탐험하기</span>
            </div>
          )}
        </div>
      )}

      {/* 소셜 링크 - 우측 하단 */}
      <div className="absolute bottom-8 right-8 flex space-x-3">
        <a
          href="mailto:koo0685@naver.com"
          className="p-3 text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/kookyungseon"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </header>
  );
};

export default Hero;