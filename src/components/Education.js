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
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-[#FFEAEA] to-[#F5CBCB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#748DAE] mb-4">Education</h2>
          <p className="text-lg text-[#748DAE] max-w-2xl mx-auto">
            지구환경과학과 소프트웨어학과 복수전공 및 클라우드 전문 교육 과정
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#9ECAD6] rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#748DAE]">{edu.school}</h3>
                  <span className="text-sm text-[#9ECAD6] font-medium">{edu.logo}</span>
                </div>
              </div>

              <div className="space-y-6">
                {edu.departments.map((dept, deptIndex) => (
                  <div key={deptIndex} className="border-l-4 border-[#9ECAD6] pl-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-[#748DAE]">{dept.name}</h4>
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-[#9ECAD6]" size={14} />
                        <span className="text-[#9ECAD6] text-sm">{dept.period}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-[#9ECAD6]/20 text-[#748DAE] rounded-full text-sm font-medium">
                        {dept.status}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {dept.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="text-[#748DAE] flex items-start gap-2 text-sm"
                        >
                          <span className="text-[#9ECAD6] mt-1">•</span>
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