import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import brainhack from "../../assets/img/comp.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import brain1 from "../../assets/img/brain.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Compp1 = () => {
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
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img 
                    src={brainhack} 
                    alt="brainhack Img" 
                    style={{ 
                      width: '400px', // Adjust width as needed
                      height: '270px', // Adjust height as needed
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
                <span className="tagline">BrainHack DSTA CODE_EXP 2024</span>
                <p>I participated in the finals of Brainhack, CODE_EXP competition, which took place at Marina Bay Sands on June 12th and 13th, 2024.  Brainhack 2024 has seen 4000 participants from 109 schools, which consists of many university students.</p>
                <p>During the finals, Binary Blossoms developed a functional mobile app, Be-Leaf. It consists of an AI recognition to determine recyclables and non-recyclable objects. Binary Blossoms also pitched to a large crowd at MBS, including university students.</p>
                <p>It was an exciting and enriching event that pushed my limits and broadened my knowledge and skills. It is also marked as a significant accomplishment for my team, especially since it was our first time participating in any competition. Binary Blossoms is very proud of what we have achieved in this competition.</p>

                                <p>BrainHack 2024 Certification of Participation<br/>
                                  View Certificate: <a href={brain1} target="_blank" rel="noopener noreferrer" className="awards-links">BrainHack 2024 Certification of Participation</a><br/>
                                </p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Compp1;
