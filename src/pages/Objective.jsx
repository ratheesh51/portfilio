import React from 'react';

const styles = {
  container: {
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    padding: '3rem 2rem',
    borderRadius: '20px',
    maxWidth: '900px',
    margin: '2rem auto',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid transparent',
  },
  containerBefore: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #22c55e, #38bdf8)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #22c55e, #38bdf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '2rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
    textAlign: 'justify',
    position: 'relative',
    zIndex: 2,
    fontWeight: '300',
  },
};

const Objective = () => (
  <div style={styles.container}>
    <div style={styles.containerBefore}></div>
    <h2 style={styles.heading}>Career Objective</h2>
    <p style={styles.paragraph}>
      I strive to apply my skills and enthusiasm for technology to address practical challenges
      and support the growth of a forward-thinking organization. I aim to grow professionally,
      continuously learn, and contribute meaningfully to impactful tech-driven initiatives.
    </p>
  </div>
);

export default Objective;