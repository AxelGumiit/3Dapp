import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Motor Model Component
const MotorModel = ({ wireframe, onClick, isMobile, isDay }) => {
  const { scene } = useGLTF('/models/Motor.glb');
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.wireframe = wireframe;
      }
    });
  }, [scene, wireframe]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      modelRef.current.scale.setScalar(isMobile ? 3 : hovered ? 6 : 5);
    }
  });

  return (
    <group ref={modelRef}>
      <primitive
        object={scene}
        position={[0, -1, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      />

 
      {!isDay && (
        <>  
          <mesh position={[0, -1, 0]}>
            <boxGeometry args={[2, 0.05, 4]} />
            <meshStandardMaterial 
              color="red" 
              emissive="red" 
              emissiveIntensity={5} 
              toneMapped={false} 
            />
          </mesh>

          <pointLight 
            position={[0, -0.9, 0]} 
            intensity={2} 
            color="red" 
            distance={5} 
            decay={2} 
          />

        </>
      )}
    </group>
  );
};

const Motor = () => {
  const [wireframe, setWireframe] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [carInfo, setCarInfo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/car-info/3');
        const data = await response.json();
        setCarInfo(data);
      } catch (error) {
        console.error('Error fetching car info:', error);
      }
    };

    fetchCarInfo();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative w-full h-screen ${isDay ? 'bg-white' : 'bg-black'} transition-colors duration-500`}>
      <div className="absolute top-20 left-4 z-10 flex flex-col gap-4">
        <button
          onClick={() => setWireframe((prev) => !prev)}
          className="bg-black text-white px-4 py-2 rounded shadow"
        >
          Toggle Wireframe
        </button>
        <button
          onClick={() => setIsDay((prev) => !prev)}
          className="bg-black text-white px-4 py-2 rounded shadow"
        >
          Toggle Day/Night
        </button>
      </div>

      {showInfo && carInfo && (
        <div className={`absolute bottom-10 left-10 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-lg
          ${isMobile ? 'w-[70vw] h-[30vh]' : 'w-[30vw] h-[40vh]'} z-10 transform hover:scale-105 transition-all duration-300`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">{carInfo.name}</h2>
          <p className="text-white text-base sm:text-lg md:text-xl"><strong>Top speed:</strong> {carInfo.top_speed}</p>
          <p className="text-white text-base sm:text-lg md:text-xl"><strong>0–60 mph:</strong> {carInfo.acceleration}</p>
          <p className="text-white text-base sm:text-lg md:text-xl"><strong>Engine:</strong> {carInfo.engine}</p>
          <p className="text-white text-base sm:text-lg md:text-xl"><strong>Horsepower:</strong> {carInfo.horsepower}</p>
          <button
            onClick={() => setShowInfo(false)}
            className="mt-4 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-200"
          >
            Close
          </button>
        </div>
      )}

      <Canvas
        camera={{
          position: isMobile ? [5, 5, 5] : [20, 20, 20],
          fov: isMobile ? 100 : 50,
        }}
      >
        <ambientLight intensity={isDay ? 0.8 : 0.1} />
        <directionalLight position={[5, 5, 5]} intensity={isDay ? 1.2 : 0.2} />

        {!isDay && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />}

        <MotorModel
          wireframe={wireframe}
          onClick={() => setShowInfo(true)}
          isMobile={isMobile}
          isDay={isDay}
        />

        {!isDay && (
          <EffectComposer>
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={1.5} />
          </EffectComposer>
        )}

        <OrbitControls />
        <Environment preset={isDay ? 'sunset' : 'night'} />
      </Canvas>
    </div>
  );
};

export default Motor;
