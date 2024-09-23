// About.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <section>
      <h1 className='section-title'>About Me</h1>
      <p className='summary'>
        I'm Younis Mubashar Raja, a Software Developer passionate about creating innovative solutions 
        through coding and technology. My expertise ranges from game development to full-stack web development. 
        I'm always eager to learn new skills and contribute to impactful projects.
      </p>

      <div className='profile-section'>
        {/* Profile Section */}
        <div className='contact-info'>
          <h2 className='section-subtitle'>Contact Information</h2>
          <ul>
            <li><i className="icon">📞</i> Phone: 07727658504</li>
            <li><i className="icon">✉️</i> Email: younisraja.applications@gmail.com</li>
            <li><i className="icon">📍</i> Location: Luton, United Kingdom</li>
            <li><i className="icon">🔗</i> LinkedIn: <a href="https://www.linkedin.com/in/younis-mubashar-raja/">LinkedIn Profile</a></li>
          </ul>
          <div className='empty-space'/>
        </div>

        <div className='tech-skills'>
          <h2 className='section-subtitle'>Technical Skills</h2>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li><NavLink to="/skills"><strong>View My Skills</strong></NavLink></li>
          </ul>
          <div className='empty-space'/>
        </div>
      </div>
    </section>
  );
}

export default About;
