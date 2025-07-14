import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen terminal-bg">
      <AnimatedBackground />
      {/* Matrix-style background effect */}
      <div className="matrix-bg">
        <div className="scan-line"></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;