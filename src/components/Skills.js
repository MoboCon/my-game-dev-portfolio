import React from 'react';
import { FaReact, FaUnity, FaHtml5, FaCss3Alt, FaJs, FaGit } from 'react-icons/fa';
import './Skills.css'; // Fișier CSS pentru stiluri specifice

function Skills() {
  return (
    <section className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-list">
        <div className="skill-item">
          <FaReact className="skill-icon" />
          <h3>React</h3>
          <p>Experienced in building dynamic web applications with React.js.</p>
        </div>
        <div className="skill-item">
          <FaUnity className="skill-icon" />
          <h3>Unity</h3>
          <p>Proficient in creating immersive 2D and 3D games using Unity engine.</p>
        </div>
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <h3>HTML5</h3>
          <p>Skilled in crafting responsive and accessible web pages using HTML5.</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS3</h3>
          <p>Expert in styling and designing beautiful user interfaces with CSS3.</p>
        </div>
        <div className="skill-item">
          <FaJs className="skill-icon" />
          <h3>JavaScript</h3>
          <p>Experienced in using JavaScript for interactive web development.</p>
        </div>
        <div className="skill-item">
          <FaGit className="skill-icon" />
          <h3>Git</h3>
          <p>Proficient in version control using Git for collaborative development.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
