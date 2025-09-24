import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, CheckCircle, Code2, Cloud, Sparkles, Building, MapPin } from "lucide-react";

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  const experiences = [
    {
      company: "(주)픽셀아이",
      position: "인턴십",
      period: "2024.07 ~ 2024.08",
      location: "인턴십",
      description: "유학 정보 제공 사이트 리뉴얼 참여 및 기능 개선",
      achievements: [
        "그누보드와 FTP를 활용한 사이트 구조 정비",
        "번역 지연 이슈 해결 및 자동 번역 기능 구현",
        "고정 문구에 대한 다국어 번역 처리 개발",
        "사용자 경험 개선을 위한 성능 최적화"
      ],
      technologies: ["PHP", "GnuBoard", "Translation API", "FTP", "MySQL"],
      gradient: "from-green-500 to-emerald-600",
      icon: Building
    },
    {
      company: "멀티캠퍼스",
      position: "융복합 프로젝트형 클라우드 서비스(MSA) 개발 과정",
      period: "2022.08 ~ 2023.02",
      location: "교육 과정",
      description: "빅데이터 플랫폼 구축 교육 과정 이수 및 클라우드 기반 애플리케이션 개발",
      achievements: [
        "총 944시간 이상의 실무 중심 교육 이수",
        "프로젝트 기반 실습 수행 (인터페이스 프로젝트 8h, 클라우드 활용 프로젝트 128h, 융복합 프로젝트 264h)",
        "클라우드 및 MSA 환경 이해도 향상",
        "기획부터 배포까지 전 과정 경험"
      ],
      technologies: ["AWS", "MSA", "Docker", "Kubernetes", "DevOps", "Python", "Java"],
      gradient: "from-blue-500 to-cyan-600",
      icon: Cloud
    },
    {
      company: "고용노동부 미래내일 일경험 지원사업",
      position: "청년주도 프로젝트 참여",
      period: "2025.05 ~ 2025.06",
      location: "정부 지원사업",
      description: "위기 상황 자동 녹음 앱 '안전한 목소리' 개발 참여 및 UI/UX 개선 주도",
      achievements: [
        "UI 반응형 프론트엔드 개발 및 메인화면, 핵심 기능 화면 설계·구현",
        "Flutter REST API 기반 페이지 구현 및 API 연동",
        "사용자 편의성과 상황 대응성을 고려한 UX 개선 주도",
        "팀 협업을 통한 완전한 앱 개발 과정 경험"
      ],
      technologies: ["Flutter", "Dart", "REST API", "UI/UX Design"],
      gradient: "from-purple-500 to-pink-600",
      icon: Briefcase
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        observer.observe(cardRef);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="text-blue-400 mr-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              💼 Work Experience
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            다양한 프로젝트와 교육 과정을 통해 쌓은 실무 경험과 전문성
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`transform transition-all duration-700 ease-out ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative group">
                  {/* 메인 카드 */}
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 md:p-12 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group-hover:border-gray-600">
                    {/* 배경 그라데이션 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                    {/* 헤더 */}
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 relative z-10">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.gradient} shadow-lg`}>
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.company}</h3>
                          <p className="text-gray-300 text-lg font-medium">{exp.position}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <MapPin className="text-gray-400" size={16} />
                            <span className="text-gray-400 text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-700/50 px-4 py-2 rounded-full border border-gray-600">
                        <Calendar className="text-gray-400" size={16} />
                        <span className="text-gray-300 font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">{exp.description}</p>

                    {/* 성과 */}
                    <div className="mb-8 relative z-10">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                        <CheckCircle className="text-green-400 mr-3" size={24} />
                        주요 성과
                      </h4>
                      <div className="grid gap-4">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3 bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 기술 스택 */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Code2 className="text-blue-400 mr-3" size={24} />
                        사용 기술
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-4 py-2 bg-gradient-to-r ${exp.gradient} text-white rounded-full text-sm font-medium hover:opacity-80 transition-opacity cursor-default`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;