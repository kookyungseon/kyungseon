import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, CheckCircle, ArrowRight, Sparkles, Code2, Cloud, Users } from 'lucide-react';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);

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
      technologies: ["PHP", "GnuBoard", "Translation API", "FTP", "MySQL"],
      gradient: "from-cyan-500 to-cyan-600",
      icon: Code2
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
      technologies: ["AWS", "MSA", "Docker", "Kubernetes", "DevOps", "Python", "Java"],
      gradient: "from-slate-600 to-slate-700",
      icon: Cloud
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
      technologies: ["Flutter", "Dart", "REST API", "UI/UX Design"],
      gradient: "from-cyan-500 to-cyan-600",
      icon: Users
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-experience-card]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              경력 & 경험
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            다양한 프로젝트와 교육 과정을 통해 쌓은 실무 경험과 전문성
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30">
              <Sparkles className="text-blue-400 animate-spin" size={20} />
              <span className="text-blue-300 text-sm">Professional Experience</span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
              <Code2 className="text-purple-400" size={20} />
              <span className="text-purple-300 text-sm">Technical Skills</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-experience-card
                data-index={index}
                className={`transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative group">
                  {/* 카드 배경 그라데이션 */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* 메인 카드 */}
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan-500/30">
                    {/* 헤더 */}
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 shadow-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          <IconComponent className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{exp.company}</h3>
                          <p className="text-gray-300 text-lg font-semibold group-hover:text-purple-300 transition-colors duration-300">{exp.position}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                        <Calendar className="text-cyan-400" size={16} />
                        <span className="text-cyan-300 font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">{exp.description}</p>

                    {/* 성과 */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                        <CheckCircle className="text-green-400 mr-3" size={24} />
                        주요 성과
                      </h4>
                      <div className="grid gap-4">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 border border-blue-500/20">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 기술 스택 */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Code2 className="text-purple-400 mr-3" size={24} />
                        사용 기술
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-cyan-500/30 hover:text-white hover:border-purple-400/50 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 호버 효과 */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="text-cyan-400 animate-pulse" size={24} />
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
