import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import trophy from "../assets/img/Tropy Star.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const AwardsP1 = () => {
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
                <span className="tagline">Awards and Scholarship</span>
                <p>AY2023 Semester 1 -- Director's Roll of Honour<br/>
                AY2023 Semester 2 -- Director's Roll of Honour<br/>
                AY2023 Semester 2 -- Diploma Prize<br/>
                AY2024 Semester 1 -- Director's Roll of Honour<br/>
                A*STAR Science Award (Polytechnic)
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
