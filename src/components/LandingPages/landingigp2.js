import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import act from "../../assets/img/othersact.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Activitiesp2 = () => {
  const navigate = useNavigate();
  return (
    <section className="volunteerabout" id="home">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Other Activities</span>
                <p>SCS X SOI CLUB: Career Mentor Session -- 2023 <br/>Digital Skills (AI and Metaverse) Bootcamp - 3 to 5 Sep 2024</p>
                <button onClick={() => navigate('/aboutme')}> Back to About Me <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img 
                    src={act} 
                    alt="otheract Img" 
                    style={{ 
                      width: '400px', // Adjust width as needed
                      height: '300px', // Adjust height as needed
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

export default Activitiesp2;
