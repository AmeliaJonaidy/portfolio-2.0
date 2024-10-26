import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import world1 from "../assets/img/world1.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Volunteerp3 = () => {
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
                    src={world1} 
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
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">WorldSkills 2023 Asean Student Volunteer</span>
                <p>In 2023, I have the opportunity to help out as a student volunteer, bringing secondary school kids around the Suntec Convention Center to see the WorldSkills ASEAN competition as well as attend various seminars and workshops. Observing ASEAN's top performers compete in technical skills was a memorable experience.</p>
                <p>This volunteering experience taught me how to work together with new individuals and adapt to change. As a large-scale event, there were multiple adjustments that needed to be made, such as how long the students may stay at the location or whether there was a change in route, and my team and I were able to do so while maintaining and ensuring the students' safety and return.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Volunteerp3;
