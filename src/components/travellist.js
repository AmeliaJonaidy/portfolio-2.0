import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const TravelList = () => {
  return (
    <div className="background-container"> 
    <style>
{`
          .resumelinks {
            color:rgb(104, 174, 255);
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s, text-decoration 0.3s;
          }

          .resumelinks:hover {
            color:rgb(22, 133, 250);
            text-decoration: underline;
          }
        `}
      </style>
      <div className="project-description">
        <h1 className="project-title">Travel List App</h1>
        <p className="project-summary">
        This travel list app is designed to help users efficiently manage their packing lists by allowing them to add items, mark them as packed, and remove them as needed. Inspired by the vibrant spirit of Brazil, the app’s theme features the colors of the Brazilian flag—green, blue, and yellow—creating an engaging and colorful experience for users planning their trips to Brazil.
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>React, CSS</p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>Add Items into Packing List: Users can add new items to their packing list, specifying details like quantity and item.</li>
          <li>Mark Items as Packed: Users can easily mark items as packed by toggling a checkbox next to each item.</li>
          <li>Delete Items: Users can remove items from the list at any time by clicking a delete button.</li>
          <li>Track Packing Progress: A dynamic footer displays the percentage of packed items, helping users monitor their packing status.</li>
        </ul>

        <h2 className="project-features-title">Future Improvements</h2>
        <ul className="project-features-list">
          <li>Create Packing History: Keep track of past packing lists for future reference, allowing users to reuse or adjust items based on previous trips.</li>
          <li>Enhance the app by introducing multiple pages with customizable templates for different destinations and trip types. In addition to the Brazil template, users can select from a variety of pre-designed templates, such as a Beach Vacation, Japan Adventure, or Road Trip packing list.</li>
        </ul>

        <h2 className="project-features-title">Live Site: </h2>
        <p>Click here to view my resume: <a href={"https://travel-list-app-amelia.vercel.app/"} target="_blank" rel="noopener noreferrer" className="resumelinks">Travel List App Live Site</a></p>

        <div className="media-section">
          <img 
            src={require('../assets/img/travel2.png')}
            alt="immersive1" 
            style={{ width: '700px', height: 'auto' }} 
            />
      
        </div>

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/RO4C_aN7bvY"
        title="Travel List App Video"
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

export default TravelList;
