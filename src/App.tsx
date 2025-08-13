import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Leadership from './components/Leadership';
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Leadership />
      <Portfolio />
      <Navigation />
      <BackToTop />
    </div>
  );
}

export default App;
