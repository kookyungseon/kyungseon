import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Award, Star, Zap, Code, Eye, ArrowRight, Sparkles, Calendar, User, Wrench } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 배경 그라데이션 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 p-8">
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
              <span className="text-3xl">{project.emoji}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.category}
                </span>
                {project.award && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
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
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Github size={20} className="text-gray-300" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <ExternalLink size={20} className="text-gray-300" />
              </a>
            )}
          </div>
        </div>

        {/* 설명 */}
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">{project.description}</p>

        {/* 프로젝트 정보 */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-3 text-gray-400">
            <Calendar size={20} />
            <span className="text-sm"><span className="text-blue-400 font-semibold">기간:</span> {project.period}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <User size={20} />
            <span className="text-sm"><span className="text-blue-400 font-semibold">역할:</span> {project.role}</span>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Wrench className="mr-2" size={20} />
            기술 스택
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white opacity-80 hover:opacity-100 transition-opacity cursor-default`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 하단 액션 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Zap className="text-blue-400" size={16} />
              <span>Featured</span>
            </div>
            <div className="flex items-center space-x-1">
              <Code className="text-green-400" size={16} />
              <span>Full Stack</span>
            </div>
          </div>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <span className="font-medium">자세히 보기</span>
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
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
      title: "Designated Parking Management System",
      emoji: "🅿️",
      category: "Cloud, Big Data, IoT Project",
      description: "개인 주차 공간 공유를 통한 주차 공간 부족 문제 해결을 위한 반응형 웹 애플리케이션",
      period: "Aug 2022 – Feb 2023 (6개월)",
      role: "Cloud / Front-end (HTML, CSS)",
      technologies: ["MSA", "Cloud Services", "AWS", "Docker", "Kubernetes"],
      github: "https://github.com/kookyungseon/cloudproject_TayoTayo",
      gradient: "from-green-500 to-emerald-600",
      award: null
    },
    {
      title: "Travel Destination Recommendation System",
      emoji: "🗺️",
      category: "Open Source Development Project",
      description: "지역별 여행지 및 맛집 추천 웹 애플리케이션",
      period: "3학년 2학기",
      role: "Front-end (React)",
      technologies: ["React", "Open Source", "JavaScript", "CSS", "API"],
      github: "https://github.com/opensource-develop-project-2023/miwu",
      gradient: "from-blue-500 to-cyan-600",
      award: null
    },
    {
      title: "Environmental Awareness Improvement (Water Quality)",
      emoji: "🌊",
      category: "Open Source Basic Project",
      description: "친환경 세제 인증, 물 관련 퀴즈, 오염된 우수관 신고 기능 제공",
      period: "4학년 1학기",
      role: "Django + DB Management / API 활용 / Front-end (Flutter)",
      technologies: ["Django", "Flutter", "API", "Database", "Mobile"],
      github: "https://github.com/Eco-guardians/BOGGLE",
      gradient: "from-cyan-500 to-blue-600",
      award: null
    },
    {
      title: "Telemedicine and Emergency Room Matching",
      emoji: "🏥",
      category: "AI Open Source Professional Project",
      description: "응급실 문제 해결을 위한 AI 챗봇 기반 원격의료 및 응급실 추천 앱",
      period: "4학년 1학기",
      role: "Front-end (XML)",
      technologies: ["AI", "XML", "Android", "Chatbot", "Healthcare"],
      github: "https://github.com/code-guhaejo/CodeBlack",
      gradient: "from-purple-500 to-pink-600",
      award: null
    },
    {
      title: "Pill Recognition and Management App",
      emoji: "💊",
      category: "AI/ML Project",
      description: "사진 업로드 및 이미지 인식을 통한 알약 정보 및 복약 관리 앱",
      period: "Aug 2024 – Oct 2024 (3개월)",
      role: "Django + DB Management / 알약 인식 모델 개발",
      technologies: ["Django", "AI/ML", "CNN", "Computer Vision", "Python"],
      github: "https://github.com/Algorithmstudy01/ict_ver2",
      gradient: "from-yellow-500 to-orange-600",
      award: "2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상"
    },
    {
      title: "Smart Window Project",
      emoji: "🪟",
      category: "IoT Ventilation System",
      description: "IoT 센서를 활용한 공기질, 온도, 습도 기반 자동 창문 개폐 시스템",
      period: "4학년 3학기",
      role: "Backend API 개발 / 공공데이터 포털 API 연결 / Raspberry Pi 통신",
      technologies: ["IoT", "Raspberry Pi", "API", "Python", "Hardware"],
      github: "https://github.com/kangeunsong/SOOM",
      gradient: "from-red-500 to-pink-600",
      award: null
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-yellow-400 mr-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              🚀 Featured Projects
            </h2>
            <Sparkles className="text-yellow-400 ml-4" size={40} />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            클라우드, AI, 데이터 분석을 활용한 다양한 프로젝트 경험
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Star size={20} />
              <span className="text-sm">Featured Projects</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Award size={20} />
              <span className="text-sm">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
            <span className="text-lg font-semibold">더 많은 프로젝트 보기</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;