import React from 'react';

const StatementOfOriginality = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 max-w-2xl mx-auto font-sans bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl text-center text-gray-800 mb-8">Statement of Originality</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I hereby declare that the content presented in this project is my original work. Any references or inspirations used
          throughout have been properly credited and cited. I understand the importance of academic integrity and have made every
          effort to ensure that the project is a product of my own creativity and effort.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          If any external sources were used, they are acknowledged and cited accordingly. This project is submitted in adherence
          to the guidelines provided, and I take full responsibility for the content and its originality.
        </p>
        <p className="mt-12 text-lg italic text-gray-800 text-center">Signature: Axel Gumiit</p>
        <p className="text-lg text-gray-800 text-center">Date: 7th of May 2025</p>
      </div>
    </div>
  );
};

export default StatementOfOriginality;
