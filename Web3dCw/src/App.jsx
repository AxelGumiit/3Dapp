import { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Loader } from "@react-three/drei";
import ModelsPage from "./components/Model";
import Ferrari from "./models/Ferrari";
import Mustang from "./models/Mustang";
import Motor from "./models/Motor";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";
import About from "./components/About";
import StatementOfOriginality from "./components/StatementOfOriginality";
import CarCustomizationPage from "./components/Custom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar/>

      <Leva hidden />

      <Routes>
        <Route path="/customize/:carIndex" element={<CarCustomizationPage />} />

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Overlay />
              <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
                <color attach="background" args={["#ececec"]} />
                <Suspense fallback={null}>
                  <Experience />
                </Suspense>
              </Canvas>
              <Loader />
            </>
          }
        />

        <Route path="/models" element={<ModelsPage />} />
        <Route path="/models/car1" element={<Ferrari />} />
        <Route path="/models/car2" element={<Mustang />} />
        <Route path="/models/car3" element={<Motor />} />
        <Route path="/statement-of-originality" element={<StatementOfOriginality />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
