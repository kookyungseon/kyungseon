import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

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
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D3748] mb-4">Education</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto font-medium">
            지구환경과학과 소프트웨어학과 복수전공 및 클라우드 전문 교육 과정
          </p>
        </div>

        {/* 타임라인 스타일 */}
        <div className="relative">
          {/* 중앙 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3182CE] to-[#2B6CB0] rounded-full"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* 왼쪽/오른쪽 콘텐츠 */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-gradient-to-br from-[#3182CE] to-[#2B6CB0] rounded-lg mr-4 shadow-lg">
                            <GraduationCap className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#2D3748]">{edu.school}</h3>
                            <span className="text-sm text-[#4A5568] font-semibold">{edu.logo}</span>
                          </div>
                        </div>

                    <div className="space-y-4">
                      {edu.departments.map((dept, deptIndex) => (
                        <div key={deptIndex} className="border-l-4 border-[#3182CE] pl-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-[#2D3748]">{dept.name}</h4>
                            <div className="flex items-center space-x-2">
                              <Calendar className="text-[#3182CE]" size={14} />
                              <span className="text-[#3182CE] text-sm font-medium">{dept.period}</span>
                            </div>
                          </div>
                          
                          <div className="mb-2">
                            <span className="px-3 py-1 bg-[#3182CE]/20 text-[#2D3748] rounded-full text-sm font-semibold">
                              {dept.status}
                            </span>
                          </div>

                          <ul className="space-y-1">
                            {dept.details.map((detail, detailIndex) => (
                              <li 
                                key={detailIndex} 
                                className="text-[#4A5568] flex items-start gap-2 text-sm"
                              >
                                <span className="text-[#3182CE] mt-1 font-bold">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                      {/* 중앙 노드 */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-6 h-6 bg-[#3182CE] rounded-full border-4 border-white shadow-lg"></div>
                      </div>

                {/* 빈 공간 */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;