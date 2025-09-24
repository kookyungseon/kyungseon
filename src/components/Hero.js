import React, { useState, useEffect } from "react";
import { Github, Mail, ArrowDown, Code, Cloud, Database, Award, Star, Play } from "lucide-react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [showGame, setShowGame] = useState(false);

  const words = ["Full-Stack Developer", "Data Science Enthusiast", "Cloud Engineer", "AI Developer"];

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

  if (showGame) {
    const GamePortfolio = React.lazy(() => import('./GamePortfolio'));
    return (
      <React.Suspense fallback={
        <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
          <div className="text-white text-2xl">Loading 3D Portfolio...</div>
        </div>
      }>
        <GamePortfolio />
      </React.Suspense>
    );
  }

  return (
    <header className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* GitHub 스타일 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* 이름 등장 애니메이션 */}
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider animate-fade-in text-white">
              Kookyungseon
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      {showContent && (
        <div className="relative text-center px-6 md:px-12 max-w-6xl w-full z-10">
          {/* GitHub 스타일 헤더 배너 */}
          <div className="mb-12">
            <div className="w-full h-32 bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-blue-500 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-white text-2xl font-bold">Hello, I'm Kookyungseon!</div>
            </div>
          </div>

          {/* 타이핑 효과 */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              <span className="text-blue-400">Hello,</span> I'm{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Kookyungseon
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-4">
              <span className="text-blue-400">Welcome to my Portfolio!</span>
            </div>
            <div className="text-xl md:text-2xl text-gray-400 mb-8">
              <span className="text-green-400 font-semibold">
                {words[currentWord]}
              </span>
            </div>
          </div>

          {/* 소개 배지들 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
              <Code className="text-blue-400" size={20} />
              <span className="text-white font-medium">Full-Stack Developer</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
              <Database className="text-green-400" size={20} />
              <span className="text-white font-medium">Data Science Enthusiast</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
              <Cloud className="text-purple-400" size={20} />
              <span className="text-white font-medium">Cloud Engineer</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
              <Award className="text-yellow-400" size={20} />
              <span className="text-white font-medium">Award Winner</span>
            </div>
          </div>

          {/* 3D 포트폴리오 버튼 */}
          <div className="mb-12">
            <button
              onClick={() => setShowGame(true)}
              className="group flex items-center justify-center mx-auto px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <Play size={20} className="mr-3" />
              🎮 3D 게임형 포트폴리오 탐험하기
            </button>
            <p className="text-gray-400 text-sm mt-2">방향키로 이동하며 프로젝트들을 탐험해보세요!</p>
          </div>

          {/* 소셜 링크 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="mailto:koo0685@naver.com"
              className="group flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} className="mr-3" />
              Email Me
            </a>
            <a
              href="https://github.com/kookyungseon"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} className="mr-3" />
              GitHub
            </a>
          </div>

          {/* 현재 포커스 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
              <Star className="text-yellow-400 mr-2" size={24} />
              Current Focus
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                🌱 Currently Learning: AI & Machine Learning
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                🎯 Focus: Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                📊 Interest: Data Science
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={24} />
      </div>
    </header>
  );
};

export default Hero;