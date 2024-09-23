import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  // State to manage menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  return (
    <Router>
      <header>
        <div className="logo">
          <h1>Younis Mubashar Raja</h1>
          <h2>Software Developer</h2>
        </div>

        {/* Hamburger menu button for small screens */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Menu */}
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>About</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Experience</NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Education</NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleMenu}>Projects</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2024 Younis Mubashar Raja</p>
      </footer>
    </Router>
  );
}

export default App;
