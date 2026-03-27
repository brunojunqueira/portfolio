"use client";

import { Suspense } from "react";
import { StarField } from "./star-field";
import { EarthMesh } from "./earth-mesh";
import { Canvas } from "@react-three/fiber";

export function EarthScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.08} />
      <directionalLight position={[5, 3, 5]} intensity={10.0} color="#fff8f0" />
      <Suspense fallback={null}>
        <StarField />
        <EarthMesh />
      </Suspense>
    </Canvas>
  );
}
