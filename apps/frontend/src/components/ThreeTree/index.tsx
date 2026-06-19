import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNode = ({ position, color, size = 0.5 }: { position: [number, number, number], color: string, size?: number }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={0.4}
          radius={1}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

const SynapticConnections = () => {
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const points = [
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(4, 4, 0),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(-4, 4, 0),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -5, 0),
    ];
    geometry.setFromPoints(points);
    return geometry;
  }, []);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial color="#00f0ff" opacity={0.2} transparent />
    </lineSegments>
  );
};

const ThreeTree = () => {
  return (
    <div className="w-full h-[600px] bg-black rounded-3xl overflow-hidden border border-gray-800 shadow-2xl relative">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <color attach="background" args={['#020202']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <NeuralNode position={[0, 0, 0]} color="#ffffff" size={1} />
        <NeuralNode position={[4, 4, 0]} color="#00f0ff" />
        <NeuralNode position={[-4, 4, 0]} color="#10b981" />
        <NeuralNode position={[0, -5, 0]} color="#a855f7" />

        <SynapticConnections />

        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute top-8 left-8 z-10 pointer-events-none">
         <h2 className="text-4xl font-black text-white tracking-tighter uppercase">3D NEURAL TREE</h2>
         <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">INTERACTIVE KNOWLEDGE UNIVERSE // WEBGL RENDER</p>
      </div>
    </div>
  );
};

export default ThreeTree;
