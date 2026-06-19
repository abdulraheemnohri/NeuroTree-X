import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
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

const SynapticPulses = () => {
  const points = useMemo(() => {
    const p = new Float32Array(300);
    for (let i = 0; i < 300; i++) {
      p[i] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  const ref = useRef<any>();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.001;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const SynapticConnections = () => {
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const points = [
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(4, 4, 0),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(-4, 4, 0),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -5, 0),
      new THREE.Vector3(4, 4, 0), new THREE.Vector3(6, 2, 2),
      new THREE.Vector3(-4, 4, 0), new THREE.Vector3(-6, 2, -2),
    ];
    geometry.setFromPoints(points);
    return geometry;
  }, []);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial color="#00f0ff" opacity={0.15} transparent />
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

        <NeuralNode position={[0, 0, 0]} color="#ffffff" size={0.8} />
        <NeuralNode position={[4, 4, 0]} color="#00f0ff" size={0.4} />
        <NeuralNode position={[-4, 4, 0]} color="#10b981" size={0.4} />
        <NeuralNode position={[0, -5, 0]} color="#a855f7" size={0.4} />
        <NeuralNode position={[6, 2, 2]} color="#06b6d4" size={0.2} />
        <NeuralNode position={[-6, 2, -2]} color="#059669" size={0.2} />

        <SynapticPulses />
        <SynapticConnections />

        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      <div className="absolute top-8 left-8 z-10 pointer-events-none">
         <h2 className="text-4xl font-black text-white tracking-tighter uppercase">NEURAL UNIVERSE</h2>
         <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">SYNERGETIC BRAIN CLUSTER // LIVE RENDER</p>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
         <div className="px-3 py-1 border border-cyan-500/30 rounded-full text-[8px] text-cyan-500 font-mono uppercase bg-black/50">Nodes: 1.2M</div>
         <div className="px-3 py-1 border border-emerald-500/30 rounded-full text-[8px] text-emerald-500 font-mono uppercase bg-black/50">Pulses: ACTIVE</div>
      </div>
    </div>
  );
};

export default ThreeTree;
