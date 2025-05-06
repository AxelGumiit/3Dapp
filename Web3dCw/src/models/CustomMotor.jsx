import React, { useRef, useEffect } from 'react';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

const CustomMotorModel = ({ selectedColor }) => {
  const { scene } = useGLTF('/models/CustomMotor.glb');
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
      scale={[8, 8, 8]}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]} 
    />
  );
};

const CustomMotor = ({ selectedColor }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [20, 20, 20], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <CustomMotorModel selectedColor={selectedColor} />
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default CustomMotor;
