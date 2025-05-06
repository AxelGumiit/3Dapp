import {
  CameraControls,
  Dodecahedron,
  Environment,
  Grid,
  Html,
  MeshDistortMaterial,
  OrbitControls,
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { slideAtom } from "./Overlay";
import { Scene } from "./Scene";

export const scenes = [
  {
    path: "models/ferrari_scene.glb",
    mainColor: "#f9c0ff",
    name: "Ferrari 812",
    description: "A stunning convertible supercar blending speed and style.",
    price: 293150,
    range: 340,
    engineSound: "/sounds/ferrari.mp3",  
  },
  {
    path: "models/mustang_scene.glb",
    mainColor: "#f9c0ff",
    name: "Ford Mustang",
    description: "An legendary American muscle car known for its aggressive design, thrilling performance, and unmistakable roar.",
    price: 42995, 
    range: 250,
    engineSound: "/sounds/mustang.mp3",  
  },
  {
    path: "models/Motor_scene.glb",
    mainColor: "#f9c0ff",
    name: "Kawasaki Ninja H2R",
    description: "The Ultimate Track-Only Supercharged Motorcycle",
    price: 55000,
    range: 310,
    engineSound: "/sounds/motor.wav",  
  },
];

const CameraHandler = ({ slideDistance }) => {
  const viewport = useThree((state) => state.viewport);
  const cameraControls = useRef();
  const [slide] = useAtom(slideAtom);
  const lastSlide = useRef(0);

  const { dollyDistance } = useControls({
    dollyDistance: {
      value: 10,
      min: 0,
      max: 50,
    },
  });

  const moveToSlide = async () => {
    await cameraControls.current.setLookAt(
      lastSlide.current * (viewport.width + slideDistance),
      3,
      dollyDistance,
      lastSlide.current * (viewport.width + slideDistance),
      0,
      0,
      true
    );
    await cameraControls.current.setLookAt(
      (slide + 1) * (viewport.width + slideDistance),
      1,
      dollyDistance,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );

    await cameraControls.current.setLookAt(
      slide * (viewport.width + slideDistance),
      0,
      5,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );
  };

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
        slide * (viewport.width + slideDistance),
        0,
        5,
        slide * (viewport.width + slideDistance),
        0,
        0
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [viewport]);

  useEffect(() => {
    if (lastSlide.current === slide) {
      return;
    }
    moveToSlide();
    lastSlide.current = slide;
  }, [slide]);

  return (
    <CameraControls
      ref={cameraControls}
      touches={{ one: 0, two: 0, three: 0 }}
      mouseButtons={{ left: 0, middle: 0, right: 0 }}
    />
  );
};

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const [slide] = useAtom(slideAtom);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });

  const [audio] = useState(() => new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  const playEngineSound = (soundPath) => {
    if (audio.src !== window.location.origin + soundPath) {
      audio.src = soundPath;
    }
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
  };

  // 🛠 Fix: Stop audio when slide changes
  useEffect(() => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  }, [slide]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <Environment preset={"city"} />
      <CameraHandler slideDistance={slideDistance} />

      {/* MAIN WORLD */}
      <group>
        <mesh position-y={viewport.height / 2 + 1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial color={scenes[0].mainColor} speed={3} />
        </mesh>

        <mesh
          position-x={viewport.width + slideDistance}
          position-y={viewport.height / 2 + 1.5}
        >
          <boxGeometry />
          <MeshDistortMaterial color={scenes[1].mainColor} speed={3} />
        </mesh>

        <Dodecahedron
          position-x={2 * (viewport.width + slideDistance)}
          position-y={viewport.height / 2 + 1.5}
        >
          <MeshDistortMaterial color={scenes[2].mainColor} speed={3} />
        </Dodecahedron>
      </group>

      <Grid
        position-y={-viewport.height / 2}
        sectionSize={1}
        sectionColor={"purple"}
        sectionThickness={1}
        cellSize={0.5}
        cellColor={"#6f6f6f"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
      />

      {scenes.map((scene, index) => (
        <mesh
          key={index}
          position={[index * (viewport.width + slideDistance), 0, 0]}
        >
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial toneMapped={false}>
            <RenderTexture attach="map">
              <Scene {...scene} />
            </RenderTexture>
          </meshBasicMaterial>
        </mesh>
      ))}

      {scenes.map((scene, index) => (
        <Html
          key={index}
          position={[
            index * (viewport.width + slideDistance),
            viewport.height / 2 - 1,
            2,
          ]}
          style={{
            position: "absolute",
            top: "-20vh",
            left: `calc(-45vw + ${index * (viewport.width + slideDistance)}px)`,
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => playEngineSound(scene.engineSound)}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
            className="absolute sm:relative sm:top-auto sm:left-auto sm:transform-none sm:translate-x-0 sm:translate-y-0"
          >
            🔊 Play Engine Sound
          </button>
        </Html>
      ))}
    </>
  );
};
