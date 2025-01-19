import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const BotanyDesc = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">BotanyBazaar Web Application</h1>
        <p className="project-summary">
        This would be an online store called BotanyBazaarSG. This online shop allows local farmers and planters to display and sell their plants for consumers to consume or purchase for aesthetic purposes. Farmers would be able to sell locally grown veggies like cabbage and lettuce. Casual and seasonal planters, on the other hand, can sell their plants, such as the gorgeous orchids they have grown. Users may then easily purchase the one they want online. The online shop is open to anybody interested in selling, not only local suppliers. 
        </p>
        <p className="project-summary">
        The purpose of this app is to promote local goods and give clients fresher, sustainably sourced produce. Based on Singapore's Sustainable Development Goals, this would enable us to address some problems. By encouraging locally produced and seasonal products, the platform helps to minimize the carbon footprint of food transportation which contributes to SDG 13 (Climate Action). 
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>CSS, Node.Js, Express JS, phpMyAdmin, MySQL</p>

        <h2 className="project-features-title">Features</h2>
        <ul className="project-features-list">
          <li>The listing page allows suppliers to showcase their brand and specify their supplier type (e.g., FloweryHobs). Also for them to include product descriptions, names, prices, quantities, and photographs, while categorizing their offerings, such as whether it is a fruits, plants or vegetables, for easy browsing.</li>
          <li>The Discussion Page allows users to create posts about issues related to plants and vegetables, fostering community interaction among local farmers, planters, and curious visitors. It offers easy access for anyone to explore discussions, ask questions, and connect with others who share their gardening interests.</li>
          <li>The Contact Page will provide users with a convenient way to reach us. It will include our social media links and essential contact information, such as a made-up email address, fax number, phone number, and main office address. This feature enables users to easily share their feedback regarding any errors or issues they encounter on the website. Additionally, a user-friendly feedback form will be available, allowing visitors to send us their messages directly.</li>

        </ul>

        <h2 className="project-features-title">Target Audience</h2>
        <p>The intended audience for this online web application is Singaporeans. Locals who wish to eat fresher vegetables and support local producers. It is also for local farmers who want to market their locally produced vegetables (such as BokChoy and Nai Bai), which are popular among locals. It's also for locals who enjoy buying plants for their own homes. It also allows hobbyists to sell their plants to others who enjoy plants. However, the primary target population is Singaporeans, local farmers and producers, and local hobbyists.</p>

        <h2 className="project-features-title">Challenges Faced</h2>
        <p>The most significant challenge I encountered was implementing the login feature for the website. It was crucial to distinguish between suppliers and buyers, as each group has different functionalities and permissions. Developing the backend to accommodate this differentiation proved to be challenging, and I faced numerous errors throughout the process. However, I ultimately succeeded in routing users to the appropriate page based on their login type. </p>

        <h2 className="project-features-title">Learning Outcomes</h2>
        <ul className="project-features-list">
          <li>Technical Skills: I learned how to create databases for the backend using SQL and phpMyAdmin, which provided a structured way to store all relevant data. This foundational knowledge allowed me to efficiently organize and retrieve information for later display on the front end of the website. </li>
          <li>Technical Skills: I learned to use Express.js, a flexible Node.js web application framework that simplifies building server-side applications. With Express.js, I was able to efficiently manage routing and handle middleware, which significantly streamlined the development process of my web application.</li>
        </ul>

        <h2 className="project-features-title">Future Improvements</h2>
        <p>A feature I would like to implement is enabling users to make actual purchases, rather than just presenting a supplier database with item quantities and details. I want to incorporate a complete payment process that includes managing inventory, applying discount codes, and handling quantity adjustments during checkout.</p>
        <p>Automated Email Reply: I believe this would be great since we would be able to receive an automated response after the customer has successfully purchased the local vegetables or plants. This is because it can be used to establish credibility with the customer and as proof of payment. This would establish accountability between local producers and customers. With this level of credibility, the website can make a better impression on others because it is perceived as more trustworthy.  </p>
        <p>Report Button: This added function is critical so that posts that are reported, regardless of whether they are inappropriate or not, can be temporarily removed for moderators to filter. This ensures that everyone on the internet has access to a safe conversation space.

</p>

        <h2 className="project-features-title">Role in the Project</h2>
        <p>Developed the entire website: Both the Frontend and Backend</p>

        <div className="media-section">
        <img 
            src={require('../assets/img/botany2.jpeg')}
            alt="botany1" 
            style={{ width: '320px', height: 'auto' }} 
            />
        <img 
            src={require('../assets/img/botany3.jpeg')}
            alt="botany2" 
            style={{ width: '400px', height: 'auto' }} 
            />

        </div>

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/kICxaANJ2nM"  
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

export default BotanyDesc;
