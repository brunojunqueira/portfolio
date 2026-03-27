"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { AtmosphereMesh } from "./atmosphere-mesh";
import { useFrame, useThree } from "@react-three/fiber";

export function EarthMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { viewport } = useThree();

  const targetX = Math.max(0, Math.min(1.5, (viewport.width - 3) * 0.75));

  const [colorMap, topoMap] = useTexture([
    "/textures/earth.jpg",
    "/textures/topography.jpg",
  ]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
    }
    if (groupRef.current) {
      groupRef.current.position.x +=
        (targetX - groupRef.current.position.x) * Math.min(1, delta * 6);
    }
  });

  return (
    <group ref={groupRef} position={[targetX, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial
          map={colorMap}
          bumpMap={topoMap}
          bumpScale={0.06}
          displacementMap={topoMap}
          displacementScale={0.02}
          displacementBias={-0.035}
          roughness={0.74}
          metalness={0}
        />
      </mesh>
      <AtmosphereMesh />
    </group>
  );
}
