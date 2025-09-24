import React, { useEffect, useState, useRef } from 'react';
import { Code, ExternalLink, Github, Star, Award, Zap, Eye } from 'lucide-react';
import carImage from "./car.png";
import tourImage from "./tour.png";
import waterImage from "./water.png";
import mafiaImage from "./mafia.png";
import hospitalImage from "./hospital.png";
import pillImage from "./pill.png";

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  const getGradient = (index) => {
    const gradients = [
      "from-cyan-500 to-cyan-600",
      "from-slate-600 to-slate-700", 
      "from-cyan-500 to-cyan-600",
      "from-slate-600 to-slate-700",
      "from-cyan-500 to-cyan-600",
      "from-slate-600 to-slate-700"
    ];
    return gradients[index % gradients.length];
  };

  const getIcon = (index) => {
    const icons = [Award, Star, Zap, Code, Github, Eye];
    return icons[index % icons.length];
  };

  const IconComponent = getIcon(index);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gray-800 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        
        {/* 메인 카드 */}
        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
          {/* 이미지 영역 */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} 이미지`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* 카테고리 배지 */}
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            {/* 아이콘 */}
            <div className="absolute top-4 right-4">
              <div className="p-3 rounded-full bg-gray-800 border border-gray-700 shadow-lg">
                <IconComponent className="text-white" size={20} />
              </div>
            </div>

            {/* 호버 시 깃허브 링크 */}
            <div className={`absolute bottom-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="text-white" size={20} />
              </a>
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* 액션 버튼 */}
            <div className="flex items-center justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
              >
                <Github size={16} />
                <span className="text-sm font-medium group-hover/link:underline">코드 보기</span>
                <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
              
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <span className="text-xs text-gray-400">Featured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI 기반 차량 예약 확인 시스템 '타요타요'",
      category: "멀티캠퍼스 융복합 프로젝트 - 최우수상",
      description: "AWS 클라우드 환경에서 차량 이미지 업로드 → 번호판 인식 → 예약 정보 대조 → 문자 알림까지 자동화되는 파이프라인을 구축한 AI 기반 주차 관리 시스템",
      technologies: ["AWS", "Route53", "RDS", "Lambda", "Auto Scaling", "Python", "AI"],
      image: carImage,
      link: "https://github.com/kookyungseon/cloudproject_TayoTayo"
    },
    {
      title: "AI OCR 기반 알약 식별 및 처방전 자동 인식 시스템",
      category: "2024 ICT 충청권 이노베이션 공모전 - SW 개발 부문 최우수상",
      description: "OCR 기반 처방전 인식 기능과 CNN 모델을 통한 알약 식별 기능을 구현하여 사용자 입력 최소화를 통한 의료 정보 처리 자동화를 달성",
      technologies: ["Django", "Flutter", "OCR", "CNN", "AI", "Python"],
      image: pillImage,
      link: "https://github.com/Algorithmstudy01/ict_ver2"
    },
    {
      title: "LLM 기반 답변 최적화 플랫폼",
      category: "졸업작품 프로젝트",
      description: "Claude, Gemini, OpenAI API 등 다양한 모델을 동시에 호출하여 답변을 비교 분석하고, LangChain 기반 파이프라인으로 텍스트, 이미지, PDF, 영상 데이터를 통합 분석하는 채팅 시스템",
      technologies: ["Python", "LangChain", "OpenAI API", "Claude", "Gemini", "FastAPI"],
      image: hospitalImage,
      link: "https://github.com/kookyungseon"
    },
    {
      title: "PyTorch 오픈소스 문서 번역 및 품질 개선",
      category: "2024 충북 오픈소스 컨트리뷰션 - 1위 최우수상",
      description: "글로벌 개발자 커뮤니티와 협업하며 딥러닝 프레임워크 문서 번역·리뷰 수행 및 GitHub Pull Request를 통한 코드 및 문서 기여",
      technologies: ["PyTorch", "GitHub", "Slack", "Documentation", "Deep Learning"],
      image: tourImage,
      link: "https://github.com/pytorch/pytorch"
    },
    {
      title: "위기 상황 자동 녹음 앱 '안전한 목소리'",
      category: "고용노동부 미래내일 일경험 지원사업",
      description: "Flutter 기반 반응형 프론트엔드 개발 및 REST API 연동을 통한 사용자 편의성과 상황 대응성을 고려한 UX 개선",
      technologies: ["Flutter", "Dart", "REST API", "UI/UX Design"],
      image: waterImage,
      link: "https://github.com/kookyungseon"
    },
    {
      title: "TCP/IP 소켓 프로그래밍을 활용한 '마피아 게임'",
      category: "서버프로그래밍 프로젝트",
      description: "TCP/IP 소켓 프로그래밍과 멀티스레드를 활용한 실시간 마피아 게임 서버 구현. 효율적인 스레드 관리를 위한 독자적 로직 설계로 안정적인 게임 플레이 제공",
      technologies: ["C", "Socket Programming", "Multi-Threading", "TCP/IP"],
      image: mafiaImage,
      link: "https://github.com/kookyungseon/server_program"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="text-gray-300">
              프로젝트
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            클라우드, AI, 데이터 분석을 활용한 다양한 프로젝트 경험
          </p>
          <div className="flex justify-center mt-8 space-x-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/kookyungseon"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} className="text-black" />
            <span className="text-lg font-semibold">더 많은 프로젝트 보기</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
