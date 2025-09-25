import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Award, Star, Zap, Code, ArrowRight, Calendar, User, Wrench } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
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
            <div className="p-4 rounded-2xl shadow-lg transition-all duration-300 bg-white/10">
              <span className="text-4xl">{project.emoji}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20">
                  {project.category}
                </span>
                {project.award && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30">
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
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 hover:scale-110"
            >
              <Github size={20} className="text-gray-600" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <ExternalLink size={20} className="text-gray-600" />
              </a>
            )}
          </div>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 mb-6 leading-relaxed text-base">{project.description}</p>

        {/* 메타 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
          <div className="flex items-center space-x-2">
            <Calendar className="text-gray-500" size={16} />
            <span className="text-sm text-gray-600 font-medium">{project.period}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="text-gray-500" size={16} />
            <span className="text-sm text-gray-600 font-medium">{project.role}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wrench className="text-gray-500" size={16} />
            <span className="text-sm text-gray-600 font-medium">{project.techCount}개 기술</span>
          </div>
      </div>

        {/* 기술 스택 */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <span className="mr-2">🛠️</span>
            기술 스택
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${techIndex * 0.1}s` }}
              >
            {tech}
          </span>
        ))}
      </div>
        </div>

        {/* 링크 */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <a
            href={project.github}
        target="_blank"
        rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium group"
          >
            <span>Repository 보기</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {project.features && (
            <div className="flex space-x-2">
              {project.features.map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
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
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      techCount: 4,
      github: "https://github.com/opensource-develop-project-2023/miwu",
      emoji: "🗺️",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Environmental Awareness Improvement (Water Quality)",
      category: "Open Source Basic Project",
      description: "친환경 세제 인증, 물 관련 퀴즈, 오염된 우수관 신고 기능 제공",
      period: "4학년 1학기",
      role: "Django + DB Management / API 활용 / Front-end (Flutter)",
      technologies: ["Django", "Python", "Flutter", "Dart", "SQLite", "API Integration"],
      techCount: 6,
      github: "https://github.com/Eco-guardians/BOGGLE",
      emoji: "🌊",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Telemedicine and Emergency Room Matching",
      category: "AI Open Source Professional Project",
      description: "응급실 문제 해결을 위한 AI 챗봇 기반 원격의료 및 응급실 추천 앱",
      period: "4학년 1학기",
      role: "Front-end (XML)",
      technologies: ["AI Chatbot", "XML", "Android Studio"],
      techCount: 3,
      github: "https://github.com/code-guhaejo/CodeBlack",
      emoji: "🏥",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Pill Recognition and Management App",
      category: "🏆 Excellence Award Winner",
      description: "사진 업로드 및 이미지 인식을 통한 알약 정보 및 복약 관리 앱",
      period: "Aug 2024 – Oct 2024 (3개월)",
      role: "Django + DB Management / 알약 인식 모델 개발",
      technologies: ["Django", "Python", "TensorFlow", "Keras", "OpenCV", "Image Recognition"],
      techCount: 6,
      github: "https://github.com/Algorithmstudy01/ict_ver2",
      emoji: "💊",
      award: "최우수상",
      features: ["Featured", "Full Stack"]
    },
    {
      title: "Smart Window Project",
      category: "IoT Ventilation System",
      description: "IoT 센서를 활용한 공기질, 온도, 습도 기반 자동 창문 개폐 시스템",
      period: "4학년 3학기",
      role: "Backend API 개발 / 공공데이터 포털 API 연결 / Raspberry Pi 통신",
      technologies: ["IoT", "Raspberry Pi", "Python", "Flask", "API Integration"],
      techCount: 5,
      github: "https://github.com/kangeunsong/SOOM",
      emoji: "🪟",
      features: ["Featured", "Full Stack"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            클라우드, AI, 데이터 분석을 활용한 다양한 프로젝트와 최신 AI 플랫폼을 소개합니다
          </p>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;