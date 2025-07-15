import React, { useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiMysql, SiJavascript, SiExpress, SiGithub } from 'react-icons/si';

const skillData = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", logo: <span className="skill-logo">C</span>, details: "Basic programming and memory management." },
      { name: "C++", logo: <SiCplusplus />, details: "OOP concepts, STL usage." },
      { name: "Java", logo: <FaJava />, details: "OOP, Exception Handling, Collections." },
      { name: "Python", logo: <FaPython />, details: "Data structures, scripting, automation, ML basics." },
      { name: "SQL", logo: <SiMysql />, details: "Joins, queries, subqueries, data retrieval." }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", logo: <FaHtml5 />, details: "Semantic elements, SEO tags." },
      { name: "CSS", logo: <FaCss3Alt />, details: "Flexbox, Grid, Media Queries." },
      { name: "React", logo: <FaReact />, details: "Hooks, components, routing, state management." },
      { name: "Node.js", logo: <FaNodeJs />, details: "Express server, APIs, middleware." },
      { name: "Express.js", logo: <SiExpress />, details: "Routing, error handling, middleware structure." }
    ]
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MongoDB", logo: <SiMongodb />, details: "CRUD operations, schema design, Mongoose." },
      { name: "MySQL", logo: <SiMysql />, details: "Relational DB, normalized schema, joins." },
      { name: "Git", logo: <FaGitAlt />, details: "Branching, commit, merge, pull/push." },
      { name: "GitHub", logo: <SiGithub />, details: "Project hosting, version control, collaboration." }
    ]
  }
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState({});

  const toggleDetail = (catIndex, itemIndex) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenIndex(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="skills-page">
      <h2>My Skills</h2>
      {skillData.map((section, catIndex) => (
        <div key={catIndex} className="skill-section">
          <h3>{section.category}</h3>
          <div className="skill-grid">
            {section.items.map((skill, itemIndex) => {
              const key = `${catIndex}-${itemIndex}`;
              return (
                <div key={itemIndex} className="skill-card" onClick={() => toggleDetail(catIndex, itemIndex)}>
                  <div className="skill-top">
                    <div className="skill-icon">{skill.logo}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                  {openIndex[key] && <div className="skill-detail">{skill.details}</div>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
