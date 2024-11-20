import React from "react";
import '../styles/skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <section className="skills-section">
        <div className="skills-content">
          <div className="skills-header">
            <h2 className="skills-subtitle">SKILLS</h2>
            <h1 className="skills-title">My Skills</h1>
          </div>
          
          {/* HTML Skill */}
          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="skill-name">HTML</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '70%' }}></div>
              </div>
              <p className="progress-text">70%</p>
            </div>
          </div>

          {/* CSS Skill */}
          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="skill-name">CSS</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
              <p className="progress-text">60%</p>
            </div>
          </div>

          {/* JavaScript Skill */}
          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="skill-name">JavaScript</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '50%' }}></div>
              </div>
              <p className="progress-text">50%</p>
            </div>
          </div>

          {/* Next JS Skill */}
          <div className="skill-item">
            <div className="skill-header">
              <div className="skill-icon">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="skill-name">NEXT JS</h2>
            </div>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '50%' }}></div>
              </div>
              <p className="progress-text">50%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Skills;