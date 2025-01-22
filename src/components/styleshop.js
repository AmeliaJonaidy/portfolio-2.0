import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';

const StyleShop = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">StyleShop UI Kit and High Fidelity Wireframe</h1>
        <p className="project-summary">
        To provide a user-friendly shopping platform offering a diverse selection of fashion and lifestyle products, including clothing, accessories, and more, tailored to meet the needs of modern shoppers 
        </p>
        
        <h2 className="project-features-title">Technologies Used</h2>
        <p>Figma</p>

        <h2 className="project-features-title">UI KIT Components - Basic UI Elements</h2>
        <img 
            src={require('../assets/img/ui5.png')}
            alt="immersive1" 
            style={{ width: 'auto', height: '500px', marginLeft: '150px' }} 
            />

        <h2 className="project-features-title">UI KIT Components - Forms and Data Elements and Layout Component</h2>
        <img 
            src={require('../assets/img/ui4.png')}
            alt="immersive1" 
            style={{ width: '370px', height: 'auto', marginLeft:'20px'}} 
            />  

        <img 
            src={require('../assets/img/ui3.png')}
            alt="immersive1" 
            style={{ width: '330px', height: 'auto' }} 
            />  


        <h2 className="project-features-title">UI KIT Components - Media and Assets and Interactive Elements</h2>
        <img 
            src={require('../assets/img/ui2.png')}
            alt="immersive1" 
            style={{ width: '320px', height: 'auto', marginLeft:'20px' }} 
            />  
          <img 
            src={require('../assets/img/ui1.png')}
            alt="immersive1" 
            style={{ width: '385px', height: 'auto' }}  
            /> 

      
        <h2 className="project-features-title">Wireframe</h2>
        <img 
            src={require('../assets/img/style2.png')}
            alt="immersive1" 
            style={{ width: '750px', height: 'auto' }} 
            />  

       

        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/6xErlBigs9w"
        title="StyleShop Video"
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

export default StyleShop;
