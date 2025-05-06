import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import CustomFerrari from "../models/CustomFerrari";
import Custom_Mustang from "../models/CustomMustang";
import CustomMotor from "../models/CustomMotor";

const CustomizePage = () => {
  const { carIndex } = useParams();
  const index = parseInt(carIndex, 10);

  const [selectedColor, setSelectedColor] = useState("red");
  const colors = ["red", "blue", "green", "gold", "white"];

  const carNames = ["Ferrari", "Mustang", "Motor"];

  const renderModel = () => {
    switch (index) {
      case 0:
        return <CustomFerrari selectedColor={selectedColor} />;
      case 1:
        return <Custom_Mustang selectedColor={selectedColor} />;
      case 2:
        return <CustomMotor selectedColor={selectedColor} />;
      default:
        return <p>Car not found</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Exit Button */}
      <Link
        to="/"
        className="absolute top-20 left-4 bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition z-10"
      >
        Exit
      </Link>

      {/* 3D Car Model */}
      <div className="w-full lg:w-2/3 h-[400px] lg:h-screen bg-white shadow-xl">
        {renderModel()}
      </div>

      {/* Customization Panel */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-10 max-h-[90vh] bg-gray-50 px-6 py-10 flex flex-col items-center overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Customize Your {carNames[index] || "Car"}
        </h1>

        <div className="flex flex-col items-center mb-10">
          <div
            className="w-36 h-36 rounded-lg shadow-md border border-gray-300"
            style={{ backgroundColor: selectedColor }}
          />
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Selected Color: <span className="capitalize">{selectedColor}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                selectedColor === color
                  ? "ring-4 ring-blue-400 scale-105"
                  : "hover:opacity-80"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;
