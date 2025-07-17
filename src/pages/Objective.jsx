import React, { useState, useEffect } from 'react';
import './Objective.css';

const Objective = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const keywords = ['Innovation', 'Growth', 'Excellence', 'Impact', 'Success'];
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % keywords.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="objective-container">
      <div className="objective-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
      
      <div className={`objective-content ${isVisible ? 'visible' : ''}`}>
        <div className="objective-header">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="objective-title">
            Career Objective
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="objective-main">
          <div className="objective-card">
            <div className="card-header">
              <div className="rotating-keywords">
                <span className="keyword-label">Driving</span>
                <span className="keyword-rotating">
                  {keywords[currentWord]}
                </span>
              </div>
            </div>
            
            <div className="objective-text">
              <p className="main-text">
                I strive to apply my <span className="highlight">skills and enthusiasm</span> for technology 
                to address practical challenges and support the growth of a 
                <span className="highlight"> forward-thinking organization</span>.
              </p>
              
              <div className="goals-section">
                <div className="goal-item">
                  <div className="goal-icon">🚀</div>
                  <div className="goal-content">
                    <h4>Professional Growth</h4>
                    <p>Continuously evolve my technical expertise and leadership capabilities</p>
                  </div>
                </div>
                
                <div className="goal-item">
                  <div className="goal-icon">📚</div>
                  <div className="goal-content">
                    <h4>Continuous Learning</h4>
                    <p>Stay updated with latest technologies and industry best practices</p>
                  </div>
                </div>
                
                <div className="goal-item">
                  <div className="goal-icon">💡</div>
                  <div className="goal-content">
                    <h4>Meaningful Impact</h4>
                    <p>Contribute to impactful tech-driven initiatives that make a difference</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="commitment-section">
              <div className="commitment-badge">
                <span className="badge-text">Committed to Excellence</span>
                <div className="badge-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;