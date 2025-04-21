
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useMemo } from "react";
import { Html, useProgress } from "@react-three/drei";
import { MainScene } from "./Scenes/MainScenes";



function LoadingScreen() {
  const { progress } = useProgress(); 

  return (
    <Html center>
      <div 
        style={{
          fontSize: "2em",
          textAlign: "center",
          color: "#00ffcc", 
          fontFamily: "'Orbitron', sans-serif",
          textShadow: "0px 0px 20px rgba(0, 255, 204, 0.8)",
        }}
      >
        <div style={{ 
          fontSize: "3em", 
          marginBottom: "20px", 
          color: "#ff00ff", 
          textShadow: "0px 0px 30px rgba(255, 0, 255, 0.8)" 
        }}>
          Loading... {Math.round(progress)}%
        </div>
        <div 
          style={{ 
            width: "100%", 
            height: "20px", 
            backgroundColor: "#333", 
            borderRadius: "10px", 
            boxShadow: "0 0 10px rgba(0, 255, 204, 0.5)" 
          }}
        >
          <div 
            style={{
              width: `${progress}%`, 
              height: "100%", 
              backgroundColor: "#00ffcc", 
              borderRadius: "10px", 
              boxShadow: "0 0 15px rgba(0, 255, 204, 1)", 
            }} 
          />
        </div>
      </div>
    </Html>
  );
}

function App() {
  const [startLoading, setStartLoading] = useState(false);

  const handleStartClick = () => {
    setStartLoading(true);
  };

  return (
      <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: '#121212', overflow: 'hidden' }}>
      {!startLoading && (
        <div 
          style={{
            position: "absolute", 
            top: "50%",  
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            textAlign: "center", 
            color: "#fff", 
            fontSize: "2rem",
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0 0 10px #00ffff, 0 0 20px #ff00ff",
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem", 
              marginBottom: "20px", 
              color: "#00ffcc", 
              textShadow: "0 0 15px rgba(0, 255, 204, 0.8)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Welcome to My Car Showroom
          </h1>
          <p
            style={{
              fontSize: "1.5rem", 
              marginBottom: "30px", 
              color: "#fff", 
              textShadow: "0 0 10px rgba(0, 255, 204, 0.5)",
              letterSpacing: "1px",
            }}
          >

          </p>
          <button
            onClick={handleStartClick}
            style={{
              padding: "20px 40px", 
              fontSize: "1.5rem", 
              backgroundColor: "#ff0055", 
              color: "#fff", 
              border: "none", 
              borderRadius: "10px", 
              cursor: "pointer", 
              boxShadow: "0 0 20px rgba(255, 0, 85, 0.7)",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => e.target.style.boxShadow = "0 0 30px rgba(255, 0, 85, 1)"}
            onMouseLeave={(e) => e.target.style.boxShadow = "0 0 20px rgba(255, 0, 85, 0.7)"}
          >
            Start Exploring
          </button>
        </div>
      )}

      {startLoading && (
          <Canvas shadows camera={{ position: [-9, 5, 15], fov: 25 }}>
            {/* Futuristic Background */}
            <color attach="background" args={["#121212"]} /> 

            {/* Light and reflections */}
            <ambientLight intensity={1} color="#00ffcc" />
            <directionalLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
            
            <Suspense fallback={<LoadingScreen />}>
              <Physics debug>
                <MainScene/>
              </Physics>
            </Suspense>
          </Canvas>
      )}
    </div>
  );
}

export default App;
