import React, { useState, useEffect } from 'react';

const About = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gray-100 py-12 px-4 min-h-screen flex justify-center items-start overflow-y-auto">
      <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md mt-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">About Us</h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Statement of Originality</h2>
          <p className="text-gray-600 mt-2">
            All the work and ideas presented in this project are original and created by our team. I uphold high standards of integrity and innovation, ensuring that our solutions are built from scratch, with proper licensing for any external resources used.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">My Car Showroom</h2>
          <p className="text-gray-600 mt-2">
            My interactive car showroom offers users an immersive experience where they can explore, customize, and even test drive cars in a virtual environment. Whether you're interested in electric vehicles, sports cars, or luxury models, our platform provides detailed specs, 360° views, and real-time comparisons.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Technologies I Use</h2>
          <p className="text-gray-600 mt-2">
            I leverage modern web technologies such as React, Three.js, React Three Fiber, and @react-three/rapier for realistic 3D physics and interactivity. This ensures a smooth and engaging experience across devices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Future Vision</h2>
          <p className="text-gray-600 mt-2">
            I aim to integrate augmented reality (AR), AI-driven car recommendations, and real-time dealership inventory syncing to further enhance the online car buying journey. Our goal is to revolutionize how people shop for cars using cutting-edge technology.
          </p>
        </section>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default About;
