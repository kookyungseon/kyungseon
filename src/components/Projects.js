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
      title: "멀티모달 질의응답 에이전트",
      category: "AI/ML Project",
      description: "텍스트, 이미지, 영상, PDF 데이터를 통합 분석하는 멀티모달 AI 시스템. OpenAI, YOLOv8, BLIP 등 여러 AI 모델을 Django 기반 백엔드 위에 오케스트레이션하여 구현. 비동기 큐, 타임아웃, 풀백 로직을 설계하여 모델 지연과 오류를 해결하고, 업로드된 문서에서 주요 수치를 추출하고 이미지 속 차트를 인식하여 설명하는 기능까지 구현.",
      period: "2024년 2학기",
      role: "Full-Stack Developer & AI Engineer",
      technologies: ["Django", "OpenAI", "YOLOv8", "BLIP", "Python", "PostgreSQL", "Redis", "Celery"],
      techCount: 8,
      github: "https://github.com/CBNU-SW-1-11",
      emoji: "🧠",
      features: ["Featured", "AI/ML", "Multimodal"]
    },
    {
      title: "Designated Parking Management System",
      category: "Cloud, Big Data, IoT Project",
      description: "개인 주차 공간 공유를 통한 주차 공간 부족 문제 해결을 위한 반응형 웹 애플리케이션. AWS 클라우드 환경에서 오토스케일링, 로드밸런싱, RDS 다중 가용성을 적용하여 확장성과 안정성을 확보하고, Lambda와 AI 모델을 연동하여 자동화 기능을 구현한 클라우드 네이티브 시스템.",
      period: "Aug 2022 – Feb 2023 (6개월)",
      role: "Cloud & Backend Developer",
      technologies: ["AWS", "Lambda", "RDS", "EC2", "S3", "MSA", "Python", "Django"],
      techCount: 8,
      github: "https://github.com/kookyungseon/cloudproject_TayoTayo",
      emoji: "🅿️",
      features: ["Featured", "Cloud", "Backend"]
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
    },
    {
      title: "Mafia Game (C Language)",
      category: "Game Development Project",
      description: "C언어로 구현한 콘솔 기반 마피아 게임. 멀티플레이어 게임 로직과 사용자 인터페이스를 구현하고, 게임 상태 관리와 플레이어 간 상호작용을 처리하는 시스템을 개발. 서버 프로그래밍 기법을 활용하여 안정적인 게임 서버를 구축.",
      period: "4학년 2학기",
      role: "Server Programming & Game Logic Developer",
      technologies: ["C", "Server Programming", "Game Logic", "Multiplayer", "Console UI"],
      techCount: 5,
      github: "https://github.com/kookyungseon/server_program",
      emoji: "🎮",
      features: ["Featured", "Game Development"]
    },
    {
      title: "Compiler Implementation",
      category: "System Programming Project",
      description: "충북대 컴파일러 최종과제로 구현한 컴파일러. 사칙연산(+, -, *, /) 및 제곱/세제곱 기능을 지원하는 수식 계산 컴파일러를 개발. Lex/Yacc를 활용한 구문 분석과 C언어 기반 코드 생성 과정을 구현하여 컴파일러의 전체 구조를 이해하고 실습한 프로젝트.",
      period: "4학년 2학기",
      role: "Compiler Developer",
      technologies: ["C", "C++", "Lex", "Yacc", "M4", "Makefile", "Compiler Design"],
      techCount: 7,
      github: "https://github.com/kookyungseon/Compiler",
      emoji: "⚙️",
      features: ["Featured", "System Programming"]
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