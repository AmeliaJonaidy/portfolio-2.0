import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const Focuscrew = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">Focus Crew High Fidelity Wireframe</h1>
        <p className="project-summary">
        FocusCrew assists by matching students with peer study partners or mentors based on their topic knowledge, learning preferences, and availability.
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>Figma</p>

        <h2 className="project-features-title">Product Goal</h2>
        <p>Many students struggle to discover reliable study partners or mentors online who have similar learning objectives or learning styles. This causes students to have ineffective study sessions and feel unmotivated, resulting in poor academic performance.</p>
        <p>FocusCrew assists by matching students with peer study partners or mentors based on their topic knowledge, learning preferences, and availability. FocusCrew will enable users to take part in more efficient, structured, and focused learning sessions by incorporating a matching algorithm for personalized connections (Dynamic Matching, Session Customization), real-time collaboration tools (In-call whiteboard, Calendar Integration), and progress tracking (Study Session Analytics, Time Spent Per Topic). </p>
        <p>FocusCrew will provide an environment in which users might work together to achieve specific learning objectives, such as improving grades, mastering a skill, or preparing for tests. </p>


        <h2 className="project-features-title">Site Map</h2>
        <img 
            src={require('../assets/img/sitemap.png')}
            alt="immersive1" 
            style={{ width: '750px', height: 'auto' }} 
            />

        <h2 className="project-features-title">Low Fidelity Wireframe</h2>
        <img 
            src={require('../assets/img/focuscrew1.png')}
            alt="immersive1" 
            style={{ width: '750px', height: 'auto' }} 
            />

        <h2 className="project-features-title">High Fidelity Wireframe</h2>
        <img 
            src={require('../assets/img/focus2.png')}
            alt="immersive1" 
            style={{ width: '750px', height: 'auto' }} 
            />
        <img 
            src={require('../assets/img/focus3.png')}
            alt="immersive1" 
            style={{ width: '750px', height: 'auto' }} 
            />

       

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/QLoZ_B_Scmg"
        title="The Lost Researcher Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="project-video"
        ></iframe>


        <div className="back-to-portfolio">
          <Link to="/myportfolio" className="back-link">Back to Other Portfolio Projects</Link>
        </div>

      </div>
    </div>
  );
};

export default Focuscrew;
