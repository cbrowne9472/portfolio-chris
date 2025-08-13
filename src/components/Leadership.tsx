import React from 'react';
import './Leadership.css';

const Leadership: React.FC = () => {
  return (
    <div id="leadership" className="leadership">
      <div className="leadership-content">
        <div className="section-header">
          <h2 className="section-title">Honors & Awards</h2>
        </div>

        <div className="leadership-experience">
          <div className="card leadership-card">
            <div className="leadership-info">
              <h3 className="organization-name">Dean's List</h3>
              <p className="role-dates">George Mason University | Fall 2023 - Spring 2025</p>
              <ul className="responsibilities">
                <li>
                  Consistently maintained academic excellence with a <strong>3.97 GPA</strong> across multiple semesters
                </li>
                <li>
                  Recognized for outstanding academic performance in Computer Science coursework
                </li>
              </ul>
            </div>
          </div>

          <div className="card leadership-card">
            <div className="leadership-logo">
              <div className="certification-logo">
                <div className="cert-icon">✓</div>
              </div>
            </div>
            <div className="leadership-info">
              <h3 className="organization-name">Professional Certifications</h3>
              <p className="role-dates">Current Certifications</p>
              <ul className="responsibilities">
                <li>
                  <strong>Java SE 8 Oracle Certified Associate (OCA)</strong> - Demonstrating proficiency in Java programming fundamentals
                </li>
                <li>
                  <strong>AWS Certified Cloud Practitioner</strong> - Validating cloud computing knowledge and AWS services expertise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
