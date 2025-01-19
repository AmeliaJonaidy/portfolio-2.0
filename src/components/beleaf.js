import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const BeleafDesc = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">Beleaf Mobile Application</h1>
        <p className="project-summary">
          Beleaf is an app that determines recyclables and non-recyclables, using an AI Recognition System to scan and identify objects. It also provides users with updated bin capacity so they do not need to spend energy and time transporting recyclables when the bins are full. 
        </p>
        <p className="project-summary">
          Beleaf also allows users to earn points for recycling products and completing challenges. If you reach a certain number of points, you can earn vouchers.
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>React Native, CSS, Amazon Web Service: Amazon Rekognition Image, Amazon Location SDK, Amazon Cognito, Amazon Pinpoint</p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>Recyclables Detection: Uses AI scanning function to detect which category an item falls into, to know which bin to open for the user to deposit the item.</li>
          <li>Smart Bin Locator: Integrates GPS map service to help in locating the smart bins. Users are able to tap on the locations to view a photo of the bin and the surrounding location.</li>
          <li>AI Prompt to Repurpose: Users will be prompted to repurpose scanned objects for donation or to wash unclean recyclables.</li>
          <li>Bin Capacity Sensor Indicator: Users can view the remaining capacity of each bin to check if the bins have sufficient capacity left before making a trip there.</li>
          <li>Rewards Redemption: Users will be able to earn points for recycling items correctly. They can redeem leaves (points) for rewards.</li>
        </ul>

        <h2 className="project-features-title">Target Audience</h2>
        <p>Households who wants to recycle (consumers), they are confused about what and how to recycle the items. Therefore we created a solution which has an AI-powered image recognition for accurate sorting. Hoping that it reduces contamination, promote responsibile disposal and divert waste from landfills.</p>

        <h2 className="project-features-title">Challenges Faced</h2>
        <p>As a team, I believe one of our biggest obstacles is that this is our first competition. Most of us had no prior experience with Amazon Web Services or its tools, and we also had no knowledge of how to develop in React and React Native. We also didn't realize the difference between React and React Native at first, which caused us to make mistakes and rework several aspects of the program to make it mobile-friendly.</p>
        <p>As an individual, I believe one of the most difficult challenges was attempting to get the AI Rekognition System to operate; I was in charge of this component, and I had no idea how to utilize AI Rekognition, how to set it up, or what to code at the back end of the mobile application. Thankfully, I was able to overcome these problems by reading up on many of the resources available online, watching YouTube videos, and a lot of trial and error. I also had a technical mentor during the competition who helped me understand how to use the Amazon Rekognition System more effectively.</p>
        <p>As the team leader, I suppose another challenge I had was the deadline. Because this was the first competition, the deadline was fairly shocking to everyone, attempting to finish as many tasks as possible in so little time while also receiving comments and improving on them. I believe the challenge was trying to manage the workload in general. However, everything went well, and it became a very unforgettable experience. </p>

        <h2 className="project-features-title">Learning Outcomes</h2>
        <ul className="project-features-list">
          <li>Technical Skills: I learned how to code in React and React Native after creating this mobile application. I understood the concept of the JavaScipt(JS) library. </li>
          <li>Technical Skills: I learnt how to use GitHub to collaborate and share code. I also learned how important it is to communicate when pushing the code; else, mistakes may occur. I also learned how to push, pull and commit code to GitHub.</li>
          <li>Soft Skills: I learned how to prioritize which features and requirements are necessary for the app and which are not. This is because we realized we don't have much time, and learning how to prioritize will help us focus on what's essential.</li>
        </ul>

        <h2 className="project-features-title">Future Improvements</h2>
        <p>We plan to have a community feature which allows people to share their recycling stories online through posts, stories, and comments. The rationale is so that it can increase user involvement with others by fostering conversation (e.g., giving suggestions, providing support), which encourages regular use. </p>
        <p>A Streak Tracker which encourages users to interact with the app by monitoring days of completed activity and rewarding users who maintain a consistent streak. This would be effective for competitive users, those seeking incentives, and those promoting environmental responsibility as it serves as a motivator for completing tasks </p>

        <h2 className="project-features-title">Role in the Project</h2>
        <p>Team Leader, AWS AI Rekognition System Implementation [Ensuring Optimal Functionality of the Recyclables Scanner]</p>

        <div className="media-section">
          <img 
            src={require('../assets/img/beleaf1.jpeg')}
            alt="beleaf1" 
            className="project-image"
          />
          <img 
            src={require('../assets/img/beleaf3.jpeg')}
            alt="beleaf2" 
            className="project-image"
          />
                    <img 
            src={require('../assets/img/beleaf4.jpeg')}
            alt="beleaf3" 
            className="project-image"
          />
        </div>

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/iVGHMjnY-wQ"  // Updated to embed URL
        title="Project Video"
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

export default BeleafDesc;
