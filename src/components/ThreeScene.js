import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

// 회전하는 구 컴포넌트
function RotatingSphere({ position, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[1, 32, 32]}>
      <meshStandardMaterial color={color} wireframe />
    </Sphere>
  );
}

// 떠다니는 박스 컴포넌트
function FloatingBox({ position, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x += delta * speed * 0.3;
      meshRef.current.rotation.z += delta * speed * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}

// 회전하는 토러스 컴포넌트
function RotatingTorus({ position, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 0.7;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.3, 16, 32]}>
      <meshStandardMaterial color={color} wireframe />
    </Torus>
  );
}

// 파티클 시스템
function ParticleField() {
  const points = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.6} />
    </points>
  );
}

// 메인 3D 씬 컴포넌트
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={0.6} />
      <pointLight position={[0, 10, 0]} color="#8b5cf6" intensity={0.4} />
      
      {/* 3D 객체들 */}
      <RotatingSphere position={[-4, 0, 0]} color="#3b82f6" speed={1} />
      <RotatingSphere position={[4, 0, 0]} color="#8b5cf6" speed={1.2} />
      <FloatingBox position={[0, 3, 0]} color="#06b6d4" speed={1.5} />
      <FloatingBox position={[0, -3, 0]} color="#10b981" speed={1.3} />
      <RotatingTorus position={[0, 0, -3]} color="#f59e0b" speed={0.8} />
      
      {/* 파티클 필드 */}
      <ParticleField />
      
      {/* OrbitControls로 마우스 인터랙션 추가 */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

// 메인 ThreeScene 컴포넌트
const ThreeScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
