import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const Journal = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">Journal Mobile App</h1>
        <p className="project-summary">
        This is a journal mobile app that features four emotional sections, allowing users to record their feelings at any time. As someone who frequently journals and enjoys reflecting on past memories, I created this app with the goal of providing a functional and useful tool for others to do the same. The app is designed to help users capture and organize their thoughts based on different emotions. 
        Additionally, it includes some of my own personal journal entries, offering a glimpse into how I use the app myself.
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>React Native, CSS, </p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>Add Journal Entries for Different Moods: Users can create new journal entries under four moods: Upset, Excited, Sad, and Happy.</li>
          <li>View, Edit, or Delete Mood-Based Entries: Each section displays a collection of entries specific to that mood. Users can also click on any entry to edit or delete it, giving them full control over their own journal content.</li>
          <li>Journal Summary Analytics: A main screen button displays a summary of the user's total journal entries and shows which mood has the most entries, offering insights into their journaling patterns.</li>
          <li>Reflection Question Prompts: A dedicated page offers mood-based reflection questions, providing users with thoughtful prompts to inspire deeper journaling based on their current emotions.</li>
        </ul>

        <h2 className="project-features-title">Challenges Faced</h2>
        <p>
        One of the main challenges I encountered was that my data source initially did not allow editing or deleting, as it frequently returned errors such as 'undefined' or 'read-only assigned.' To overcome this, I created a copy of the data source and used a for loop to iterate through the copy, 
        identifying the correct data key for each journal entry. Once the desired entry was found, I was able to edit or delete it within the copied data. After making the necessary changes, I then updated the original data source, ensuring the changes were reflected and displayed correctly in the app. </p>

        <h2 className="project-features-title">Future Improvements</h2>
        <ul className="project-features-list">
          <li>Custom Reflection Prompts: Allow users to add their own reflection questions or prompts, giving them more control and personalization over the journaling experience.          </li>
          <li>Mood-based Insights: Provide personalized insights based on the user's entries. For example, if a user frequently journals about being upset, the app could offer helpful tips or resources for managing stress.</li>
        </ul>


        <div className="media-section">
        <img 
            src={require('../assets/img/journalapp.png')}
            alt="immersive1" 
            style={{ width: '300px', height: 'auto' }} 
            />
                <img 
            src={require('../assets/img/journal2.png')}
            alt="immersive1" 
            style={{ width: '300px', height: 'auto' }} 
            />
        <img 
            src={require('../assets/img/journal3.png')}
            alt="immersive2" 
            style={{ width: '300px', height: 'auto' }} 
            />
        <img 
            src={require('../assets/img/journal4.png')}
            alt="immersive2" 
            style={{ width: '310px', height: 'auto' }} 
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

export default Journal;
