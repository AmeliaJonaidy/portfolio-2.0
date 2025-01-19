import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import geekout from "../assets/img/geekout.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import geekoutcert from "../assets/img/geek.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Compp2 = () => {
  const navigate = useNavigate();
  return (
    <section className="volunteerabout" id="home">
                  <style>
      {`
          .awards-links {
            color:rgb(104, 174, 255);
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s, text-decoration 0.3s;
          }

          .awards-links:hover {
            color:rgb(22, 133, 250);
            text-decoration: underline;
          }
        `}
      </style>
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Govtech Geekout 2024</span>
                <p>In June 2024, I participated in GeekOut 2024. This was a fantastic experience working with different teammates from different schools and backgrounds for a 25-hour hackathon.</p>
                <p>This event has provided me the opportunity to learn more about GovTech and provide us with many great insights and learning opportunities as we listened to various talks and workshops delivered by many excellent professionals in GovTech.</p>
                <p>During the hackathon, we developed a solution for Singaporean students to discover their interests and possible career paths.</p>

                <p>GeekOut 2024 Certification of Participation<br/>
                                                  View Certificate: <a href={geekoutcert} target="_blank" rel="noopener noreferrer" className="awards-links">GeekOut 2024 Certification of Participation</a><br/>
                                                </p>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img 
                    src={geekout} 
                    alt="worldskills Img" 
                    style={{ 
                      width: '400px', // Adjust width as needed
                      height: '270px', // Adjust height as needed
                      objectFit: 'cover' // Ensures the image covers the area without distortion
                    }} 
                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Compp2;
