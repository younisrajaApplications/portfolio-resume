import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Younis Mubashar Raja</h1>
        <h2>Software Developer</h2>
        <p className='summary'>
          I am an accomplished Software Developer skilled in full-stack engineering, 
          web technologies like React and NodeJS, and Object-Oriented Programming like Java, 
          Python and C#. Explore my professional journey and skills below!
        </p>
        <div className="cta-buttons">
          <NavLink to="/projects" className="cta-btn">View My Projects</NavLink>
          <NavLink to="/skills" className="cta-btn secondary">Check My Skills</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Home;
