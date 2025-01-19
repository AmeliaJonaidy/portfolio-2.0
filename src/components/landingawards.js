import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import trophy from "../assets/img/Tropy Star.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import direct1 from "../assets/img/Director231.pdf";
import direct2 from "../assets/img/Director232.pdf";
import prize1 from "../assets/img/DiplomaP2024.pdf";
import direct3 from "../assets/img/Director241.pdf";
import award1 from "../assets/img/ASTAR.jpg";
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const AwardsP1 = () => {
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
                    src={trophy} 
                    alt="trophy Img" 
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
                <span className="tagline">Awards and Scholarship</span>

                <p>Director's Roll of Honour 2023 Semester 1 SOI-DDDD <br/>
                  View Certificate: <a href={direct1} target="_blank" rel="noopener noreferrer" className="awards-links">Director Roll 2023 Sem 1 Certificate</a><br/>
                </p>
                
                <p>Director's Roll of Honour 2023 Semester 2 SOI-DDDD <br/>
                  View Certificate: <a href={direct2} target="_blank" rel="noopener noreferrer" className="awards-links">Director Roll 2023 Sem 2 Certificate</a><br/>
                </p>

                <p>AY2023 -- Diploma Prize <br/>
                  View Certificate: <a href={prize1} target="_blank" rel="noopener noreferrer" className="awards-links">Diploma Prize 2023 Certificate</a><br/>
                </p>

                <p>Director's Roll of Honour 2024 Semester 1 SOI-DDDD<br/>
                  View Certificate: <a href={direct3} target="_blank" rel="noopener noreferrer" className="awards-links">Director Roll 2024 Sem 1 Certificate</a><br/>
                </p>

                <p>A*STAR Science Award (Polytechnic)<br/>
                  View Certificate: <a href={award1} target="_blank" rel="noopener noreferrer" className="awards-links">A*STAR Science Award Certificate</a><br/>
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

export default AwardsP1;
