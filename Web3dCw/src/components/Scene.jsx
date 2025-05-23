import {
  AccumulativeShadows,
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  Sphere,
  useGLTF,
} from "@react-three/drei";

import * as THREE from "three";
import React, { useEffect } from "react";
import { DEG2RAD } from "three/src/math/MathUtils";

export const Scene = ({ mainColor, path, ...props }) => {
  const { nodes, scene } = useGLTF(path);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  const ratioScale = Math.min(1.2, Math.max(0.5, window.innerWidth / 1920));

  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <group {...props} dispose={null}>
        <PerspectiveCamera makeDefault position={[3, 3, 8]} near={0.5} />
        <OrbitControls
          autoRotate
          enablePan={false}
          maxPolarAngle={DEG2RAD * 75}
          minDistance={6}
          maxDistance={10}
          autoRotateSpeed={0.5}
        />
        <primitive object={scene} scale={ratioScale} />
        <ambientLight intensity={0.1} color="pink" />

        <AccumulativeShadows
          frames={100}
          alphaTest={0.9}
          scale={30}
          position={[0, -0.005, 0]}
          color="pink"
          opacity={0.8}
        >
          <RandomizedLight
            amount={4}
            radius={9}
            intensity={0.8}
            ambient={0.25}
            position={[10, 5, 15]}
          />
          <RandomizedLight
            amount={4}
            radius={5}
            intensity={0.5}
            position={[-5, 5, 15]}
            bias={0.001}
          />
        </AccumulativeShadows>

        <Environment blur={0.8} background>
          <Sphere scale={15}>
            <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
          </Sphere>

          <Lightformer
            position={[5, 0, -5]}
            form="rect"
            intensity={1}
            color="red"
            scale={[3, 5]}
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[-5, 0, 1]}
            form="circle"
            intensity={1}
            color="green"
            scale={[2, 5]}
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[0, 5, -2]}
            form="ring"
            intensity={0.5}
            color="orange"
            scale={[10, 5]}
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[0, 0, 5]}
            form="rect"
            intensity={1}
            color="purple"
            scale={[10, 5]}
            target={[0, 0, 0]}
          />
        </Environment>
      </group>
    </>
  );
};

useGLTF.preload("/models/ferrari_scene.glb");
useGLTF.preload("/models/mustang_scene.glb");
useGLTF.preload("/models/motor_scene.glb");
