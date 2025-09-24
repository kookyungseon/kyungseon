import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: "충북대학교",
      logo: "CBNU",
      departments: [
        {
          name: "지구환경과학과",
          period: "2020 ~ 현재",
          details: [
            "2020년 지구환경과학과 입학",
            "지구과학 및 지질학 전공",
            "지구물리학 및 지질구조론 학습",
          ]
        },
        {
          name: "소프트웨어학과",
          period: "2023 ~ 현재",
          details: [
            "2023년 소프트웨어학과 복수전공 승인",
            "알고리즘 및 자료구조 이론과 실습",
            "웹/앱 개발 및 서버 프로그래밍 학습"
          ]
        }
      ]
    },
    {
      school: "멀티캠퍼스",
      logo: "Multicampus",
      departments: [
        {
          name: "클라우드 융복합 과정",
          period: "2022",
          details: [
            "MSA 기반 클라우드 서비스 개발",
            "AWS, Docker, Kubernetes 실습",
            "프론트엔드/백엔드 개발 실무 프로젝트 수행"
          ]
        }
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="text-gray-300">학력사항</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            지구환경과학과 소프트웨어학과 복수전공 및 클라우드 전문 교육 과정
          </p>
          <div className="flex justify-center mt-8">
            <BookOpen className="text-white animate-spin" size={32} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 rounded-3xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group-hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-6 text-white">{edu.school}</h3>
              <div className="space-y-8">
                {edu.departments.map((dept, deptIndex) => (
                  <div key={deptIndex} className="border-l-4 border-gray-600 pl-4">
                    <h4 className="text-xl font-semibold text-gray-300 mb-2">{dept.name}</h4>
                    <p className="text-gray-400 mt-1">{dept.period}</p>
                    <ul className="mt-4 space-y-2">
                      {dept.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="text-gray-300 flex items-center gap-2 before:content-['•'] before:text-gray-500"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
