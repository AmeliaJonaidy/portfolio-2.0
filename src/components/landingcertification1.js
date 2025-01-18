import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cert from "../assets/img/cert.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import pcepcert from "../assets/img/pcepcert.pdf";
import LiteracyAI from "../assets/img/AISGcert.pdf";
import AWSSkills from "../assets/img/AWSskillcert.pdf";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Certificate1 = () => {
  const navigate = useNavigate();
  return (
    <section className="volunteerabout" id="home">
            <style>
        {`
          .cert-links {
            color:rgb(104, 174, 255);
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s, text-decoration 0.3s;
          }

          .cert-links:hover {
            color:rgb(22, 133, 250);
            text-decoration: underline;
          }
        `}
      </style>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img 
                    src={cert} 
                    alt="cert Img" 
                    style={{ 
                      width: '300px', 
                      height: '400px', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Certifications</span>

                <p>PCEP - Certified Entry Level Python Programmer: Certified on March 13,2024<br/>
                View Certificate: <a href={pcepcert} target="_blank" rel="noopener noreferrer" className="cert-links">PCEP Certificate</a><br/>
                </p>

                <p>AI For Industry: Literacy in AI - AI Singapore: Certified on April 2,2024<br/>
                View Certificate: <a href={LiteracyAI} target="_blank" rel="noopener noreferrer" className="cert-links">Literacy in AI Certificate</a><br/>
                </p>

                
                <p>AWS AI Skills Builder Course associated with Singapore Computer Society: Certified on Decemember 12, 2024<br/>
                View Certificate: <a href={AWSSkills} target="_blank" rel="noopener noreferrer" className="cert-links">AWS AI Certificate</a><br/>
                </p>

                <p>
                <strong>Linkedin Learning Certificates:</strong> <br/>
                <ul>
        <li>Photoshop 2021 Quick Start - May 2024</li>
        <li>Learning Node.js - May 2024</li>
        <li>Introduction to Web Design and Development - May 2024</li>
        <li>Illustrator 2023 Quick Start - May 2024</li>
        <li>Software Testing Foundations: Test Planning - Oct 2024</li>
        <li>UX Design: 3 Creating Personas - Nov 2024</li>
        <li>Software Testing Foundations: Test Techniques - Nov 2024</li>
        <li>Software Testing Foundations: Bug Writing and Management - Nov 2024</li>
        <li>Learning React Native - Nov 2024</li>
        <li>Learning Jira Cloud Edition - Nov 2024</li>
        <li>Figma: Using Auto Layout - Nov 2024</li>
        <li>Figma Essential Training: The Basics - Nov 2024</li>
        <li>Unit Testing and Test Driven Development in Python - Jan 2025</li>
        <li>Building Modern UIs with React Router v6 - Jan 2025</li>
        <li>Google Analytics 4 (GA4) Essential Training - Jan 2025</li>
      </ul>
                View Certificate: <a href="https://www.linkedin.com/in/amelia-jonaidy-299a5b238/" target="_blank" rel="noopener noreferrer" className="cert-links">All Linkedin Learning Certificate</a><br/>
                </p>


                <button onClick={() => navigate('/aboutme')}> Back to About Me <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Certificate1;
