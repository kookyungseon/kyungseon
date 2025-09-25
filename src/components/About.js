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
              주어진 환경과 제약에 굴하지 않고 창의적 해결책을 찾아내는 것이 저의 강점입니다. 
              팀 프로젝트에서 갈등이 생겼을 때 적극적으로 의견을 조율하고 명확한 역할 분배를 통해 
              성공으로 이끈 경험이 있습니다. 작은 오류 하나가 고객 불편으로 이어질 수 있다는 
              책임감으로 모든 케이스를 철저히 검증하며, 보안과 성능, 안정성을 균형 있게 고려하는 
              시스템 설계를 추구합니다.
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
            <div className="text-center p-6 bg-gradient-to-br from-[#3182CE]/10 to-[#2B6CB0]/10 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3182CE] to-[#2B6CB0] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#2D3748] mb-2">학술적 성과</h3>
              <p className="text-[#4A5568] text-sm">충북대학교 지구환경과학 & 소프트웨어 복수전공, 클라우드 전문 교육 과정 이수</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[#38A169]/10 to-[#2F855A]/10 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[#38A169] to-[#2F855A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#2D3748] mb-2">수상 경력</h3>
              <p className="text-[#4A5568] text-sm">2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상, 2024년 충북 오픈소스 컨트리뷰션 최우수상 등</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-[#D53F8C]/10 to-[#B83280]/10 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D53F8C] to-[#B83280] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#2D3748] mb-2">차별화된 역량</h3>
              <p className="text-[#4A5568] text-sm">신중한 검증과 안정적인 아키텍처 설계를 통해 보안·성능·안정성을 균형 있게 고려하는 운영 방식</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
