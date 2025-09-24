import React, { useState, useEffect } from "react";
import { Github, Mail } from "lucide-react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 이름 등장 애니메이션 */}
      {!showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider animate-fade-in">
            Koo kyungseon
          </h1>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      {showContent && (
        <div className="relative text-center px-6 md:px-12 max-w-5xl w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide mb-8 animate-slide-up">
            안녕하세요, <span className="text-gradient">구경선</span>입니다.
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-12 animate-fade-up">
            충북대학교 지구환경과학 & 소프트웨어 복수전공 <br /> 
            클라우드·AI·데이터 전문성을 바탕으로 DX 혁신을 이끌어갑니다.
          </p>
          <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="mailto:koo0685@naver.com"
              className="flex items-center px-8 py-3 text-lg font-medium text-white bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-gray-700 transition"
            >
              <Mail size={20} className="mr-3" /> 이메일 보내기
            </a>
            <a
              href="https://github.com/kookyungseon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
            >
              <Github size={20} className="mr-3" /> 깃허브
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;
