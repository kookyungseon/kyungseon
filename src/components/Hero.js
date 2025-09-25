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
    <header className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center py-20">
      {/* 메인 콘텐츠 */}
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* 메인 카드 */}
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-center">
          {/* 프로필 이미지 */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-[#96A78D] rounded-full flex items-center justify-center">
              <Code className="text-white" size={32} />
            </div>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            구경선
          </h1>
          
          {/* 서브타이틀 */}
          <div className="text-lg text-[#96A78D] font-medium mb-4">
            {words[currentWord]}
          </div>

          {/* 설명 */}
          <p className="text-gray-600 text-base mb-6 max-w-xl mx-auto">
            충북대학교 지구환경과학 & 소프트웨어 복수전공
          </p>

          {/* 스킬 태그 */}
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Cloud
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Data
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              AI
            </span>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:koo0685@naver.com"
              className="inline-flex items-center justify-center px-6 py-2 bg-[#96A78D] text-white rounded-lg hover:bg-[#96A78D]/90 transition-colors text-sm font-medium"
            >
              <Mail size={16} className="mr-2" />
              이메일 보내기
            </a>
            <a
              href="https://github.com/kookyungseon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <Github size={16} className="mr-2" />
              깃허브
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;