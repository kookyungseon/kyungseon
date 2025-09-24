import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

// 플레이어 컴포넌트
function Player({ position, onEnterZone }) {
  const meshRef = useRef();
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

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const { forward, backward, leftward, rightward } = keys.current;
    const speed = 8 * delta; // 프레임 독립적 속도
    
    if (forward) meshRef.current.position.z -= speed;
    if (backward) meshRef.current.position.z += speed;
    if (leftward) meshRef.current.position.x -= speed;
    if (rightward) meshRef.current.position.x += speed;

    // 영역 감지
    const x = meshRef.current.position.x;
    const z = meshRef.current.position.z;
    
    // 프로젝트 영역들
    if (x > 4 && x < 6 && z > -1 && z < 1) {
      onEnterZone('parking');
    } else if (x > -1 && x < 1 && z > 4 && z < 6) {
      onEnterZone('travel');
    } else if (x > -6 && x < -4 && z > -1 && z < 1) {
      onEnterZone('water');
    } else if (x > -1 && x < 1 && z > -6 && z < -4) {
      onEnterZone('telemedicine');
    } else if (x > 4 && x < 6 && z > 4 && z < 6) {
      onEnterZone('pill');
    } else if (x > -6 && x < -4 && z > 4 && z < 6) {
      onEnterZone('smartwindow');
    } else if (x > -1 && x < 1 && z > -1 && z < 1) {
      onEnterZone('about');
    } else if (x > -4 && x < -2 && z > -4 && z < -2) {
      onEnterZone('education');
    } else if (x > 2 && x < 4 && z > -4 && z < -2) {
      onEnterZone('certifications');
    } else if (x > -4 && x < -2 && z > 2 && z < 4) {
      onEnterZone('experience');
    } else {
      onEnterZone(null);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
      <meshStandardMaterial color="#FF6B6B" />
      {/* 플레이어 머리 */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.25, 8, 6]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
    </mesh>
  );
}

// 나무 컴포넌트
function Tree({ position }) {
  return (
    <group position={position}>
      {/* 나무 줄기 */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 2, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* 나무 잎사귀 */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[1, 8, 6]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
}

// 꽃 컴포넌트
function Flower({ position }) {
  return (
    <group position={position}>
      {/* 꽃 줄기 */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 6]} />
        <meshStandardMaterial color="#32CD32" />
      </mesh>
      {/* 꽃잎들 */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[Math.cos(i * 1.26) * 0.3, 1, Math.sin(i * 1.26) * 0.3]}>
          <sphereGeometry args={[0.2, 6, 4]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#FF69B4" : "#FFB6C1"} />
        </mesh>
      ))}
      {/* 꽃 중심 */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.1, 6, 4]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
    </group>
  );
}

// 사람 컴포넌트
function Person({ position, color = "#FFB6C1" }) {
  return (
    <group position={position}>
      {/* 머리 */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.3, 8, 6]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* 몸통 */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.2]} />
        <meshStandardMaterial color="#4169E1" />
      </mesh>
      {/* 팔들 */}
      <mesh position={[-0.3, 1, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.3, 1, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* 다리들 */}
      <mesh position={[-0.1, 0.3, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#000080" />
      </mesh>
      <mesh position={[0.1, 0.3, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#000080" />
      </mesh>
    </group>
  );
}

// 건물 컴포넌트
function Building({ position, height = 3, color = "#708090" }) {
  return (
    <group position={position}>
      {/* 건물 본체 */}
      <mesh position={[0, height/2, 0]}>
        <boxGeometry args={[2, height, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* 지붕 */}
      <mesh position={[0, height + 0.5, 0]}>
        <coneGeometry args={[1.5, 1, 4]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>
      {/* 창문들 */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0.6, height/2 - i * 0.8, 0]}>
          <boxGeometry args={[0.3, 0.4, 0.05]} />
          <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

// 구름 컴포넌트
function Cloud({ position }) {
  return (
    <group position={position}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[i * 0.8 - 1.2, 0, 0]}>
          <sphereGeometry args={[0.4, 8, 6]} />
          <meshStandardMaterial color="#FFFFFF" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// 프로젝트 영역 컴포넌트
function ProjectZone({ position, projectId, color }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
      <Text
        position={[0, 1, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {projectId}
      </Text>
    </group>
  );
}

// 정보 패널 컴포넌트
function InfoPanel({ project, visible }) {
  if (!visible || !project) return null;

  return (
    <Html position={[0, 5, 0]} center>
      <div className="bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-4 max-w-md text-white shadow-xl max-h-80 overflow-y-auto">
        <h3 className="text-lg font-medium mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
        
        {project.details && (
          <div className="space-y-2 mb-3">
            {project.details.map((detail, index) => (
              <div key={index} className="text-xs">
                <span className="text-gray-400 font-medium">{detail.label}:</span>
                <span className="text-gray-300 ml-2">{detail.value}</span>
              </div>
            ))}
          </div>
        )}

        {project.technologies && (
          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-400 mb-1">기술 스택</h4>
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
        description: '안녕하세요! 구경선입니다. WASD 키로 이동해서 다양한 정보를 탐험해보세요!',
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
        technologies: ['PHP', 'GnuBoard', 'AWS', 'MSA', 'Docker', 'Kubernetes', 'Flutter', 'Dart', 'REST API']
      });
    } else {
      setCurrentProject(null);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      {/* 컨트롤 안내 */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
        <h3 className="text-sm font-medium mb-1">🎮 3D 포트폴리오 월드</h3>
        <p className="text-xs text-gray-400">WASD 키로 이동해서 정보 탐험하기</p>
        <p className="text-xs text-gray-400">영역에 가까이 가면 자동으로 정보 표시</p>
      </div>

      {/* 3D 씬 */}
      <Canvas
        camera={{ position: [0, 8, 15], fov: 75 }}
      >
        {/* 하늘과 조명 */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, 10, -10]} color="#FFD700" intensity={0.5} />
        
        {/* 바닥 (풀밭) */}
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#90EE90" />
        </mesh>
        
        {/* 구름들 */}
        <Cloud position={[-15, 8, -10]} />
        <Cloud position={[15, 6, -15]} />
        <Cloud position={[0, 7, 20]} />
        
        {/* 나무들 */}
        <Tree position={[-12, 0, -8]} />
        <Tree position={[12, 0, -8]} />
        <Tree position={[-8, 0, 12]} />
        <Tree position={[8, 0, 12]} />
        <Tree position={[-15, 0, 5]} />
        <Tree position={[15, 0, 5]} />
        
        {/* 꽃들 */}
        <Flower position={[-6, 0, -6]} />
        <Flower position={[6, 0, -6]} />
        <Flower position={[-4, 0, 8]} />
        <Flower position={[4, 0, 8]} />
        <Flower position={[-10, 0, 2]} />
        <Flower position={[10, 0, 2]} />
        
        {/* 사람들 */}
        <Person position={[-3, 0, -8]} color="#FFB6C1" />
        <Person position={[3, 0, -8]} color="#87CEEB" />
        <Person position={[-8, 0, 3]} color="#98FB98" />
        <Person position={[8, 0, 3]} color="#F0E68C" />
        
        {/* 건물들 */}
        <Building position={[-18, 0, -12]} height={4} color="#708090" />
        <Building position={[18, 0, -12]} height={3} color="#A0522D" />
        <Building position={[-18, 0, 12]} height={5} color="#696969" />
        <Building position={[18, 0, 12]} height={3.5} color="#8B4513" />
        
        {/* 프로젝트 영역들 */}
        <ProjectZone position={[5, 0, 0]} projectId="주차관리" color="#ff6b6b" />
        <ProjectZone position={[0, 0, 5]} projectId="여행추천" color="#4ecdc4" />
        <ProjectZone position={[-5, 0, 0]} projectId="환경개선" color="#45b7d1" />
        <ProjectZone position={[0, 0, -5]} projectId="원격의료" color="#96ceb4" />
        <ProjectZone position={[5, 0, 5]} projectId="알약인식" color="#feca57" />
        <ProjectZone position={[-5, 0, 5]} projectId="스마트윈도우" color="#ff9ff3" />
        
        {/* 자기소개 */}
        <ProjectZone position={[0, 0, 0]} projectId="자기소개" color="#ffffff" />
        
        {/* 학력, 자격증, 경력 */}
        <ProjectZone position={[-3, 0, -3]} projectId="학력" color="#a8e6cf" />
        <ProjectZone position={[3, 0, -3]} projectId="자격증" color="#ffd3a5" />
        <ProjectZone position={[-3, 0, 3]} projectId="경력" color="#fd79a8" />
        
        {/* 플레이어 */}
        <Player position={[0, 1, 0]} onEnterZone={handleEnterZone} />
        
        {/* 정보 패널 */}
        <InfoPanel project={currentProject} visible={!!currentProject} />
        
        <OrbitControls enablePan={false} enableZoom={true} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default GamePortfolio;