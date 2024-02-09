import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full py-5 px-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Figma Gallery. All designs are the property of their respective owners.</p>
        <p>This portfolio showcases my skills in transforming Figma designs into functional code. Each project is a tribute to the original designers and a demonstration of my coding capabilities.</p>
      </div>
    </footer>
  );
}

export default Footer;
