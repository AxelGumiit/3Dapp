import React, { useState, useEffect } from 'react';

const About = () => {
  const [showButton, setShowButton] = useState(false);
  const [showDownButton, setShowDownButton] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setShowButton(scrollTop > 300);
      setShowDownButton(scrollTop + windowHeight < docHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const openModal = (src) => setModalImage(src);

  return (
    <div className="max-h-screen flex flex-col bg-gray-100 relative">
      <div className="flex-col overflow-y-scroll p-4 sm:p-6">
        <div className="max-w-10xl mx-auto bg-white rounded-lg shadow-md mt-8 mb-12 p-6">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          </header>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              My 3D car showroom is an interactive platform that allows users to explore, customize, and learn different information about the car. The aim is to provide a cutting-edge experience by incorporating realistic 3D models, smooth animations, and engaging interactivity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">Design Decisions and Choices</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              I have made strategic use of modern web technologies to create a seamless and engaging user experience. Here's an overview of the key design choices and decisions:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">React Three Fiber</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              React Three Fiber is a React renderer for Three.js, allowing me to integrate interactive 3D models directly into my app. It enables declarative control of the 3D environment, such as handling the 3D car models, camera views, and interactivity.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
              <li>Efficient integration of 3D models within the React ecosystem.</li>
              <li>Real-time physics using @react-three/rapier to provide lifelike interactions.</li>
              <li>Declarative control of 3D animations and transitions using React state.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Tailwind CSS</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Tailwind CSS enables rapid and responsive design with utility-first classes that make the UI customizable and fluid. I utilized Tailwind to ensure that the design adapts perfectly across devices, from mobile to desktop.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
              <li>Responsive layouts using Tailwind’s grid and flex utilities to ensure a seamless experience across devices.</li>
              <li>Dynamic button styling and transitions to enhance interactivity.</li>
              <li>Utilization of Tailwind's utility classes to optimize both UI design and performance.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8">Interactive Features</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              The platform allows for dynamic interactivity through the use of React's state management in combination with React Three Fiber for real-time updates to the 3D models. For example, users can rotate and zoom in on car models or switch between different camera angles to explore the showroom.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">3D Models</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Creating 3D models in Blender involves several steps.
              <ul className=" mt-3">
                <li>
                  I used Blender to create these models. I used a blueprint to trace the body part of the vehicle, which I got from a drawing database where different car blueprints exist. You can find such databases, like <a href="https://www.the-blueprints.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">The Blueprints</a>, which offer a variety of vehicle blueprints for 3D modeling. I used a cube and added a mirror array for it in order to model the car body parts. To create the garage theme on the homepage, I used some assets like the toolbox and the workbench from <a href="https://poly.pizza/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Poly Pizza</a>.
                </li>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                  <li>Toolbox by Jesus Navas Aller [CC-BY] via Poly Pizza</li>
                  <li>Workbench by sirkitree [CC-BY] via Poly Pizza</li>
                </ul>

              </ul>
            </p>
            <div className="mt-6 transition-transform transform hover:scale-105 cursor-pointer">
              <img 
                src="/images/blender.png" 
                alt="Blender 3D Model" 
                className="w-full= h-auto rounded-md shadow-lg"
              />
            </div>

            <div className="mt-6 transition-transform transform hover:scale-105 cursor-pointer">
              <img 
                src="/images/home.png" 
                alt="Garage Model" 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>

            <div className="mt-6">
              <h2 className="text-3xl font-semibold text-gray-800">Sound Effect</h2>
              <p className="text-gray-700 mt-3 leading-relaxed">
                The car engine sound effect used in this project was sourced from 
                <a href="https://artlist.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-1">Artlist.io</a>. This high-quality sound effect enhances the realism of the car showroom experience, providing an immersive environment that mimics the sound of a real engine in motion.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-medium text-gray-800">How to Interact</h3>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  To hear the car engine sound, simply click on the "Play Engine sound" button in the showroom.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">Testing</h2>

        
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">Mobile Integration</h2>

            <div className="flex flex-row justify-center items-center space-x-10 mt-10">
              <div className="transition-transform transform hover:scale-105 cursor-pointer">
                <img 
                  src="/images/mb1.png" 
                  alt="Blender 3D Model 1" 
                  className="w-lg h-auto rounded-md shadow-lg"
                />
              </div>

              <div className="transition-transform transform hover:scale-105 cursor-pointer">
                <img 
                  src="/images/mb2.png" 
                  alt="Blender 3D Model 2" 
                  className="w-lg h-auto rounded-md shadow-lg"
                />
              </div>

              <div className="transition-transform transform hover:scale-105 cursor-pointer">
                <img 
                  src="/images/mb3.png" 
                  alt="Blender 3D Model 3" 
                  className="w-lg h-auto rounded-md shadow-lg"
                />
              </div>
            </div>

            
        
              <h2 className="text-3xl font-semibold text-gray-800 mt-20">Interactive Features</h2>
                <h2 className="text-xl font-semibold text-gray-800 mt-4 leading-relaxed">Customizing the color of the car</h2>
                
                <video className="w-full mt-6" controls>
                  <source src="/videos/custom.webm" type="video/webm" />
                </video>
                <h2 className="text-xl font-semibold text-gray-800 mt-4 leading-relaxed">Car slider</h2>
                
                <video className="w-full mt-6" controls>
                  <source src="/videos/slider.webm" type="video/webm" />
                </video>
                <h2 className="text-xl font-semibold text-gray-800 mt-4 leading-relaxed">Toggle Wireframe & Toggle Day and Night</h2>
                
                <video className="w-full mt-6" controls>
                  <source src="/videos/wireframe.webm" type="video/webm" />
                </video>
                <h2 className="text-xl font-semibold text-gray-800 mt-4 leading-relaxed">Orbit control and Onclick</h2>
                
                <video className="w-full mt-6" controls>
                  <source src="/videos/orbitcontrol.webm" type="video/webm" />
                </video>
              </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800">Future Improvement</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              I aim to further enhance the platform by integrating different features such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
              <li>Augmented reality (AR) for a more immersive car buying experience.</li>
              <li>AI-driven car recommendations based on user preferences and behavior.</li>
              <li>Real-time syncing with dealership inventories to show live car availability.</li>
            </ul>
          </section>
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          aria-label="Scroll to top"
          type="button"
        >
          ↑
        </button>
      )}
      {showDownButton && (
        <button
          onClick={scrollDown}
          className="absolute bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          aria-label="Scroll down"
          type="button"
        >
          ↓
        </button>
      )}
    </div>
  );
};

export default About;
