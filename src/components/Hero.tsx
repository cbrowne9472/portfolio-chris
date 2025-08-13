import React from 'react';
import { Download, ChevronDown, Linkedin, Github } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="hero">
      {/* Animated stars background */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8 + 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text">
            <p className="greeting">Hello I'm</p>
            <h1 className="name">Christopher Browne</h1>
            <p className="title">Computer Science Student</p>
            <p className="email">cbrowne9472@gmail.com</p>
            
            <div className="hero-buttons">
              <a href="https://drive.google.com/file/d/1PMM2G0R9LfNxS53LhQ0Y6nTXZK-dd6fP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Download size={16} />
                View Resume
              </a>
              <button onClick={scrollToAbout} className="btn btn-primary">
                Let's Connect!
              </button>
            </div>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/cbrowne6" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
              <Linkedin size={28} />
              <span className="social-label">LinkedIn</span>
            </a>
            <a href="https://github.com/cbrowne9472" target="_blank" rel="noopener noreferrer" className="social-link github-link">
              <Github size={28} />
              <span className="social-label">GitHub</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-illustration">
            <div className="planet-container">
              <div className="heart-planet">
                <div className="planet-rings"></div>
              </div>
              <div className="ufo">
                <div className="ufo-body"></div>
                <div className="ufo-light"></div>
              </div>
              <div className="floating-elements">
                <div className="small-planet planet-1"></div>
                <div className="small-planet planet-2"></div>
                <div className="small-planet planet-3"></div>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <button onClick={scrollToAbout} className="scroll-button">
              <span>Scroll Down</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll hint at bottom */}
      <div className="scroll-hint">
        Scroll to explore
      </div>
    </div>
  );
};

export default Hero;
