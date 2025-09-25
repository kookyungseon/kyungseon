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
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-12 text-center">
          {/* 프로필 이미지 */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[#96A78D] to-[#B6CEB4] rounded-full flex items-center justify-center shadow-lg">
              <Code className="text-white" size={48} />
            </div>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            안녕하세요, 구경선입니다
          </h1>
          
          {/* 서브타이틀 */}
          <div className="text-xl text-[#96A78D] font-medium mb-8">
            {words[currentWord]}
          </div>

          {/* 설명 */}
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            충북대학교 지구환경과학 & 소프트웨어 복수전공
          </p>

          {/* 스킬 태그 */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="px-4 py-2 bg-[#96A78D]/10 text-[#96A78D] rounded-full text-sm font-medium">
              Cloud
            </span>
            <span className="px-4 py-2 bg-[#96A78D]/10 text-[#96A78D] rounded-full text-sm font-medium">
              Data
            </span>
            <span className="px-4 py-2 bg-[#96A78D]/10 text-[#96A78D] rounded-full text-sm font-medium">
              AI
            </span>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:koo0685@naver.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#96A78D] text-white rounded-lg hover:bg-[#96A78D]/90 transition-colors font-medium"
            >
              <Mail size={20} className="mr-2" />
              이메일 보내기
            </a>
            <a
              href="https://github.com/kookyungseon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-[#96A78D] text-[#96A78D] rounded-lg hover:bg-[#96A78D] hover:text-white transition-colors font-medium"
            >
              <Github size={20} className="mr-2" />
              깃허브
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;