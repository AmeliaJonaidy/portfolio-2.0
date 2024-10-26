import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const CareerDesc = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">Career Xplorer Web Application</h1>
        <p className="project-summary">
          The problem Statement that we were tackling is "How might we support Singaporean students in exploring their interests and developing their passions so that they are able to make informed choices for their future careers?" 
        </p>
        <p className="project-summary">
          As a team, we then created Career Xplorer, a one-stop, consolidated platform for Singaporean Students to explore their passions and obtain relevant and comprehensive information regarding their possible career pathways. 
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>React, CSS, HTML, Open AI</p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>User-Friendly Interface, Easy to Navigate</li>
          <li>A Career Quiz to find out what industry best suits the user.</li>
          <li>Comprehensive Information about Different Industries and Job Roles which is done through web scraping involving extracting data from websites to gather information and using OpenAI's language models, which analyse and summarise the data.</li>
          <li>Accessible Online Platform</li>
        </ul>

        <h2 className="project-features-title">Target Audience</h2>
        <p>The target audience is Singaporean students, specifically those aged 14 to 18. We found two points of pain. To begin, these kids are incredibly busy and do not have the time to conduct research on different websites in order to make an informed decision about their future job paths. The second issue is that there are no centralized resources for them. As a result, we developed a system that allows people to grasp their interests and suitable job paths through a quick search. </p>

        <h2 className="project-features-title">Challenges Faced</h2>
        <p>As a team, I believe the problem here was time. This was a 25-hour hackathon, and with little knowledge of how to use Open AI as the backend, we had to carefully manage our time and decide which features to prioritize. We needed to have an understanding of the concepts of web scraping in order to apply it as effectively as possible. </p>
        <p>
        As an individual, my biggest challenge was building the front end with React, especially since I had limited experience at the time. With a tight schedule, I needed to quickly learn how to create a simple front end. Fortunately, I overcame this hurdle and also managed to focuse on integrating the backend data to display it effectively on the website. </p>

        <h2 className="project-features-title">Learning Outcomes</h2>
        <ul className="project-features-list">
          <li>Technical Skills: I learned how to code in React more effectively, enabling me to effectively display backend data on the front end of the website.</li>
          <li>Technical Skills: I also learned the concept of web scraping and how OpenAI can help filter and consolidate information, providing more targeted and specific insights for display.</li>
          <li>Soft Skills: I gained experience working with a diverse team, appreciating each person's unique strengths and backgrounds. Despite initially being unfamiliar with one another in the beginning, we still manage to successfully collaborated to create a functional product.</li>
        </ul>

        <h2 className="project-features-title">Future Improvements</h2>
        <p>One future upgrade we'd want to make is to add real-time web scrapping. This is to ensure that the information we provide to users is still relevant and not out of date.</p>
        <p>Personally, I believe one potential change I might do would be to ensure that users have access to suitable mentors with whom they may speak to learn more about their industry.</p>

        <div className="media-section">
        <img 
            src={require('../assets/img/career2.jpeg')}
            alt="beleaf2" 
            style={{ width: '320px', height: 'auto' }} 
            />
        <img 
            src={require('../assets/img/career3.jpeg')}
            alt="beleaf2" 
            style={{ width: '400px', height: 'auto' }} 
            />

        </div>

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/edPVC8S88mw"  
        title="CareerXplorer Video"
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

export default CareerDesc;
