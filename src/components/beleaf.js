import React from 'react';
import './ProjectDescription.css';

const BeleafDesc = () => {
  return (
    <div className="background-container"> {/* New parent div */}
      <div className="project-description">
        <h1 className="project-title">Task Manager App</h1>
        <p className="project-summary">
          The Task Manager App is a web application designed to help users organize and manage their daily tasks efficiently. With a user-friendly interface, it enables easy task creation, deadline setting, and priority management.
        </p>
        
        <div className="media-section">
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Project Preview" 
            className="project-image"
          />
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="project-video"
          ></iframe>
        </div>

        <h2 className="project-features-title">Technologies Used</h2>
        <p>React, Node.js, Express, MongoDB, CSS</p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>User authentication and secure login</li>
          <li>Create, edit, and delete tasks</li>
          <li>Set deadlines and priorities</li>
          <li>Responsive design for mobile and desktop</li>
        </ul>

        <h2 className="project-features-title">Target Audience</h2>
        <p>Designed for busy professionals and students looking to streamline their task management.</p>

        <h2 className="project-features-title">Challenges Faced</h2>
        <p>Implementing user authentication posed a challenge, but I resolved it by utilizing JWT for secure token management.</p>

        <h2 className="project-features-title">Learning Outcomes</h2>
        <p>This project deepened my understanding of full-stack development and improved my skills in building RESTful APIs.</p>

        <h2 className="project-features-title">Future Improvements</h2>
        <p>I plan to add a calendar view for better visualization of deadlines and improve the UI with enhanced styling.</p>
      </div>
    </div>
  );
};

export default BeleafDesc;
