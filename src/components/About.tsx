import React from 'react';
import { GraduationCap, Code, Mail } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className="about-left">
          <div className="about-illustration">
            <div className="avatar-container">
              <div className="avatar">
                <div className="avatar-face">
                  <div className="avatar-eyes">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                  </div>
                  <div className="avatar-smile"></div>
                </div>
              </div>
              <div className="solar-system-box">
                <div className="box-border">
                  <div className="sun"></div>
                  <div className="planet mercury"></div>
                  <div className="planet venus"></div>
                  <div className="planet earth"></div>
                  <div className="planet mars"></div>
                  <div className="planet jupiter"></div>
                  <div className="planet saturn"></div>
                  <div className="planet uranus"></div>
                  <div className="planet neptune"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="section-header">
            <p className="section-subtitle">Get To Know</p>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-text">
            <p>
              Hello! I'm Christopher Browne, a passionate Computer Science student at George Mason University 
              with a strong foundation in full-stack development, cloud computing, and AI/ML technologies. 
              I'm currently working as an Undergraduate Teaching Assistant, helping students master Python 
              programming while pursuing my degree with a 3.97 GPA.
            </p>
          </div>

          <div className="about-cards">
            <div className="card education-card">
              <div className="card-header">
                <GraduationCap size={24} />
                <h3>Education</h3>
              </div>
              <div className="card-content">
                <p className="degree">Bachelor of Science, Computer Science</p>
                <p className="university">George Mason University</p>
                <p className="graduation">Expected: May 2027</p>
                <p className="gpa">GPA: 3.97/4.0</p>
                <p className="location">Fairfax, VA</p>
              </div>
            </div>

            <div className="card skills-card">
              <div className="card-header">
                <Code size={24} />
                <h3>Core Skills</h3>
                </div>
              <div className="card-content">
                <p>Full Stack Web Development</p>
                <p>Cloud Deployment (AWS)</p>
                <p>AI/ML & Computer Vision</p>
                <p>RESTful API Development</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <a href="mailto:cbrowne9472@gmail.com" className="btn btn-primary">
              <Mail size={16} />
              Let's Talk!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
