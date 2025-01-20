import React from 'react';
import './ProjectDescription.css';
import { Link } from 'react-router-dom';
import namecard from "../assets/img/name.pdf";
import stickerpack from "../assets/img/sticker.png";


const StickerCard = () => {
  return (
    <div className="background-container"> 
      <div className="project-description">
        <h1 className="project-title">Personalised Designed Stickers and Name Card</h1>
        <p className="project-summary">
        During the process of creating the name card and sticker design, we were supposed to come up with an identity. The identity I chose is a Christian Developer, as it reflects my passion for coding and my faith, which influences both my work and life as a developer. This identity combines my faith-based values with my technological skills, allowing me to approach coding and new projects with purpose and meaning. 
        </p>

        <h2 className="project-features-title">Rationale for Name Card:</h2>
        <p>
        The name card design reflects my Christian Developer identity through simple, modern aesthetics and playful elements, with a sheep icon symbolizing my faith. It incorporates design principles such as similarity, balance, and professional typography to ensure clarity, while also highlighting my developer identity through a clean, tech-inspired design that uses colors associated with technology, creating a harmonious blend of my faith and technical background.</p>
        
        <h2 className="project-features-title">Rationale for Sticker Pack:</h2>
        <p>
        The stickers are designed using the principle of similarity, with consistent colors, typography, and a duck motif that reflects my developer identity, while also incorporating Christian elements like the cross to emphasize my faith. The principle of emphasis is applied by increasing the font size on key words to make certain phrases stand out, further enhancing the message of each sticker. Most of the designs combine my dual identity as a Christian and developer, with images like a folder and thumb drive representing both technology and my Christian beliefs,
        while some stickers focus more on one identity through Christian terminology or code-related imagery.</p>

        <h2 className="project-features-title">Typography</h2>
        <p>
        <strong>Name Card Fonts:</strong> My primary font is Bahnschrift, and Sitka is the font I would prefer for emphasis. Bahnschrift is a sans-serif typeface that gives the name card a clean and modern appearance and is appropriate for important information such as my name and contact information. This typeface is critical for making important information stand out and easy to read. The other font I chose is Sitka, a serif typeface that is utilized to accentuate specific components of the text, such as my identification. These two fonts make a nice contrast to a modern design.</p>
        <p><strong>Stickers Pack Fonts:</strong> My preferred font is Bold Acumin Variable Concept, while the other font I use is Lucida Bright. The Bold Acumin Variable Concept ensures that the text or phrases on the stickers are clear and readable. This is especially crucial for stickers, which are frequently designed to immediately attract someone's attention. Being bold helps the sticker stand out more. The Lucida Bright font is used on stickers with less important content. This would improve the sticker's readability and balance with the other fonts used.</p>

        
        <h2 className="project-features-title">Colour Palettes:</h2>
        <p>
        The colors for the two components are identical, but in varying shades; some are somewhat lighter, while others are slightly darker. I've picked three colours: purple, blue, and yellow.</p>
        <p>The colors I chose—blue and purple—hold significance as they are commonly associated with technology and symbolize intelligence. By using these colors in my name card, sticker packs, and website, I aim to clearly communicate my identity as a developer, as blue and purple are widely recognized in the tech industry and are frequently used by technology brands.</p>
        <p>I chose yellow to represent the joy and hope I find in Christ—the joy of living a Christ-centered life as a developer and the optimism that comes from maintaining my faith in the face of adversity. As a developer, I strive to honor God in all aspects of my work, and yellow reflects that sense of joy and hope I carry in my faith.</p>
        <p><strong>Name Card [CMYK]:</strong>Colour Patch 1: CMYK(0,26,78,6), Colour Patch 2:CMYK(0,61,5,57), Colour Patch 3: CMYK(64,53,0,26)</p>
        <p><strong>Stickers [RGB]:</strong>Colour Patch 1: (236,138,35), Colour Patch 2:(62,90,108), Colour Patch 3: (142,163,177)</p>

        <h2 className="project-features-title">Tools Used</h2>
        <p>Adobe Photoshop, Adobe Illustrator</p>

        <h2 className="project-features-title">Links to my Designs:</h2>
        <p><strong>Name Card: </strong><a href={namecard} target="_blank" rel="noopener noreferrer" className="links">Name Card PDF</a></p>
        <p><strong>Stickers: </strong><a href={stickerpack} target="_blank" rel="noopener noreferrer" className="links">Sticker Pack</a></p>

        <div className="media-section">
        <img 
            src={require('../assets/img/sticker1.png')}
            alt="immersive1" 
            style={{ width: '350px', height: 'auto' }} 
            />
                <img 
            src={require('../assets/img/sticker2.png')}
            alt="immersive1" 
            style={{ width: '350px', height: 'auto' }} 
            />

    <img 
            src={require('../assets/img/sticker3.png')}
            alt="immersive1" 
            style={{ width: '350px', height: 'auto' }} 
            />
                <img 
            src={require('../assets/img/sticker4.png')}
            alt="immersive1" 
            style={{ width: '350px', height: 'auto' }} 
            />

        </div>


        <div className="back-to-portfolio">
          <Link to="/myportfolio" className="back-link">Back to Other Portfolio Projects</Link>
        </div>

      </div>
    </div>
  );
};

export default StickerCard;
