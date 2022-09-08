/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function Bubble({
  color,
  speed,
  scale,
  distort,
}: {
  color?: string;
  speed?: number;
  scale?: number;
  distort?: number;
}) {
  return (
    <Canvas>
      <ambientLight intensity={0.35} />
      <directionalLight position={[1, -4, -1]} />
      <Suspense fallback={null}>
        <Sphere visible args={[1, 100, 200]} scale={scale || 1.5}>
          <MeshDistortMaterial
            color={color || '#F4C430'}
            attach='material'
            distort={distort || 0.7}
            speed={speed || 0.7}
            roughness={0}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
}
