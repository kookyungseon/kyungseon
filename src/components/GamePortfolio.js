import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import * as THREE from 'three';

// 플레이어 컴포넌트
function Player({ position, onEnterZone }) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.5],
    material: { friction: 0.1, restitution: 0.3 }
  }));

  const velocity = useRef([0, 0, 0]);
  const keys = useRef({
    forward: false,
    backward: false,
    leftward: false,
    rightward: false
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.current.forward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          keys.current.backward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          keys.current.leftward = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          keys.current.rightward = true;
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.current.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          keys.current.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          keys.current.leftward = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          keys.current.rightward = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const { forward, backward, leftward, rightward } = keys.current;
    
    // 이동 속도 설정
    const speed = 5;
    const direction = new THREE.Vector3();
    
    if (forward) direction.z -= 1;
    if (backward) direction.z += 1;
    if (leftward) direction.x -= 1;
    if (rightward) direction.x += 1;
    
    direction.normalize();
    direction.multiplyScalar(speed);
    
    api.velocity.set(direction.x, velocity.current[1], direction.z);
    
    // 현재 위치 가져오기
    const currentPosition = ref.current?.position;
    if (currentPosition) {
      // 특정 지역 진입 감지
      const x = currentPosition.x;
      const z = currentPosition.z;
      
      // 프로젝트 영역들
      if (x > 8 && x < 12 && z > -2 && z < 2) {
        onEnterZone('parking');
      } else if (x > -2 && x < 2 && z > 8 && z < 12) {
        onEnterZone('travel');
      } else if (x > -12 && x < -8 && z > -2 && z < 2) {
        onEnterZone('water');
      } else if (x > -2 && x < 2 && z > -12 && z < -8) {
        onEnterZone('telemedicine');
      } else if (x > 8 && x < 12 && z > 8 && z < 12) {
        onEnterZone('pill');
      } else if (x > -12 && x < -8 && z > 8 && z < 12) {
        onEnterZone('smartwindow');
      } else if (x > -2 && x < 2 && z > -2 && z < 2) {
        onEnterZone('about');
      } else if (x > -8 && x < -4 && z > -8 && z < -4) {
        onEnterZone('education');
      } else if (x > 4 && x < 8 && z > -8 && z < -4) {
        onEnterZone('certifications');
      } else if (x > -8 && x < -4 && z > 4 && z < 8) {
        onEnterZone('experience');
      } else {
        onEnterZone(null);
      }
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

// 바닥 컴포넌트
function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
    args: [50, 50]
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#1a1a1a" />
    </mesh>
  );
}

// 프로젝트 영역 컴포넌트
function ProjectZone({ position, project }) {
  const [ref] = useBox(() => ({
    position,
    args: [4, 0.1, 4],
    type: 'Static'
  }));

  return (
    <group>
      <mesh ref={ref}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color="#333333" transparent opacity={0.5} />
      </mesh>
      <Text
        position={[position[0], position[1] + 2, position[2]]}
        fontSize={0.6}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {project.title}
      </Text>
    </group>
  );
}

// 정보 패널 컴포넌트
function InfoPanel({ project, visible }) {
  if (!visible || !project) return null;

  return (
    <Html position={[0, 5, 0]} center>
      <div className="bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-6 max-w-lg text-white shadow-xl max-h-96 overflow-y-auto">
        <h3 className="text-xl font-medium mb-3 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        
        {project.details && (
          <div className="space-y-3 mb-4">
            {project.details.map((detail, index) => (
              <div key={index} className="text-xs">
                <span className="text-gray-400 font-medium">{detail.label}:</span>
                <span className="text-gray-300 ml-2">{detail.value}</span>
              </div>
            ))}
          </div>
        )}

        {project.achievements && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">주요 성과</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">기술 스택</h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-gray-800 text-xs rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-xs transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </Html>
  );
}

// 메인 게임 씬
function GameScene({ onEnterZone, currentProject }) {
  const projects = [
    {
      id: 'parking',
      title: '주차 관리 시스템',
      position: [10, 0, 0]
    },
    {
      id: 'travel',
      title: '여행지 추천',
      position: [0, 0, 10]
    },
    {
      id: 'water',
      title: '환경 인식 개선',
      position: [-10, 0, 0]
    },
    {
      id: 'telemedicine',
      title: '원격의료 매칭',
      position: [0, 0, -10]
    },
    {
      id: 'pill',
      title: '알약 인식 앱',
      position: [10, 0, 10]
    },
    {
      id: 'smartwindow',
      title: '스마트 윈도우',
      position: [-10, 0, 10]
    },
    {
      id: 'about',
      title: '자기소개',
      position: [0, 0, 0]
    },
    {
      id: 'education',
      title: '학력사항',
      position: [-6, 0, -6]
    },
    {
      id: 'certifications',
      title: '자격증',
      position: [6, 0, -6]
    },
    {
      id: 'experience',
      title: '경력',
      position: [-6, 0, 6]
    }
  ];

  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Ground />
      
      {/* 프로젝트 영역들 */}
      {projects.map((project) => (
        <ProjectZone
          key={project.id}
          position={project.position}
          project={project}
        />
      ))}
      
      {/* 플레이어 */}
      <Player position={[0, 2, 0]} onEnterZone={onEnterZone} />
      
      {/* 조명 */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={0.3} />
      
      {/* 정보 패널 */}
      <InfoPanel project={currentProject} visible={!!currentProject} />
    </Physics>
  );
}

// 메인 게임 포트폴리오 컴포넌트
const GamePortfolio = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const handleEnterZone = (projectId) => {
    if (projectId === 'parking') {
      setCurrentProject({
        title: '주차 관리 시스템',
        description: '개인 주차 공간 공유를 통한 주차 공간 부족 문제 해결을 위한 반응형 웹 애플리케이션',
        details: [
          { label: '기간', value: 'Aug 2022 – Feb 2023 (6개월)' },
          { label: '역할', value: 'Cloud / Front-end (HTML, CSS)' }
        ],
        technologies: ['MSA', 'Cloud Services', 'AWS', 'Docker', 'Kubernetes'],
        github: 'https://github.com/kookyungseon/cloudproject_TayoTayo'
      });
    } else if (projectId === 'travel') {
      setCurrentProject({
        title: '여행지 추천 시스템',
        description: '지역별 여행지 및 맛집 추천 웹 애플리케이션',
        details: [
          { label: '기간', value: '3학년 2학기' },
          { label: '역할', value: 'Front-end (React)' }
        ],
        technologies: ['React', 'Open Source', 'JavaScript', 'CSS', 'API'],
        github: 'https://github.com/opensource-develop-project-2023/miwu'
      });
    } else if (projectId === 'water') {
      setCurrentProject({
        title: '환경 인식 개선',
        description: '친환경 세제 인증, 물 관련 퀴즈, 오염된 우수관 신고 기능 제공',
        details: [
          { label: '기간', value: '4학년 1학기' },
          { label: '역할', value: 'Django + DB Management / API 활용 / Front-end (Flutter)' }
        ],
        technologies: ['Django', 'Flutter', 'API', 'Database', 'Mobile'],
        github: 'https://github.com/Eco-guardians/BOGGLE'
      });
    } else if (projectId === 'telemedicine') {
      setCurrentProject({
        title: '원격의료 매칭',
        description: '응급실 문제 해결을 위한 AI 챗봇 기반 원격의료 및 응급실 추천 앱',
        details: [
          { label: '기간', value: '4학년 1학기' },
          { label: '역할', value: 'Front-end (XML)' }
        ],
        technologies: ['AI', 'XML', 'Android', 'Chatbot', 'Healthcare'],
        github: 'https://github.com/code-guhaejo/CodeBlack'
      });
    } else if (projectId === 'pill') {
      setCurrentProject({
        title: '알약 인식 앱',
        description: '사진 업로드 및 이미지 인식을 통한 알약 정보 및 복약 관리 앱',
        details: [
          { label: '기간', value: 'Aug 2024 – Oct 2024 (3개월)' },
          { label: '역할', value: 'Django + DB Management / 알약 인식 모델 개발' },
          { label: '수상', value: '2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상' }
        ],
        technologies: ['Django', 'AI/ML', 'CNN', 'Computer Vision', 'Python'],
        github: 'https://github.com/Algorithmstudy01/ict_ver2'
      });
    } else if (projectId === 'smartwindow') {
      setCurrentProject({
        title: '스마트 윈도우',
        description: 'IoT 센서를 활용한 공기질, 온도, 습도 기반 자동 창문 개폐 시스템',
        details: [
          { label: '기간', value: '4학년 3학기' },
          { label: '역할', value: 'Backend API 개발 / 공공데이터 포털 API 연결 / Raspberry Pi 통신' }
        ],
        technologies: ['IoT', 'Raspberry Pi', 'API', 'Python', 'Hardware'],
        github: 'https://github.com/kangeunsong/SOOM'
      });
    } else if (projectId === 'about') {
      setCurrentProject({
        title: '자기소개',
        description: '안녕하세요! 구경선입니다. 방향키로 이동해서 다양한 정보를 탐험해보세요!',
        details: [
          { label: '기간', value: '2020 ~ 현재' },
          { label: '역할', value: 'Full-Stack Developer' }
        ],
        technologies: ['React', 'Three.js', 'Node.js', 'Python', 'AI/ML'],
        github: 'https://github.com/kookyungseon'
      });
    } else if (projectId === 'education') {
      setCurrentProject({
        title: '학력사항',
        description: '지구환경과학과 소프트웨어학과 복수전공 및 클라우드 전문 교육 과정',
        details: [
          { label: '충북대학교', value: '2020 ~ 현재' },
          { label: '지구환경과학과', value: '2020년 입학' },
          { label: '소프트웨어학과', value: '2023년 복수전공 승인' },
          { label: '멀티캠퍼스', value: '2022년 클라우드 융복합 과정 수료' }
        ],
        achievements: [
          '2020년 지구환경과학과 입학',
          '지구과학 및 지질학 전공',
          '지구물리학 및 지질구조론 학습',
          '2023년 소프트웨어학과 복수전공 승인',
          '알고리즘 및 자료구조 이론과 실습',
          '웹/앱 개발 및 서버 프로그래밍 학습',
          'MSA 기반 클라우드 서비스 개발',
          'AWS, Docker, Kubernetes 실습',
          '프론트엔드/백엔드 개발 실무 프로젝트 수행'
        ],
        technologies: ['지구과학', '소프트웨어', '클라우드', 'AWS', 'Docker', 'Kubernetes']
      });
    } else if (projectId === 'certifications') {
      setCurrentProject({
        title: '자격증 & 수상내역',
        description: '데이터 전문성과 기술 역량을 인정받은 자격증 및 수상 경력',
        details: [
          { label: 'DAsP', value: '데이터아키텍처 준전문가 (2024.10.25)' },
          { label: 'ADsP', value: '데이터분석 준전문가 (2024.11.29)' },
          { label: '빅데이터 분석기사', value: '2025.07.11' },
          { label: 'SQLD', value: 'SQL 개발자 (2025.09.19)' },
          { label: '토익스피킹', value: 'IM3 (2025.09.01)' }
        ],
        achievements: [
          'SW 개발 부문 최우수상 (2위) - 2024 충청권 ICT 이노베이션',
          '2024년 충북 오픈소스 컨트리뷰션 최우수상 (1위)',
          '융복합 프로젝트형 클라우드 서비스(MSA) 개발 최우수상'
        ],
        technologies: ['데이터 분석', 'SQL', '영어', '오픈소스', '클라우드']
      });
    } else if (projectId === 'experience') {
      setCurrentProject({
        title: '경력',
        description: '다양한 프로젝트와 교육 과정을 통해 쌓은 실무 경험과 전문성',
        details: [
          { label: '픽셀아이', value: '인턴십 (2024.07 ~ 2024.08)' },
          { label: '멀티캠퍼스', value: '클라우드 과정 (2022.08 ~ 2023.02)' },
          { label: '고용노동부', value: '청년주도 프로젝트 (2025.05 ~ 2025.06)' }
        ],
        achievements: [
          '그누보드와 FTP를 활용한 사이트 구조 정비',
          '번역 지연 이슈 해결 및 자동 번역 기능 구현',
          '고정 문구에 대한 다국어 번역 처리 개발',
          '총 944시간 이상의 실무 중심 교육 이수',
          '클라우드 및 MSA 환경 이해도 향상',
          'UI 반응형 프론트엔드 개발 및 메인화면, 핵심 기능 화면 설계·구현',
          'Flutter REST API 기반 페이지 구현 및 API 연동',
          '사용자 편의성과 상황 대응성을 고려한 UX 개선 주도'
        ],
        technologies: ['PHP', 'GnuBoard', 'AWS', 'MSA', 'Docker', 'Kubernetes', 'Flutter', 'Dart', 'REST API']
      });
    } else {
      setCurrentProject(null);
    }
  };

  return (
    <div className="w-full h-screen bg-black">
      {/* 컨트롤 안내 */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
        <h3 className="text-sm font-medium mb-1">컨트롤</h3>
        <p className="text-xs text-gray-400">WASD 또는 방향키로 이동</p>
      </div>

      {/* 3D 씬 */}
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <GameScene onEnterZone={handleEnterZone} currentProject={currentProject} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default GamePortfolio;