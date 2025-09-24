import React, { useEffect, useState, useRef } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';
import carImage from "./car.png";
import tourImage from "./tour.png";
import waterImage from "./water.png";
import mafiaImage from "./mafia.png";
import hospitalImage from "./hospital.png";
import pillImage from "./pill.png";

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // 30%가 화면에 보일 때 트리거
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

  return (
    <div
      ref={cardRef}
      className={`bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="h-56 bg-gray-200 rounded-lg mb-6 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} 이미지`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4">{project.category}</p>
      <p className="text-sm text-gray-500 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full shadow-sm">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={20} />
        코드 보기
      </a>
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
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 flex items-center gap-2">
          <Code className="text-blue-600" />
          프로젝트
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/kookyungseon"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            더 많은 프로젝트 보기
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
