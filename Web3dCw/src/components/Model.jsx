import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ModelsPage = () => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [hoveredModel, setHoveredModel] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToolTip(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [showToolTip]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black px-6 py-12">
      <h2 className="text-5xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Explore Car Models
      </h2>
      <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl">
        Dive into the details of some of the most iconic car and bike models. Discover your perfect ride in a high-tech, immersive way.
      </p>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20} // space between slides
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-4xl"
      >
        {/* Car Model 1 */}
        <SwiperSlide>
          <div
            className="relative w-full h-80 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-2xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => {
              setHoveredModel("ferrari");
              setShowToolTip(true);
            }}
            onMouseLeave={() => setHoveredModel("")}
          >
            <div className="absolute top-6 left-6 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm opacity-90">
              {hoveredModel === "ferrari" && showToolTip && (
                <span>Ferrari: A symbol of speed, luxury, and precision engineering.</span>
              )}
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-semibold tracking-wide text-shadow-lg">
                Ferrari
              </h3>
              <p className="text-sm text-gray-300 mt-2">A high-performance luxury sports car.</p>
              <Link
                to="/models/car1"
                className="text-sm text-yellow-400 hover:text-yellow-500 font-semibold mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Car Model 2 */}
        <SwiperSlide>
          <div
            className="relative w-full h-80 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-2xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => {
              setHoveredModel("mustang");
              setShowToolTip(true);
            }}
            onMouseLeave={() => setHoveredModel("")}
          >
            <div className="absolute top-6 left-6 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm opacity-90">
              {hoveredModel === "mustang" && showToolTip && (
                <span>Mustang: Classic American muscle car, raw power and performance.</span>
              )}
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-semibold tracking-wide text-shadow-lg">
                Mustang
              </h3>
              <p className="text-sm text-gray-300 mt-2">American muscle with aggressive styling.</p>
              <Link
                to="/models/car2"
                className="text-sm text-yellow-400 hover:text-yellow-500 font-semibold mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Car Model 3 */}
        <SwiperSlide>
          <div
            className="relative w-full h-80 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-2xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => {
              setHoveredModel("kawasaki");
              setShowToolTip(true);
            }}
            onMouseLeave={() => setHoveredModel("")}
          >
            <div className="absolute top-6 left-6 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm opacity-90">
              {hoveredModel === "kawasaki" && showToolTip && (
                <span>Kawasaki Ninja H2R: A high-performance motorcycle with unmatched speed.</span>
              )}
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-semibold tracking-wide text-shadow-lg">
                Kawasaki Ninja H2R
              </h3>
              <p className="text-sm text-gray-300 mt-2">An unrivaled motorcycle for speed enthusiasts.</p>
              <Link
                to="/models/car3"
                className="text-sm text-yellow-400 hover:text-yellow-500 font-semibold mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Responsive Styling */}
      <style jsx>{`
        /* For smaller screens (mobile) */
        @media (max-width: 768px) {
          .text-5xl {
            font-size: 2rem;
          }
          .text-lg {
            font-size: 1rem;
          }
          .h-80 {
            height: 250px;
          }
          .w-full {
            width: 100%;
          }
          .max-w-4xl {
            max-width: 100%;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
          .text-shadow-lg {
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
          }
        }

        /* For very small screens (smaller than 480px) */
        @media (max-width: 480px) {
          .h-80 {
            height: 200px;
          }
          .text-3xl {
            font-size: 1.25rem;
          }
          .text-sm {
            font-size: 0.875rem;
          }
          .mb-12 {
            margin-bottom: 6px;
          }
          .mb-6 {
            margin-bottom: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default ModelsPage;
