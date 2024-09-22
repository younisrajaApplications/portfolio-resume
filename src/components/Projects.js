import React from 'react';

function Projects() {
  return (
    <section>
      <h1 className="section-title">Projects</h1>
      <ul>
        <li>
          <strong>Ninja Runner</strong> - C# and Unity
          <p>
            - Developed a survival-based platform game featuring a ninja.<br />
            - Independently handled game design and coding using Unity and C# after collaborating on the initial idea.<br />
            - Overcame challenges in game mechanics, particularly refining the ninja's jump, applying kinematic principles from A-Level Mathematics.<br />
            - Successfully launched the game on Google Play Store and continue to improve it with updates and parallax effects.
          </p>
        </li>
        <li>
          <strong>Airbnb Properties</strong> - Java and JavaFX
          <p>
            - Created a desktop app for managing Airbnb properties.<br />
            - Collaborated with a team to display property listings and details based on user selections.<br />
            - Conducted thorough unit testing to ensure application reliability.<br />
            - Achieved top honours (1st) in coursework for this project.
          </p>
        </li>
        <li>
          <strong>Top Trump Game</strong> - C# and ASP.NET
          <p>
            - Developed an ASP.NET website offering a strategic Top Trump game where users compete against an AI opponent.<br />
            - Implemented user registration, login functionality, and secure authentication.<br />
            - Built the core gameplay mechanics and card battle system.
          </p>
        </li>
        <li>
          <strong>Blockz</strong> - C# and Unity
          <p>
            - Developed a 3D game where players avoid randomly appearing obstacles.<br />
            - Reused code from previous projects to enhance development efficiency.<br />
            - Published the game on Google Play Store and continue to maintain it.
          </p>
        </li>
        <li>
          <strong>Kebab Hut Stock Management</strong> - Python
          <p>
            - Developed a desktop application for Kebab Hut, managing in-store stock, suppliers, and orders.<br />
            - Used tkinter to build a user-friendly GUI.<br />
            - Managed the entire SDLC, including thorough testing and security checks to ensure data integrity.
          </p>
        </li>
      </ul>
      <div className='empty-space'/>
    </section>
  );
}

export default Projects;
