import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

// 3D 카드 컴포넌트
function ProjectCard3D({ project, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      if (hovered) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.2;
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
  const shapes = ['box', 'sphere', 'torus'];
  const shape = shapes[index % shapes.length];
  const color = colors[index % colors.length];

  return (
    <group
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      {shape === 'box' && (
        <Box args={[2, 1.5, 0.5]}>
          <meshStandardMaterial 
            color={color} 
            wireframe={hovered} 
            transparent 
            opacity={hovered ? 0.8 : 0.6}
          />
        </Box>
      )}
      {shape === 'sphere' && (
        <Sphere args={[1, 16, 16]}>
          <meshStandardMaterial 
            color={color} 
            wireframe={hovered} 
            transparent 
            opacity={hovered ? 0.8 : 0.6}
          />
        </Sphere>
      )}
      {shape === 'torus' && (
        <Torus args={[1, 0.3, 16, 32]}>
          <meshStandardMaterial 
            color={color} 
            wireframe={hovered} 
            transparent 
            opacity={hovered ? 0.8 : 0.6}
          />
        </Torus>
      )}
    </group>
  );
}

// 파티클 효과
function ParticleEffect() {
  const points = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.2;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.01} color="#ffffff" transparent opacity={0.3} />
    </points>
  );
}

// 메인 3D 카드 씬
function ProjectScene({ project, index }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} color="#0ea5e9" intensity={0.6} />
      <pointLight position={[0, 5, 0]} color="#8b5cf6" intensity={0.4} />
      
      <ProjectCard3D project={project} index={index} />
      <ParticleEffect />
    </>
  );
}

// React 컴포넌트로 래핑
const Project3DCard = ({ project, index }) => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ProjectScene project={project} index={index} />
      </Canvas>
    </div>
  );
};

export default Project3DCard;
