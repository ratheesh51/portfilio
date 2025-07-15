import React from 'react';
import './Experience.css'; // optional for styling

const Experience = () => {
  return (
    <div className="experience-page">
      <h2>Work Experience</h2>

      {/* Experience 1: Data Science Intern */}
      <div className="experience-block">
        <h3>1) Data Science Intern – CodeSoft</h3>
        <p>
          • Gained hands-on experience in data preprocessing, data visualization, and basic machine learning models using Python and libraries like Pandas, NumPy, Matplotlib, and Scikit-learn. <br/>
          • Worked on datasets to analyze trends, clean missing values, and implement basic predictive algorithms. <br/>
          • Improved understanding of real-world data challenges and exploratory data analysis (EDA).
        </p>
        <a href="https://github.com/ratheeshvh/Data-Science" target="_blank" rel="noopener noreferrer">
          🔗 View Project on GitHub
        </a>
      </div>

      {/* Experience 2: Web Developer Intern */}
      <div className="experience-block">
        <h3>2) Web Developer – CodeSoft</h3>

        <h4>➤ APJ Abdul Kalam Tribute Page (Frontend Only)</h4>
        <p>
          • Developed a responsive tribute page in pure HTML, CSS, and JavaScript dedicated to Dr. A.P.J. Abdul Kalam. <br/>
          • Included biography, timeline, quotes, and images in a mobile-friendly layout. <br/>
          • Used clean semantic HTML5 and Flexbox-based CSS for layout structuring.
        </p>
        <a href="https://github.com/ratheeshvh/APJ-APDUL-KALAM-Tribute-Page" target="_blank" rel="noopener noreferrer">
          🔗 View Tribute Page on GitHub
        </a>

        <h4>➤ Job Portal (Full Stack: React | Node.js | Express | MongoDB)</h4>
        <p>
          • Created a complete job portal web application using the MERN stack. <br/>
          • Features include job posting, internship listing, user registration/login, and an admin dashboard. <br/>
          • Backend includes secure APIs using Express and Node.js, connected to MongoDB. <br/>
          • Frontend built with React for a dynamic user interface with routing and state management.
        </p>
        <a href="https://github.com/ratheeshvh/Mern-Job-PortL" target="_blank" rel="noopener noreferrer">
          🔗 View Job Portal Project on GitHub
        </a>
      </div>
    </div>
  );
};

export default Experience;
