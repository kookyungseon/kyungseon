import React from 'react';
import { User, Award, Briefcase, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#748DAE] mb-4">About Me</h2>
          <p className="text-xl text-[#9ECAD6] font-medium">AI Engineer & Data Scientist</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 설명 */}
          <div className="space-y-6">
            <p className="text-[#748DAE] text-lg leading-relaxed">
              데이터 분석과 인공지능 기술에 대한 깊은 관심을 바탕으로, 다양한 프로젝트를 통해 실무 경험을 쌓아왔습니다. 
              특히 컴퓨터 비전, 자연어 처리, 시계열 분석 분야에서 프로젝트를 수행하며 AI 기술의 실용적 적용에 집중하고 있습니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#9ECAD6] rounded-full flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#748DAE]">학술적 성과</h3>
                  <p className="text-[#748DAE]">충북대학교 지구환경과학 & 소프트웨어 복수전공, 클라우드 전문 교육 과정 이수</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#9ECAD6] rounded-full flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#748DAE]">수상 경력</h3>
                  <p className="text-[#748DAE]">2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상, 2024년 충북 오픈소스 컨트리뷰션 최우수상 등</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#9ECAD6] rounded-full flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#748DAE]">실무 경험</h3>
                  <p className="text-[#748DAE]">Python, React, FastAPI, MySQL 등 다양한 기술 스택을 활용한 프로젝트 수행</p>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 통계 */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-[#FFEAEA] to-[#F5CBCB] rounded-2xl">
              <div className="text-4xl font-bold text-[#748DAE] mb-2">7+</div>
              <div className="text-[#748DAE] font-medium">프로젝트</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#FFEAEA] to-[#F5CBCB] rounded-2xl">
              <div className="text-4xl font-bold text-[#748DAE] mb-2">3</div>
              <div className="text-[#748DAE] font-medium">수상 경력</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#FFEAEA] to-[#F5CBCB] rounded-2xl">
              <div className="text-4xl font-bold text-[#748DAE] mb-2">4</div>
              <div className="text-[#748DAE] font-medium">자격증</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#FFEAEA] to-[#F5CBCB] rounded-2xl">
              <div className="text-4xl font-bold text-[#748DAE] mb-2">2</div>
              <div className="text-[#748DAE] font-medium">인턴십</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
