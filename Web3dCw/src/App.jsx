import { Suspense, lazy, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Loader } from "@react-three/drei";
import ModelsPage from "./components/Model";
import Ferrari from "./models/Ferrari";
import Mustang from "./models/Mustang";
import { Experience } from "./components/Experience";
import Motor from "./models/Motor";
import { Overlay } from "./components/Overlay";
import About from "./components/About";
import StatementOfOriginality from "./components/StatementOfOriginality";
import CarCustomizationPage from "./components/Custom";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-md">
        <h1 className="text-xl font-bold">Car Showroom</h1>

        <div className="lg:hidden">
          <button className="text-2xl" onClick={toggleMenu}>
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>

        <ul
          className={`lg:flex gap-6 text-sm font-semibold ${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          <li>
            <a href="/" className="cursor-pointer hover:opacity-70">
              Home
            </a>
          </li>
          <li>
            <Link to="/models" className="hover:opacity-70">
              Models
            </Link>
          </li>
          <li>
            <Link
              to="/statement-of-originality"
              className="cursor-pointer hover:opacity-70"
            >
              Statement of Originality
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:opacity-70">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Leva hidden />

      <Routes>
        <Route path="/customize/:carIndex" element={<CarCustomizationPage />} />

        {/* Home Page (Lazy Loaded Canvas) */}
        <Route
          path="/"
          element={
            <>
              <Overlay/>
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
        <Route path="/models/car3" element={<Motor/>} />
        <Route
          path="/statement-of-originality"
          element={<StatementOfOriginality />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
