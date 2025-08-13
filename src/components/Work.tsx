import React from 'react';
import './Work.css';

const Work: React.FC = () => {
  return (
    <div id="work" className="work">
      <div className="work-content">
        <div className="section-header">
          <p className="section-subtitle">My professional experience</p>
          <h2 className="section-title">Work</h2>
        </div>

        <div className="work-experience">
          <div className="card work-card">
            <div className="company-logo">
              <div className="gmu-logo">
                <div className="gmu-circle">
                  <span>GMU</span>
                </div>
              </div>
            </div>
            <div className="company-info">
              <h3 className="company-name">George Mason University</h3>
              <p className="role-dates">Undergraduate Teaching Assistant | January 2024 - Present</p>
              <ul className="achievements">
                <li>
                  Teach Python labs to <strong>40-50 students</strong>, offering hands-on guidance and reinforcing coding concepts
                </li>
                <li>
                  Mentor students on assignments, debugging, and technical implementation
                </li>
                <li>
                  Support class engagement by addressing questions on the Piazza discussion forum
                </li>
              </ul>
            </div>
          </div>

          <div className="card work-card">
            <div className="company-logo">
              <div className="gmu-logo">
                <div className="gmu-circle">
                  <span>GMU</span>
                </div>
              </div>
            </div>
            <div className="company-info">
              <h3 className="company-name">George Mason University</h3>
              <p className="role-dates">Athletic Event Staff | September 2023 - Present</p>
              <ul className="achievements">
                <li>
                  Support setup, breakdown, and operations for collegiate sporting events as part of a <strong>6-person team</strong>
                </li>
                <li>
                  Collaborate across departments to ensure smooth events and a positive spectator experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
