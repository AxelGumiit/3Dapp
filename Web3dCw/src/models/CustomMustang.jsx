import React, { useRef, useEffect } from 'react';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

const CustomMustang = ({ selectedColor }) => {
  const { scene } = useGLTF('/models/CustomMustang.glb');
  const modelRef = useRef();

  useEffect(() => {

    scene.traverse((child) => {
      if (child.isMesh && child.material) {

        child.material.color.set(selectedColor);
        child.material.needsUpdate = true; 
      }
    });
  }, [scene, selectedColor]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; 
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[6, 6, 6]}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]} 
    />
  );
};

const Custom_Mustang = ({ selectedColor }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [20, 20, 20], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <CustomMustang selectedColor={selectedColor} />
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Custom_Mustang;
