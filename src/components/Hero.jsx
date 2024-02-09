import React from 'react';

function Hero() {
  return (
    <div className="bg-blue-200 text-white min-h-screen">
      <nav className="flex justify-between bg-blue-600 items-center px-[3vw] py-4">
        <h1 className="text-xl font-bold">Figma Gallery</h1>
        <div>
          <a href="#" className="px-4 py-2 hover:bg-blue-700 transition-colors duration-300">Home</a>
          <a href="#" className="px-4 py-2 hover:bg-blue-700 transition-colors duration-300">Bank App</a>
        </div>
      </nav>
      <div>
        <h2 className="text-4xl font-bold text-center mt-20">Welcome to My Figma Gallery</h2>
      </div>
    </div>
  );
}

export default Hero;
