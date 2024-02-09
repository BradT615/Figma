import React from 'react';
import Hero from './components/Hero';
import BankApp from './components/BankApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BankApp />
      <Footer />
    </div>
  );
}

export default App;
