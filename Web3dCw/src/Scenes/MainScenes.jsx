import { Environment, OrbitControls } from "@react-three/drei";
import { Ferrari } from "../models/Ferrari";



export const MainScene = () => {



  return (
    <>

          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <OrbitControls/>
          <Ferrari/>
    </>
  )}