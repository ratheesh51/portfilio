import React from 'react';
import './Projects.css'; // Optional: For styling

const projects = [
  {
    title: "Job Portal",
    stack: "React | Express | Node.js | MongoDB",
    description: "Developed a MERN stack application with login, registration, and admin functionalities for managing jobs and internships.",
    github: "https://github.com/ratheeshvh/Mern-Job-PortL"
  },
  {
    title: "Blog Platform",
    stack: "React | Express | Node.js | MongoDB",
    description: "Built an interactive blog platform that allows users to post and share content with a clean UI and secure backend.",
    github: "https://github.com/ratheeshvh/Blog_Web"
  },
  {
    title: "Recipe Finder",
    stack: "React | Express | Node.js | MongoDB",
    description: "A project in progress featuring structured folder organization, user login, and recipe search with data stored in MongoDB.",
    github: "https://github.com/ratheeshvh/Recipe_Finder-main"
  }
];

const Projects = () => (
  <div className="projects-page">
    <h2>My Projects</h2>
    <div className="projects-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p><strong>Stack:</strong> {project.stack}</p>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            🔗 View on GitHub
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
