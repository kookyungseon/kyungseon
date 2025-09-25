import React, { useState, useEffect, useRef } from "react";
import { Calendar, CheckCircle, Code2, Cloud, Building, MapPin } from "lucide-react";

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
      icon: Code2
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
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#748DAE] mb-4">💼 Work Experience</h2>
          <p className="text-lg text-[#748DAE] max-w-2xl mx-auto">
            다양한 프로젝트와 교육 과정을 통해 쌓은 실무 경험과 전문성
          </p>
        </div>
        {/* 스테핑 스톤 레이아웃 */}
        <div className="relative">
          {/* 중앙 라인 */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9ECAD6] to-[#748DAE] rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`relative flex items-start transform transition-all duration-700 ease-out ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* 왼쪽 노드 */}
                <div className="relative z-10 flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-[#9ECAD6] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <exp.icon className="text-white" size={24} />
                  </div>
                </div>
                
                {/* 오른쪽 콘텐츠 */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#748DAE]">{exp.company}</h3>
                        <p className="text-lg text-[#9ECAD6] font-medium">{exp.position}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-[#9ECAD6] mb-2">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#9ECAD6]">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#748DAE] mb-6 text-lg">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#748DAE] mb-3">주요 성과</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-[#748DAE]">
                            <CheckCircle size={18} className="text-[#9ECAD6] mr-2 flex-shrink-0 mt-1" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-[#748DAE] mb-3">사용 기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-[#9ECAD6]/20 text-[#748DAE] rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;