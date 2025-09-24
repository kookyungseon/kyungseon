import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "픽셀아이 주식회사",
      position: "소프트웨어 개발 인턴",
      period: "2024.07 ~ 2024.08",
      description: "유학 정보 제공 사이트 리뉴얼 프로젝트에 참여하여 다국어 지원 시스템 개발 및 성능 최적화를 수행했습니다.",
      achievements: [
        "그누보드와 FTP를 활용한 사이트 구조 정비",
        "번역 지연 이슈 해결 및 자동 번역 기능 구현",
        "고정 문구에 대한 다국어 번역 처리 개발",
        "사용자 경험 개선을 위한 성능 최적화"
      ],
      technologies: ["PHP", "GnuBoard", "Translation API", "FTP", "MySQL"]
    },
    {
      company: "멀티캠퍼스",
      position: "융복합 프로젝트형 클라우드 서비스(MSA) 개발 과정",
      period: "2022.08 ~ 2023.02",
      description: "빅데이터 플랫폼 구축 교육과정을 통해 클라우드, MSA, 인프라 기반 애플리케이션 개발 역량을 쌓았습니다.",
      achievements: [
        "총 944시간 이상의 실무 중심 교육 이수",
        "프로젝트 기반 실습 수행 (인터페이스 프로젝트 8h, 클라우드 활용 프로젝트 128h, 융복합 프로젝트 264h)",
        "클라우드 및 MSA 환경 이해도 향상",
        "기획부터 배포까지 전 과정 경험"
      ],
      technologies: ["AWS", "MSA", "Docker", "Kubernetes", "DevOps", "Python", "Java"]
    },
    {
      company: "고용노동부 미래내일 일경험 지원사업",
      position: "청년주도 프로젝트 참여",
      period: "2025.05 ~ 2025.06",
      description: "위기 상황 자동 녹음 앱 '안전한 목소리' 개발에 참여하여 Flutter 기반 프론트엔드 개발을 담당했습니다.",
      achievements: [
        "UI 반응형 프론트엔드 개발 및 메인화면, 핵심 기능 화면 설계·구현",
        "Flutter REST API 기반 페이지 구현 및 API 연동",
        "사용자 편의성과 상황 대응성을 고려한 UX 개선 주도",
        "팀 협업을 통한 완전한 앱 개발 과정 경험"
      ],
      technologies: ["Flutter", "Dart", "REST API", "UI/UX Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 flex items-center gap-4">
          <Briefcase className="text-indigo-600" size={28} />
          경력사항
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:translate-y-1 transform">
              <div className="md:flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{exp.company}</h3>
                  <p className="text-indigo-600 mt-1">{exp.position}</p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Calendar className="text-indigo-600" size={16} />
                  <span className="text-gray-600">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{exp.description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-800">주요 성과:</h4>
                <ul className="space-y-2 text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={16} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">사용 기술:</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-indigo-600 bg-opacity-10 text-indigo-600 text-sm px-4 py-2 rounded-full transition-colors duration-300 hover:bg-indigo-600 hover:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
