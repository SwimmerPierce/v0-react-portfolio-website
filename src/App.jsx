import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
