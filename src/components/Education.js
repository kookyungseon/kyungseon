import React from 'react';
import { BookOpen, GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: "충북대학교",
      logo: "CBNU",
      departments: [
        {
          name: "지구환경과학과",
          period: "2020 ~ 현재",
          status: "재학중",
          details: [
            "2020년 지구환경과학과 입학",
            "지구과학 및 지질학 전공",
            "지구물리학 및 지질구조론 학습",
          ]
        },
        {
          name: "소프트웨어학과",
          period: "2023 ~ 현재",
          status: "복수전공",
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
          status: "수료",
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
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="text-gray-600 mr-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              🎓 Education
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            지구환경과학과 소프트웨어학과 복수전공 및 클라우드 전문 교육 과정
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gray-100 rounded-xl mr-6">
                  <GraduationCap className="text-gray-600" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{edu.school}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                      {edu.logo}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {edu.departments.map((dept, deptIndex) => (
                  <div key={deptIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{dept.name}</h4>
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-gray-500" size={16} />
                        <span className="text-gray-500 text-sm">{dept.period}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {dept.status}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {dept.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="text-gray-600 flex items-start gap-2 text-sm"
                        >
                          <span className="text-gray-400 mt-1">•</span>
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