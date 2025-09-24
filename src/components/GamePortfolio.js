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
      } else {
        onEnterZone(null);
      }
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#58A6FF" />
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
      <meshStandardMaterial color="#20232a" />
    </mesh>
  );
}

// 프로젝트 영역 컴포넌트
function ProjectZone({ position, color, project, onEnter }) {
  const [ref] = useBox(() => ({
    position,
    args: [4, 0.1, 4],
    type: 'Static'
  }));

  return (
    <group>
      <mesh ref={ref}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color={color} transparent opacity={0.3} />
      </mesh>
      <Text
        position={[position[0], position[1] + 2, position[2]]}
        fontSize={0.8}
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
      <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-md text-white shadow-2xl">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="space-y-2 mb-4">
          <p><span className="text-blue-400 font-semibold">기간:</span> {project.period}</p>
          <p><span className="text-blue-400 font-semibold">역할:</span> {project.role}</p>
          <p><span className="text-blue-400 font-semibold">기술:</span> {project.tech}</p>
          {project.award && (
            <p><span className="text-yellow-400 font-semibold">수상:</span> {project.award}</p>
          )}
        </div>
        <div className="flex space-x-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </Html>
  );
}

// 메인 게임 씬
function GameScene({ onEnterZone, currentProject }) {
  const projects = [
    {
      id: 'parking',
      title: '🅿️ Designated Parking Management System',
      position: [10, 0, 0],
      color: '#10B981',
      description: '개인 주차 공간 공유를 통한 주차 공간 부족 문제 해결을 위한 반응형 웹 애플리케이션',
      period: 'Aug 2022 – Feb 2023 (6개월)',
      role: 'Cloud / Front-end (HTML, CSS)',
      tech: 'MSA, Cloud Services',
      github: 'https://github.com/kookyungseon/cloudproject_TayoTayo'
    },
    {
      id: 'travel',
      title: '🗺️ Travel Destination Recommendation System',
      position: [0, 0, 10],
      color: '#3B82F6',
      description: '지역별 여행지 및 맛집 추천 웹 애플리케이션',
      period: '3학년 2학기',
      role: 'Front-end (React)',
      tech: 'React, Open Source',
      github: 'https://github.com/opensource-develop-project-2023/miwu'
    },
    {
      id: 'water',
      title: '🌊 Environmental Awareness Improvement',
      position: [-10, 0, 0],
      color: '#06B6D4',
      description: '친환경 세제 인증, 물 관련 퀴즈, 오염된 우수관 신고 기능 제공',
      period: '4학년 1학기',
      role: 'Django + DB Management / API 활용 / Front-end (Flutter)',
      tech: 'Django, Flutter, API',
      github: 'https://github.com/Eco-guardians/BOGGLE'
    },
    {
      id: 'telemedicine',
      title: '🏥 Telemedicine and Emergency Room Matching',
      position: [0, 0, -10],
      color: '#8B5CF6',
      description: '응급실 문제 해결을 위한 AI 챗봇 기반 원격의료 및 응급실 추천 앱',
      period: '4학년 1학기',
      role: 'Front-end (XML)',
      tech: 'AI, XML, Android',
      github: 'https://github.com/code-guhaejo/CodeBlack'
    },
    {
      id: 'pill',
      title: '💊 Pill Recognition and Management App',
      position: [10, 0, 10],
      color: '#F59E0B',
      description: '사진 업로드 및 이미지 인식을 통한 알약 정보 및 복약 관리 앱',
      period: 'Aug 2024 – Oct 2024 (3개월)',
      role: 'Django + DB Management / 알약 인식 모델 개발',
      tech: 'Django, AI/ML, CNN',
      award: '2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상',
      github: 'https://github.com/Algorithmstudy01/ict_ver2'
    },
    {
      id: 'smartwindow',
      title: '🪟 Smart Window Project',
      position: [-10, 0, 10],
      color: '#EF4444',
      description: 'IoT 센서를 활용한 공기질, 온도, 습도 기반 자동 창문 개폐 시스템',
      period: '4학년 3학기',
      role: 'Backend API 개발 / 공공데이터 포털 API 연결 / Raspberry Pi 통신',
      tech: 'IoT, Raspberry Pi, API',
      github: 'https://github.com/kangeunsong/SOOM'
    },
    {
      id: 'about',
      title: '👋 About Me',
      position: [0, 0, 0],
      color: '#58A6FF',
      description: '안녕하세요! 구경선입니다. 방향키로 이동해서 프로젝트들을 탐험해보세요!',
      period: '2020 ~ 현재',
      role: 'Full-Stack Developer',
      tech: 'React, Three.js, Node.js, Python, AI/ML',
      github: 'https://github.com/kookyungseon'
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
          color={project.color}
          project={project}
        />
      ))}
      
      {/* 플레이어 */}
      <Player position={[0, 2, 0]} onEnterZone={onEnterZone} />
      
      {/* 조명 */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} color="#58A6FF" intensity={0.6} />
      
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
        title: '🅿️ Designated Parking Management System',
        description: '개인 주차 공간 공유를 통한 주차 공간 부족 문제 해결을 위한 반응형 웹 애플리케이션',
        period: 'Aug 2022 – Feb 2023 (6개월)',
        role: 'Cloud / Front-end (HTML, CSS)',
        tech: 'MSA, Cloud Services',
        github: 'https://github.com/kookyungseon/cloudproject_TayoTayo'
      });
    } else if (projectId === 'travel') {
      setCurrentProject({
        title: '🗺️ Travel Destination Recommendation System',
        description: '지역별 여행지 및 맛집 추천 웹 애플리케이션',
        period: '3학년 2학기',
        role: 'Front-end (React)',
        tech: 'React, Open Source',
        github: 'https://github.com/opensource-develop-project-2023/miwu'
      });
    } else if (projectId === 'water') {
      setCurrentProject({
        title: '🌊 Environmental Awareness Improvement',
        description: '친환경 세제 인증, 물 관련 퀴즈, 오염된 우수관 신고 기능 제공',
        period: '4학년 1학기',
        role: 'Django + DB Management / API 활용 / Front-end (Flutter)',
        tech: 'Django, Flutter, API',
        github: 'https://github.com/Eco-guardians/BOGGLE'
      });
    } else if (projectId === 'telemedicine') {
      setCurrentProject({
        title: '🏥 Telemedicine and Emergency Room Matching',
        description: '응급실 문제 해결을 위한 AI 챗봇 기반 원격의료 및 응급실 추천 앱',
        period: '4학년 1학기',
        role: 'Front-end (XML)',
        tech: 'AI, XML, Android',
        github: 'https://github.com/code-guhaejo/CodeBlack'
      });
    } else if (projectId === 'pill') {
      setCurrentProject({
        title: '💊 Pill Recognition and Management App',
        description: '사진 업로드 및 이미지 인식을 통한 알약 정보 및 복약 관리 앱',
        period: 'Aug 2024 – Oct 2024 (3개월)',
        role: 'Django + DB Management / 알약 인식 모델 개발',
        tech: 'Django, AI/ML, CNN',
        award: '2024 충청권 ICT 이노베이션 SW 개발 부분 최우수상',
        github: 'https://github.com/Algorithmstudy01/ict_ver2'
      });
    } else if (projectId === 'smartwindow') {
      setCurrentProject({
        title: '🪟 Smart Window Project',
        description: 'IoT 센서를 활용한 공기질, 온도, 습도 기반 자동 창문 개폐 시스템',
        period: '4학년 3학기',
        role: 'Backend API 개발 / 공공데이터 포털 API 연결 / Raspberry Pi 통신',
        tech: 'IoT, Raspberry Pi, API',
        github: 'https://github.com/kangeunsong/SOOM'
      });
    } else if (projectId === 'about') {
      setCurrentProject({
        title: '👋 About Me',
        description: '안녕하세요! 구경선입니다. 방향키로 이동해서 프로젝트들을 탐험해보세요!',
        period: '2020 ~ 현재',
        role: 'Full-Stack Developer',
        tech: 'React, Three.js, Node.js, Python, AI/ML',
        github: 'https://github.com/kookyungseon'
      });
    } else {
      setCurrentProject(null);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* 컨트롤 안내 */}
      <div className="absolute top-4 left-4 z-10 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-2">🎮 컨트롤</h3>
        <p className="text-sm text-gray-300">방향키로 이동하세요!</p>
        <p className="text-sm text-gray-300">프로젝트 영역에 가까이 가면 정보가 나타납니다.</p>
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
