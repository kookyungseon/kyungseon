import React from 'react';
import { Award, CheckCircle, Trophy } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "데이터아키텍처 준전문가",
      code: "DAsP",
      description: "Data Architecture Semi-Professional",
      date: "2024.10.25"
    },
    {
      name: "데이터분석 준전문가",
      code: "ADsP",
      description: "Advanced Data Analytics Semi-Professional",
      date: "2024.11.03"
    },
    {
      name: "빅데이터 분석기사",
      code: "BigData Analyst",
      description: "Big Data Analysis Specialist",
      date: "2025.07.11"
    },
    {
      name: "SQL 개발자",
      code: "SQLD",
      description: "SQL Developer",
      date: "2025.09.19"
    },
    {
      name: "토익스피킹",
      code: "TOEIC Speaking",
      description: "TOEIC Speaking Test",
      date: "2025.09.01",
      grade: "IM3"
    }
  ];

  const externalAwards = [
    {
      title: "SW 개발 부문 최우수상 (2위)",
      competition: "2024 충청권 ICT 이노베이션 아이디어 및 SW 개발 공모전",
      organization: "세종테크노파크 원장상",
      date: "2024.09.11"
    }
  ];

  const internalAwards = [
    {
      title: "2024년 충북 오픈소스 컨트리뷰션 최우수상 (1위)",
      competition: "충북 오픈소스 컨트리뷰션",
      organization: "충북대학교 SW중심대학사업단",
      date: "2024.09.09",
    },
    {
      title: "융복합 프로젝트형 클라우드 서비스(MSA) 개발 최우수상",
      competition: "멀티캠퍼스 융복합 프로젝트",
      organization: "멀티캠퍼스",
      date: "2023.02.16",
    }
  ];

  return (
    <section id="certifications" className="bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 flex items-center gap-4">
          <Award className="text-[#4A90E2]" />
          자격증 및 수상내역
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* 자격증 섹션 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">자격증</h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-6">
                  <CheckCircle className="text-[#4A90E2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800">{cert.name}</h4>
                    <p className="text-gray-600">{cert.code} {cert.grade && `- ${cert.grade}`}</p>
                    <p className="text-gray-500 text-sm mt-2">{cert.description}</p>
                    <p className="text-gray-600 text-sm mt-2">취득일: {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 수상내역 섹션 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">수상내역</h3>
            
            {/* 대외 수상 */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold mb-6 text-[#4A90E2]">대외 수상</h4>
              {externalAwards.map((award, index) => (
                <div key={index} className="flex items-start gap-6 mb-8">
                  <Trophy className="text-[#4A90E2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold text-xl text-gray-800">{award.title}</h5>
                    <p className="text-gray-600 mt-2">{award.competition}</p>
                    <p className="text-[#4A90E2] mt-2">{award.organization}</p>
                    <p className="text-gray-500 text-sm mt-2">{award.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 교내 수상 */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-[#4A90E2]">교내 수상</h4>
              {internalAwards.map((award, index) => (
                <div key={index} className="flex items-start gap-6 mb-8">
                  <Award className="text-[#4A90E2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold text-xl text-gray-800">{award.title}</h5>
                    <p className="text-gray-600 mt-2">{award.competition}</p>
                    <p className="text-[#4A90E2] mt-2">{award.organization}</p>
                    <p className="text-gray-500 text-sm mt-2">{award.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
