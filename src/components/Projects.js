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
      title: "지정주차 프로젝트",
      category: "멀티 캠퍼스 융복합 프로젝트",
      description: "IoT 기술을 이용한 주차 공간 관리 시스템 설계 및 구현",
      technologies: ["IoT", "React", "Spring Boot"],
      image: carImage, // import로 가져온 이미지
      link: "https://github.com/kookyungseon/cloudproject_TayoTayo"
    },
    {
      title: "여행지 추천 시스템",
      category: "오픈소스 개발 프로젝트",
      description: "지역별 여행지와 맛집을 추천하는 웹 애플리케이션. 사용자 맞춤형 추천 알고리즘 구현",
      technologies: ["React", "Node.js", "MongoDB"],
      image: tourImage, // 이미지 경로
      link: "https://github.com/opensource-develop-project-2023/miwu"
    },
    {
      title: "수질 환경 인식 개선 프로젝트",
      category: "오픈소스 기초 프로젝트",
      description: "수질 관련 퀴즈와 친환경 세제 인증 정보 제공 플랫폼",
      technologies: ["Django", "Flutter", "PostgreSQL"],
      image: waterImage, // 이미지 경로
      link: "https://github.com/Eco-guardians/BOGGLE"
    },
    {
      title: "원격진료 응급실 매칭",
      category: "AI 오픈소스 전문 프로젝트",
      description: "AI 챗봇 기반 원격진료 및 응급실 추천 시스템",
      technologies: ["Android", "Firebase", "TensorFlow"],
      image: hospitalImage, // 이미지 경로
      link: "https://github.com/code-guhaejo/CodeBlack"
    },
    {
      title: "AI를 이용한 알약 식별 프로젝트",
      category: "ICT 충청 이노베이션 공모전",
      description: "AI를 활용한 알약 식별 및, 처방전 촬영을 통한 복용 시간 알림 플랫폼",
      technologies: ["Django", "Flutter", "AI"],
      image: pillImage, // 이미지 경로
      link: "https://github.com/Algorithmstudy01/ict_ver2"
    },
    {
      title: "TCP/IP 소켓 프로그래밍을 활용한 '마피아 게임'",
      category: "서버프로그래밍",
      description: "TCP/IP 소켓 프로그래밍과 멀티스레드를 활용한 실시간 마피아 게임 서버 구현. 효율적인 스레드 관리를 위한 독자적 로직 설계로 안정적인 게임 플레이 제공",
      technologies: ["C", "Socket Programming", "Multi-Threading", "TCP/IP"],
      image: mafiaImage , // 이미지 경로
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
