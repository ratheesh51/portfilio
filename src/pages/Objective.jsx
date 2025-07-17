import React from 'react';

const styles = {
  container: {
    backgroundColor: '#0f172a',
    
    padding: '2rem',
    borderRadius: '0.75rem',
    maxWidth: '800px',
    margin: '2rem auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#22c55e',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#e2e8f0',
    textAlign: 'justify',
  },
};

const Objective = () => (
  <div style={styles.container}>
    <h2 style={styles.heading}>Career Objective</h2>
    <p style={styles.paragraph}>
      I strive to apply my skills and enthusiasm for technology to address practical challenges
      and support the growth of a forward-thinking organization. I aim to grow professionally,
      continuously learn, and contribute meaningfully to impactful tech-driven initiatives.
    </p>
  </div>
);

export default Objective;
