import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <div className="logo">
          <h1>Younis Mubashar Raja</h1>
          <h2>Software Developer</h2>
        </div>
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>Education</NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
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
