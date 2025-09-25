import React, { useState } from "react";
import { Github, ExternalLink, ArrowRight, Calendar, User, Wrench } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 다양한 카드 스타일을 위한 클래스
  const cardStyles = [
    'bg-gradient-to-br from-white to-gray-50', // 기본
    'bg-gradient-to-br from-[#9ECAD6]/5 to-white', // 연한 블루
    'bg-gradient-to-br from-white to-[#748DAE]/5', // 연한 진한 블루
    'bg-gradient-to-br from-[#F5CBCB]/10 to-white', // 연한 핑크
  ];
  
  const borderStyles = [
    'border-0', // 기본
    'border-l-4 border-[#9ECAD6]', // 왼쪽 보더
    'border-t-4 border-[#748DAE]', // 위쪽 보더
    'border-2 border-[#9ECAD6]/30', // 전체 보더
  ];

  return (
    <div
      className={`group relative ${cardStyles[index % cardStyles.length]} ${borderStyles[index % borderStyles.length]} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
        isHovered ? 'scale-[1.02] -translate-y-1' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 메인 콘텐츠 */}
      <div className="relative z-10 p-8">
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#9ECAD6]/20 rounded-lg mr-4">
              <span className="text-2xl">{project.emoji}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#748DAE] mb-1 leading-tight">{project.title}</h3>
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#9ECAD6]/20 text-[#748DAE]">
                  {project.category}
                </span>
                {project.award && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#9ECAD6]/20 text-[#748DAE] border border-[#9ECAD6]/30">
                    🏆 {project.award}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#9ECAD6]/20 hover:bg-[#9ECAD6]/30 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={18} className="text-[#748DAE]" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#9ECAD6]/20 hover:bg-[#9ECAD6]/30 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <ExternalLink size={18} className="text-[#748DAE]" />
              </a>
            )}
          </div>
        </div>

        {/* 설명 */}
        <p className="text-[#4A5568] mb-4 leading-relaxed text-sm">{project.description}</p>

        {/* 메타 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-3 bg-[#9ECAD6]/10 rounded-xl">
          <div className="flex items-center space-x-2">
            <Calendar className="text-[#9ECAD6]" size={14} />
            <span className="text-xs text-[#748DAE] font-medium">{project.period}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="text-[#9ECAD6]" size={14} />
            <span className="text-xs text-[#748DAE] font-medium">{project.role}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wrench className="text-[#9ECAD6]" size={14} />
            <span className="text-xs text-[#748DAE] font-medium">{project.techCount}개 기술</span>
          </div>
      </div>

        {/* 기술 스택 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#748DAE] mb-2 flex items-center">
            <span className="mr-2">🛠️</span>
            기술 스택
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 rounded-full text-xs font-medium bg-[#9ECAD6]/20 text-[#748DAE] hover:bg-[#9ECAD6]/30 transition-colors cursor-default"
              >
            {tech}
          </span>
        ))}
      </div>
        </div>

        {/* 링크 */}
        <div className="flex items-center justify-between pt-3 border-t border-[#9ECAD6]/20">
      <a
            href={project.github}
        target="_blank"
        rel="noopener noreferrer"
            className="inline-flex items-center text-[#9ECAD6] hover:text-[#748DAE] transition-colors font-medium group text-sm"
          >
            <span>Repository 보기</span>
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          {project.features && (
            <div className="flex space-x-1">
              {project.features.map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="px-2 py-1 rounded-full text-xs font-medium bg-[#9ECAD6]/20 text-[#748DAE]"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI 기반 답변 최적화 플랫폼",
      category: "AI Platform Project",
      description: "사용자의 질문에 대해 최적의 답변을 생성하고 제공하는 AI 기반 플랫폼. 자연어 처리 기술을 활용하여 질문을 분석하고, 다양한 AI 모델을 통합하여 정확하고 유용한 답변을 생성. 사용자 피드백을 학습하여 지속적으로 답변 품질을 개선하는 지능형 시스템.",
      period: "2025년 1학기",
      role: "Full-Stack Developer & AI Engineer",
      technologies: ["Python", "React", "FastAPI", "OpenAI GPT", "NLP", "Machine Learning", "PostgreSQL", "Docker"],
      techCount: 8,
      github: "https://github.com/CBNU-SW-1-11",
      emoji: "🤖",
      features: ["Featured", "AI Platform"]
    },
    {
      title: "Designated Parking Management System",
      category: "Cloud, Big Data, IoT Project",
      description: "개인 주차 공간 공유를 통한 주차 공간 부족 문제 해결을 위한 반응형 웹 애플리케이션",
      period: "Aug 2022 – Feb 2023 (6개월)",
      role: "Cloud / Front-end (HTML, CSS)",
      technologies: ["MSA", "Cloud Services", "HTML", "CSS"],
      techCount: 4,
      github: "https://github.com/kookyungseon/cloudproject_TayoTayo",
      emoji: "🅿️",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Travel Destination Recommendation System",
      category: "Open Source Development Project",
      description: "지역별 여행지 및 맛집 추천 웹 애플리케이션",
      period: "3학년 2학기",
      role: "Front-end (React)",
      technologies: ["React", "Open Source", "JavaScript", "CSS", "API"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Travel-Destination-Recommendation-System",
      emoji: "🗺️",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Environmental Awareness Improvement (Water Quality)",
      category: "Open Source Basic Project",
      description: "친환경 세제 인증, 물 관련 퀴즈, 오염된 우수관 신고 기능 제공",
      period: "4학년 1학기",
      role: "Django + DB Management / API 활용 / Front-end (Flutter)",
      technologies: ["Django", "Flutter", "API", "Database", "Mobile"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Environmental-Awareness-Improvement-Water-Quality",
      emoji: "🌊",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Telemedicine and Emergency Room Matching AI",
      category: "Open Source Professional Project",
      description: "응급실 문제 해결을 위한 AI 챗봇 기반 원격의료 및 응급실 추천 앱",
      period: "4학년 1학기",
      role: "Front-end (XML)",
      technologies: ["AI", "XML", "Android", "Chatbot", "Healthcare"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Telemedicine-and-Emergency-Room-Matching-AI",
      emoji: "🏥",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Pill Recognition and Management App",
      category: "AI/ML Project",
      description: "사진 업로드 및 이미지 인식을 통한 알약 정보 및 복약 관리 앱",
      period: "Aug 2024 – Oct 2024 (3개월)",
      role: "Django + DB Management / 알약 인식 모델 개발",
      technologies: ["Django", "AI/ML", "CNN", "Computer Vision", "Python"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Pill-Recognition-and-Management-App",
      emoji: "💊",
      award: "2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Smart Window Project IoT Ventilation System",
      category: "IoT Ventilation System",
      description: "IoT 센서를 활용한 공기질, 온도, 습도 기반 자동 창문 개폐 시스템",
      period: "4학년 3학기",
      role: "Backend API 개발 / 공공데이터 포털 API 연결 / Raspberry Pi 통신",
      technologies: ["IoT", "Raspberry Pi", "API", "Python", "Hardware"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Smart-Window-Project-IoT-Ventilation-System",
      emoji: "🪟",
      features: ["Featured", "Full Stack"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2D3748] mb-4">🚀 Featured Projects</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto font-medium">
            클라우드, AI, 데이터 분석을 활용한 다양한 프로젝트와 최신 AI 플랫폼을 소개합니다
          </p>
        </div>

        {/* 프로젝트 그리드 - Masonry 스타일 */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="break-inside-avoid">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;