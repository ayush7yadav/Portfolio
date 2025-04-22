import React from 'react';
import { Element } from 'react-scroll';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import LetsConnect from './pages/LetsConnect';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="letsconnect">
        <LetsConnect />
      </Element>
    </div>
  );
}

export default App;
