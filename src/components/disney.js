import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const Disney = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">Disney Movie Finder App</h1>
        <p className="project-summary">
        I developed an app called Disney Movie Finder that fetches data from an API containing details about various movies. The app displays essential information such as the title, rating, and duration of each movie in an organized list format. Users can easily search for movies and sort them based on their ratings, helping them quickly find the movies they're interested in
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>React Native, CSS, MySafeInfo API </p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>Movie Search: Search for Disney movies by title to quickly find what you're looking for.</li>
          <li>Movie List: Display a list of movies with details like title, rating, and duration.</li>
          <li>Sorting by Rating Category: Sort the movie list based on rating categories (e.g., G, PG, PG-13, R), allowing users to discover movies that match their preferred content rating.</li>
        </ul>

        <h2 className="project-features-title">Future Improvements</h2>
        <ul className="project-features-list">
          <li>Favorite Movies: Allow users to mark their favorite movies and create a custom list of top picks.</li>
          <li>Sorting by Duration: Allow users to sort the movie list by duration, so they can easily find movies that fit within their available time, whether they’re looking for a short film or a longer feature.</li>
        </ul>


        <div className="media-section">
        <img 
            src={require('../assets/img/disney3.png')}
            alt="immersive1" 
            style={{ width: '300px', height: 'auto' }} 
            />
                <img 
            src={require('../assets/img/disney2.png')}
            alt="immersive1" 
            style={{ width: '300px', height: 'auto' }} 
            />

        </div>

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/71gsrGjiue4"
        title="Journal Mobile App Video"
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

export default Disney;
