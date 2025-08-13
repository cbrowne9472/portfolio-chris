import React from 'react';
import { Check } from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-content">
        <div className="section-header">
          <p className="section-subtitle">What Skills I Have</p>
          <h2 className="section-title">My Experience</h2>
        </div>

        <div className="skills-grid">
          <div className="card skill-card">
            <h3>Programming Languages</h3>
            <ul className="skills-list">
              <li>
                <Check size={16} />
                Java
              </li>
              <li>
                <Check size={16} />
                Python
              </li>
              <li>
                <Check size={16} />
                JavaScript
              </li>
              <li>
                <Check size={16} />
                C
              </li>
            </ul>
          </div>

          <div className="card skill-card">
            <h3>Frameworks & Libraries</h3>
            <div className="skills-columns">
              <div className="skills-column">
                <ul className="skills-list">
                  <li>
                    <Check size={16} />
                    Spring Boot
                  </li>
                  <li>
                    <Check size={16} />
                    ReactJS
                  </li>
                  <li>
                    <Check size={16} />
                    Flask
                  </li>
                  <li>
                    <Check size={16} />
                    GraphQL
                  </li>
                  <li>
                    <Check size={16} />
                    Material-UI
                  </li>
                </ul>
              </div>
              <div className="skills-column">
                <ul className="skills-list">
                  <li>
                    <Check size={16} />
                    OpenCV
                  </li>
                  <li>
                    <Check size={16} />
                    TensorFlow
                  </li>
                  <li>
                    <Check size={16} />
                    Keras
                  </li>
                  <li>
                    <Check size={16} />
                    NumPy
                  </li>
                  <li>
                    <Check size={16} />
                    JWT
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card skill-card">
            <h3>Cloud & DevOps</h3>
            <div className="skills-columns">
              <div className="skills-column">
                <ul className="skills-list">
                  <li>
                    <Check size={16} />
                    AWS EC2
                  </li>
                  <li>
                    <Check size={16} />
                    AWS RDS
                  </li>
                  <li>
                    <Check size={16} />
                    AWS S3
                  </li>
                  <li>
                    <Check size={16} />
                    AWS Lambda
                  </li>
                </ul>
              </div>
              <div className="skills-column">
                <ul className="skills-list">
                  <li>
                    <Check size={16} />
                    AWS CloudWatch
                  </li>
                  <li>
                    <Check size={16} />
                    Docker
                  </li>
                  <li>
                    <Check size={16} />
                    CI/CD
                  </li>
                  <li>
                    <Check size={16} />
                    Auto Scaling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card skill-card">
            <h3>Databases & Tools</h3>
            <div className="skills-columns">
              <div className="skills-column">
                <ul className="skills-list">
                  <li>
                    <Check size={16} />
                    PostgreSQL
                  </li>
                  <li>
                    <Check size={16} />
                    MongoDB
                  </li>
                  <li>
                    <Check size={16} />
                    DynamoDB
                  </li>
                  <li>
                    <Check size={16} />
                    Postman
                  </li>
                </ul>
              </div>
              <div className="skills-column">
                <ul className="skills-list">
                  <li>
                    <Check size={16} />
                    RESTful APIs
                  </li>
                  <li>
                    <Check size={16} />
                    Multi-threading
                  </li>
                  <li>
                    <Check size={16} />
                    Real-time Systems
                  </li>
                  <li>
                    <Check size={16} />
                    Audio/Video Processing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
