import React from 'react';

function Education() {
  return (
    <section>
      <div className='about-hero'>
        <h1 className="section-title">Education</h1>

        <h2 className="section-subtitle">Academic Summary</h2>
        <p>
          I hold a BSc (Hons) in Computer Science from King's College London, where I developed a solid foundation in software engineering, machine learning, and artificial intelligence. My academic journey has equipped me with a deep understanding of both theoretical and practical aspects of computer science, including full-stack development, robotics, and database systems. I have also excelled in Mathematics and Computer Science during my A Levels and GCSEs, achieving top marks in both subjects.
        </p>
      </div>

      <ul>
        <li>
          <strong>BSc (Hons) in Computer Science</strong> - King's College London (09/2020 – 06/2023)
          <p>
            Achieved a 2.2 grade. Key modules include:
            <ul>
              <li>Introduction to Software Engineering</li>
              <li>Software Engineering Group Project</li>
              <li>Programming Practice and Applications</li>
              <li>Robotics</li>
              <li>Machine Learning</li>
              <li>Introduction to AI</li>
              <li>AI Reasoning & Decision Making</li>
              <li>Database Systems</li>
            </ul>
          </p>
        </li>
        <li>
          <strong>A Levels</strong> - Luton Sixth Form College (09/2018 – 06/2020)
          <p>
            Subjects:
            <ul>
              <li>Computer Science (A)</li>
              <li>Mathematics (A)</li>
              <li>Further Mathematics (B)</li>
              <li>Economics (B)</li>
            </ul>
          </p>
        </li>
        <li>
          <strong>GCSEs</strong> - Challney High School for Boys (09/2013 – 06/2018)
          <p>
            10 GCSEs including:
            <ul>
              <li>8 GCSEs Graded 8(A*) - 7(A) including grade 8(A*) in Mathematics and Computer Science</li>
              <li>10 GCSEs Graded 8(A*) - 5(C)</li>
            </ul>
          </p>
        </li>
      </ul>
      <div className='empty-space'/>
    </section>
  );
}

export default Education;
