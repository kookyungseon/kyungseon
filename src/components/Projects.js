import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Award, Star, Zap, Code, Eye, ArrowRight, Sparkles } from "lucide-react";
import Project3DCard from "./Project3DCard";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Three.js 3D 배경 */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <Project3DCard project={project} index={index} />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 p-8">
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gray-100 rounded-xl">
              <Code className="text-gray-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="text-yellow-500" size={16} />
                <span className="text-sm text-gray-500">Featured Project</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Github size={20} className="text-gray-600" />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ExternalLink size={20} className="text-gray-600" />
            </a>
          </div>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

        {/* 기술 스택 */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">기술 스택</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* 하단 액션 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Zap className="text-blue-500" size={16} />
              <span>AI/ML</span>
            </div>
            <div className="flex items-center space-x-1">
              <Code className="text-green-500" size={16} />
              <span>Full Stack</span>
            </div>
          </div>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span className="font-medium">자세히 보기</span>
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 호버 효과 */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    </div>
  );
};

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

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

  const projects = [
    {
      title: "AI 기반 차량 예약 확인 시스템",
      description: "AWS 클라우드 환경에서 AI 기반 차량 번호판 인식 및 예약 정보 대조, 문자 알림까지 자동화되는 파이프라인 구축",
      technologies: ["AWS", "Lambda", "RDS", "Route53", "AI/ML", "Python"],
      link: "https://github.com/kookyungseon/AI_Vehicle_System"
    },
    {
      title: "AI-OCR 알약 식별 및 처방전 자동 인식 시스템",
      description: "AI OCR 기술을 활용하여 알약 식별 및 처방전 자동 인식 시스템 개발. SW 개발 부문 최우수상 수상.",
      technologies: ["AI/ML", "OCR", "Python", "PyTorch", "CNN", "FastAPI"],
      link: "https://github.com/kookyungseon/AI-OCR_Pill_System"
    },
    {
      title: "개인 맞춤형 주차 관리 공유 시스템",
      description: "클라우드 기반의 주차 공간 관리 시스템. AWS EC2, S3, RDS, Route53 활용하여 안정성과 확장성 확보.",
      technologies: ["AWS", "EC2", "S3", "RDS", "Route53", "Docker", "Spring Boot"],
      link: "https://github.com/kookyungseon/Smart_Parking_System"
    },
    {
      title: "위기 상황 자동 녹음 앱 '안전한 목소리'",
      description: "Flutter 기반의 위기 상황 자동 녹음 앱. UI 반응형 프론트엔드 개발 및 REST API 연동.",
      technologies: ["Flutter", "Dart", "REST API", "UI/UX Design"],
      link: "https://github.com/kookyungseon/Safe_Voice_App"
    },
    {
      title: "PyTorch 오픈소스 문서 번역 및 품질 개선",
      description: "글로벌 개발자 커뮤니티와 협업하여 PyTorch 오픈소스 문서 번역 및 품질 개선 프로젝트 참여. 최우수상 수상.",
      technologies: ["PyTorch", "Open Source", "Translation", "GitHub", "Community"],
      link: "https://github.com/kookyungseon/PyTorch_Translation"
    },
    {
      title: "LLM 기반 답변 최적화 플랫폼",
      description: "Claude, Gemini, OpenAI API 등 다양한 LLM 모델을 활용한 답변 최적화 플랫폼 개발. 백엔드 담당.",
      technologies: ["LLM", "Claude API", "Gemini API", "OpenAI API", "LangChain", "Python"],
      link: "https://github.com/kookyungseon/LLM_Optimization"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* 미니멀 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gray-200 rounded-full opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-gray-400 mr-3" size={32} />
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              프로젝트
            </h2>
            <Sparkles className="text-gray-400 ml-3" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            클라우드, AI, 데이터 분석을 활용한 다양한 프로젝트 경험
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-500">
              <Star size={20} />
              <span className="text-sm">Featured Projects</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-500">
              <Award size={20} />
              <span className="text-sm">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/kookyungseon"
            className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
            <span className="text-lg font-medium">더 많은 프로젝트 보기</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;