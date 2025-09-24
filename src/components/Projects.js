import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Award, Star, Zap, Code, ArrowRight, Calendar, User, Wrench } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 메인 콘텐츠 */}
      <div className="relative z-10 p-8">
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-xl bg-gray-100 shadow-lg">
              <span className="text-3xl">{project.emoji}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                  {project.category}
                </span>
                {project.award && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
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
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Github size={20} className="text-gray-600" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ExternalLink size={20} className="text-gray-600" />
              </a>
            )}
          </div>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

        {/* 메타 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="text-gray-500" size={16} />
            <span className="text-sm text-gray-600">{project.period}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="text-gray-500" size={16} />
            <span className="text-sm text-gray-600">{project.role}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wrench className="text-gray-500" size={16} />
            <span className="text-sm text-gray-600">{project.techCount}개 기술</span>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 링크 */}
        <div className="flex items-center justify-between">
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
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
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
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">🚀 Featured Projects</h2>
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