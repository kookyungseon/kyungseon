import React from 'react';
import { User, Award, Briefcase, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D3748] mb-4">About Me</h2>
          <p className="text-xl text-[#4A5568] font-semibold">AI Engineer & Data Scientist</p>
        </div>

        {/* 중앙 정렬된 단일 컬럼 레이아웃 */}
        <div className="max-w-4xl mx-auto">
          {/* 메인 설명 */}
          <div className="text-center mb-12">
            <p className="text-[#2D3748] text-xl leading-relaxed mb-8">
              데이터 분석과 인공지능 기술에 대한 깊은 관심을 바탕으로, 다양한 프로젝트를 통해 실무 경험을 쌓아왔습니다. 
              특히 컴퓨터 비전, 자연어 처리, 시계열 분석 분야에서 프로젝트를 수행하며 AI 기술의 실용적 적용에 집중하고 있습니다.
            </p>
          </div>

          {/* 통계 카드들 - 원형 배치 */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3182CE] to-[#2B6CB0] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-2xl font-bold text-white">7+</span>
                </div>
                <div className="text-[#2D3748] font-semibold">프로젝트</div>
              </div>
              <div className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38A169] to-[#2F855A] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="text-[#2D3748] font-semibold">수상 경력</div>
              </div>
              <div className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D53F8C] to-[#B83280] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div className="text-[#2D3748] font-semibold">자격증</div>
              </div>
              <div className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#805AD5] to-[#6B46C1] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="text-[#2D3748] font-semibold">인턴십</div>
              </div>
            </div>
          </div>

          {/* 특징들 - 가로 배치 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#9ECAD6]/10 to-[#748DAE]/10 rounded-2xl">
              <div className="w-12 h-12 bg-[#9ECAD6] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#748DAE] mb-2">학술적 성과</h3>
              <p className="text-[#748DAE] text-sm">충북대학교 지구환경과학 & 소프트웨어 복수전공, 클라우드 전문 교육 과정 이수</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[#9ECAD6]/10 to-[#748DAE]/10 rounded-2xl">
              <div className="w-12 h-12 bg-[#9ECAD6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#748DAE] mb-2">수상 경력</h3>
              <p className="text-[#748DAE] text-sm">2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상, 2024년 충북 오픈소스 컨트리뷰션 최우수상 등</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[#9ECAD6]/10 to-[#748DAE]/10 rounded-2xl">
              <div className="w-12 h-12 bg-[#9ECAD6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#748DAE] mb-2">실무 경험</h3>
              <p className="text-[#748DAE] text-sm">Python, React, FastAPI, MySQL 등 다양한 기술 스택을 활용한 프로젝트 수행</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
