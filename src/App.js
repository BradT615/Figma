import React from 'react';
import Hero from './components/Hero';
import BankApp from './components/BankApp/BankApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <BankApp />
      <Footer />
    </div>
  );
}

export default App;