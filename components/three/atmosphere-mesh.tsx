"use client";

import * as THREE from "three";
import { useMemo } from "react";

const LIGHT_DIR = new THREE.Vector3(0.514, 0.441, 0.735);

export function AtmosphereMesh() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uLightDir: { value: LIGHT_DIR },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vWorldNormal;
          varying vec3 vViewDir;

          void main() {
            vNormal      = normalize(normalMatrix * normal);
            vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
            vec4 mvPos   = modelViewMatrix * vec4(position, 1.0);
            vViewDir     = normalize(-mvPos.xyz);
            gl_Position  = projectionMatrix * mvPos;
          }
        `,
        fragmentShader: `
          uniform vec3 uLightDir;

          varying vec3 vNormal;
          varying vec3 vWorldNormal;
          varying vec3 vViewDir;

          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 3.2);

            float NdotL    = clamp(dot(vWorldNormal, uLightDir), 0.0, 1.0);
            float lighting = mix(0.04, 1.0, NdotL);

            vec3 color = mix(vec3(0.35, 0.65, 1.0), vec3(0.15, 0.45, 1.0), fresnel);
            gl_FragColor = vec4(color, fresnel * lighting * 0.88);
          }
        `,
        transparent: true,
        depthWrite: false,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  return (
    <mesh scale={0.98} material={material}>
      <sphereGeometry args={[1, 64, 64]} />
    </mesh>
  );
}
