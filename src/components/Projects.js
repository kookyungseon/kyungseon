import React, { useState } from "react";
import { Github, ArrowRight, Calendar, User, Wrench, ChevronDown, ChevronUp } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
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
              className="p-2 bg-[#3182CE]/20 hover:bg-[#3182CE]/30 rounded-lg transition-all duration-300 hover:scale-110"
              title="GitHub Repository"
            >
              <Github size={18} className="text-[#2D3748]" />
            </a>
          </div>
        </div>

        {/* 설명 */}
        <div className="mb-4">
          <p className="text-[#4A5568] leading-relaxed text-sm">
            {isExpanded ? project.description : `${project.description.substring(0, 150)}...`}
          </p>
          {project.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 flex items-center text-[#9ECAD6] hover:text-[#748DAE] transition-colors text-xs font-medium"
            >
              {isExpanded ? (
                <>
                  <span>간략히 보기</span>
                  <ChevronUp size={14} className="ml-1" />
                </>
              ) : (
                <>
                  <span>자세히 보기</span>
                  <ChevronDown size={14} className="ml-1" />
                </>
              )}
            </button>
          )}
        </div>

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
      category: "AI/ML 프로젝트",
      description: "텍스트, 이미지, 영상, PDF 등 다양한 데이터 타입을 통합 분석하는 차세대 AI 시스템을 개발했습니다. OpenAI GPT, YOLOv8 객체 인식, BLIP 이미지 캡셔닝 등 여러 AI 모델을 Django 백엔드에서 오케스트레이션하여 구현했습니다. 비동기 큐 시스템과 타임아웃, 풀백 로직을 설계하여 모델 지연과 오류를 효과적으로 처리했습니다. 업로드된 문서에서 주요 수치를 자동 추출하고 이미지 속 차트를 인식하여 설명하는 고도화된 기능까지 구현하여 사용자에게 종합적인 정보 분석 서비스를 제공합니다.",
      period: "2024년 2학기",
      role: "Full-Stack Developer & AI Engineer",
      technologies: ["Django", "OpenAI", "YOLOv8", "BLIP", "Python", "PostgreSQL", "Redis", "Celery"],
      techCount: 8,
      github: "https://github.com/CBNU-SW-1-11",
      emoji: "🧠",
      features: ["Featured", "AI/ML", "Multimodal"]
    },
    {
      title: "개인 주차 공간 관리 시스템",
      category: "클라우드, 빅데이터, IoT 프로젝트",
      description: "개인 주차 공간 공유를 통한 주차 공간 부족 문제 해결을 위한 혁신적인 반응형 웹 애플리케이션을 개발했습니다. AWS 클라우드 환경에서 오토스케일링, 로드밸런싱, RDS 다중 가용성을 적용하여 높은 확장성과 안정성을 확보했습니다. 마이크로서비스 아키텍처(MSA)를 도입하여 서비스 간 독립성을 보장하고, AWS Lambda와 AI 모델을 연동하여 자동화된 주차 공간 매칭 기능을 구현했습니다. 실시간 데이터 처리와 예측 분석을 통해 사용자에게 최적의 주차 공간을 추천하는 클라우드 네이티브 시스템으로 완성했습니다.",
      period: "Aug 2022 – Feb 2023 (6개월)",
      role: "Cloud & Backend Developer",
      technologies: ["AWS", "Lambda", "RDS", "EC2", "S3", "MSA", "Python", "Django"],
      techCount: 8,
      github: "https://github.com/kookyungseon/cloudproject_TayoTayo",
      emoji: "🅿️",
      features: ["Featured", "Cloud", "Backend"]
    },
    {
      title: "여행지 추천 시스템",
      category: "오픈소스 개발 프로젝트",
      description: "지역별 여행지 및 맛집 추천을 위한 사용자 친화적인 웹 애플리케이션을 개발했습니다. React 기반의 현대적인 프론트엔드 아키텍처를 구축하여 반응형 UI/UX를 구현했습니다. 사용자의 선호도, 예산, 여행 기간 등 다양한 조건을 고려한 맞춤형 추천 알고리즘을 개발했습니다. 외부 API를 활용하여 실시간 여행 정보와 맛집 데이터를 통합하고, 사용자 리뷰와 평점 시스템을 통해 신뢰할 수 있는 추천 서비스를 제공합니다. 오픈소스 개발 방법론을 적용하여 협업과 코드 품질 관리에 중점을 두었습니다.",
      period: "3학년 2학기",
      role: "Front-end (React)",
      technologies: ["React", "Open Source", "JavaScript", "CSS", "API"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Travel-Destination-Recommendation-System",
      emoji: "🗺️",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "환경 인식 개선 (수질 관리)",
      category: "오픈소스 기초 프로젝트",
      description: "환경 보호 의식 향상과 수질 관리에 대한 인식 개선을 위한 종합적인 모바일 애플리케이션을 개발했습니다. 친환경 세제 인증 시스템을 통해 사용자가 사용하는 세제의 환경 친화성을 평가하고 인증서를 발급합니다. 물 관련 퀴즈 기능을 통해 환경 지식을 재미있게 학습할 수 있도록 했습니다. 오염된 우수관 신고 기능을 통해 시민들이 직접 환경 문제를 신고하고 관리할 수 있는 플랫폼을 제공합니다. Django 백엔드와 Flutter 모바일 앱을 연동하여 실시간 데이터 동기화와 사용자 경험을 최적화했습니다.",
      period: "4학년 1학기",
      role: "Django + DB Management / API 활용 / Front-end (Flutter)",
      technologies: ["Django", "Flutter", "API", "Database", "Mobile"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Environmental-Awareness-Improvement-Water-Quality",
      emoji: "🌊",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "원격의료 및 응급실 매칭 AI",
      category: "오픈소스 전문 프로젝트",
      description: "응급실 문제 해결을 위한 AI 챗봇 기반 원격의료 및 응급실 추천 안드로이드 애플리케이션을 개발했습니다. 사용자가 입력한 증상을 자연어 처리 기술로 분석하여 적절한 의료 서비스를 추천하는 AI 시스템을 구축했습니다. XML 기반의 안드로이드 UI를 설계하여 직관적이고 접근성 높은 사용자 인터페이스를 구현했습니다. 응급실 대기 시간, 거리, 전문과목 등을 종합적으로 고려한 매칭 알고리즘을 개발하여 사용자에게 최적의 의료 서비스를 제공합니다. 헬스케어 분야의 디지털 전환을 위한 혁신적인 솔루션으로 기여했습니다.",
      period: "4학년 1학기",
      role: "Front-end (XML)",
      technologies: ["AI", "XML", "Android", "Chatbot", "Healthcare"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Telemedicine-and-Emergency-Room-Matching-AI",
      emoji: "🏥",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "알약 인식 및 관리 앱",
      category: "AI/ML 프로젝트",
      description: "사진 업로드 및 이미지 인식을 통한 알약 정보 및 복약 관리 앱을 개발하여 의료 서비스 혁신에 기여했습니다. CNN(Convolutional Neural Network) 모델을 직접 설계하고 훈련시켜 알약의 모양, 색상, 문양을 정확하게 분석하는 AI 시스템을 구축했습니다. Django 백엔드에서 약물 데이터베이스와 연동하여 인식된 알약의 정확한 정보를 제공합니다. 복약 스케줄 관리, 알림 기능, 부작용 정보 제공 등 종합적인 의료 관리 기능을 포함했습니다. 특히 시각 장애인을 위한 음성 안내 기능까지 구현하여 접근성을 높였습니다.",
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
      title: "스마트 창문 IoT 환기 시스템",
      category: "IoT 환기 시스템",
      description: "IoT 센서를 활용한 공기질, 온도, 습도 기반 자동 창문 개폐 시스템을 개발하여 스마트 홈 솔루션을 구현했습니다. Raspberry Pi를 기반으로 한 하드웨어 시스템을 구축하고, 다양한 환경 센서를 통해 실시간 데이터를 수집합니다. 공공데이터 포털 API를 활용하여 외부 환경 정보와 연동하여 더욱 정확한 환경 분석을 수행합니다. Python 기반의 백엔드 API를 개발하여 센서 데이터를 처리하고 분석하며, 최적의 실내 환경을 유지하기 위한 자동 제어 로직을 구현했습니다. 사용자에게 실시간 모니터링과 원격 제어 기능을 제공하는 웹 인터페이스까지 완성했습니다.",
      period: "4학년 3학기",
      role: "Backend API 개발 / 공공데이터 포털 API 연결 / Raspberry Pi 통신",
      technologies: ["IoT", "Raspberry Pi", "API", "Python", "Hardware"],
      techCount: 5,
      github: "https://github.com/kookyungseon/Smart-Window-Project-IoT-Ventilation-System",
      emoji: "🪟",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "마피아 게임 (C언어)",
      category: "게임 개발 프로젝트",
      description: "C언어로 구현한 콘솔 기반 마피아 게임을 개발하여 멀티플레이어 게임 서버 프로그래밍 기술을 습득했습니다. 복잡한 게임 로직과 상태 관리를 구현하여 마피아, 시민, 경찰 등 다양한 역할의 상호작용을 처리하는 시스템을 구축했습니다. 멀티플레이어 환경에서 플레이어 간 실시간 통신과 게임 상태 동기화를 위한 서버 프로그래밍 기법을 적용했습니다. 콘솔 기반의 직관적인 사용자 인터페이스를 설계하여 게임 진행 상황을 명확하게 표시합니다. 게임 규칙 엔진과 이벤트 처리 시스템을 구현하여 안정적이고 재미있는 게임 경험을 제공하는 서버를 완성했습니다.",
      period: "4학년 2학기",
      role: "Server Programming & Game Logic Developer",
      technologies: ["C", "Server Programming", "Game Logic", "Multiplayer", "Console UI"],
      techCount: 5,
      github: "https://github.com/kookyungseon/server_program",
      emoji: "🎮",
      features: ["Featured", "Game Development"]
    },
    {
      title: "컴파일러 구현",
      category: "시스템 프로그래밍 프로젝트",
      description: "충북대 컴파일러 최종과제로 완전한 컴파일러를 처음부터 구현하여 시스템 프로그래밍의 핵심 원리를 깊이 이해했습니다. 사칙연산(+, -, *, /) 및 제곱/세제곱 기능을 지원하는 수식 계산 컴파일러를 개발했습니다. Lex를 활용한 어휘 분석기와 Yacc를 활용한 구문 분석기를 구현하여 입력된 수식을 토큰화하고 구문 트리로 변환합니다. C언어 기반의 코드 생성기를 개발하여 중간 표현을 실제 실행 가능한 코드로 변환하는 과정을 구현했습니다. Makefile과 M4 매크로를 활용한 빌드 시스템을 구축하여 컴파일러의 전체 구조를 체계적으로 관리하는 프로젝트로 완성했습니다.",
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