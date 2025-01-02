import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import trophy from "../assets/img/Tropy Star.png"
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
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img 
                    src={trophy} 
                    alt="brainhack Img" 
                    style={{ 
                      width: '300px', // Adjust width as needed
                      height: '400px', // Adjust height as needed
                      objectFit: 'cover' // Ensures the image covers the area without distortion
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
                View Certificate: <a href={pcepcert} target="_blank" rel="noopener noreferrer">PCEP Certificate</a><br/>
                </p>

                <p>AI For Industry: Literacy in AI - AI Singapore: Certified on April 2,2024<br/>
                View Certificate: <a href={LiteracyAI} target="_blank" rel="noopener noreferrer">Literacy in AI Certificate</a><br/>
                </p>

                
                <p>AWS AI Skills Builder Course associated with Singapore Computer Society: Certified on Decemember 12, 2024<br/>
                View Certificate: <a href={AWSSkills} target="_blank" rel="noopener noreferrer">AWS AI Certificate</a><br/>
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
