'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RibbonGeometry() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef1.current) {
      meshRef1.current.rotation.x += delta * 0.2;
      meshRef1.current.rotation.y += delta * 0.2;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x += delta * 0.2;
      meshRef2.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef1}>
        <torusKnotGeometry args={[1.8, 0.5, 128, 8]} />
        <meshBasicMaterial color="#1A1A1A" />
      </mesh>
      <mesh ref={meshRef2}>
        <torusKnotGeometry args={[1.8, 0.5, 128, 8]} />
        <meshBasicMaterial color="#1A1A1A" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

export function HeroRibbon() {
  return (
    <React.Suspense fallback={<div style={{ height: '520px' }} />}>
      <Canvas
        camera={{ position: [0, 0, 6] }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        style={{ width: '100%', height: '520px', background: 'transparent' }}
      >
        <RibbonGeometry />
      </Canvas>
    </React.Suspense>
  );
}
