import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "GMU Course Planner: Full Stack Application",
      image: "/api/placeholder/300/200",
      description: "Full-stack web application for GMU students to evaluate course difficulty using RateMyProfessor data",
      github: "https://github.com/cbrowne9472",
      demo: "https://coursergmu.netlify.app"
    },
    {
      id: 2,
      title: "Driver Drowsiness Detection System",
      image: "/api/placeholder/300/200",
      description: "Real-time driver drowsiness detection using CNN model with 95% accuracy",
      github: "https://github.com/cbrowne9472/drowsiness-detector",
      demo: null
    },
    {
      id: 3,
      title: "MockMate: AI-Powered Interview Practice",
      image: "/api/placeholder/300/200",
      description: "AI-powered interview practice platform with Google Gemini API integration",
      github: "https://github.com/cbrowne9472/MockMateProj",
      demo: null
    }
  ];

  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-content">
        <div className="section-header">
          <p className="section-subtitle">My Recent Projects</p>
          <h2 className="section-title">Portfolio</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="card project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📱</div>
                    <p>{project.title}</p>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github size={16} />
                    Github
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
