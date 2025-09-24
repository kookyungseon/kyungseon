import React from 'react';
import { BookOpen, GraduationCap, Award, Calendar } from 'lucide-react';

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
    <section id="education" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="text-blue-400 mr-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              🎓 Education
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            지구환경과학과 소프트웨어학과 복수전공 및 클라우드 전문 교육 과정
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-6">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{edu.school}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                      {edu.logo}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {edu.departments.map((dept, deptIndex) => (
                  <div key={deptIndex} className="bg-gray-900/50 rounded-xl p-6 border border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{dept.name}</h4>
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-gray-400" size={16} />
                        <span className="text-gray-400 text-sm">{dept.period}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        dept.status === '재학중' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        dept.status === '복수전공' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                        {dept.status}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {dept.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="text-gray-300 flex items-start gap-2 text-sm"
                        >
                          <span className="text-blue-400 mt-1">•</span>
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