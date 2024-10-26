import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import hackstart from "../assets/img/hackstart.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Activitiesp1 = () => {
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
                    src={hackstart} 
                    alt="hackstart Img" 
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
                <span className="tagline">Hackstart Project Republic Polytechnic: 2023 - present</span>
                <p>Hackstart is currently a project with the goal of becoming an official interest group. It enables students to find competitions, attend training courses, and connect with others who share similar interests. Our events accommodate to all levels of skill and require minimal commitment from students.</p>
                <p>In 2023, I became the Vice President of Membership for the EXCO, where I worked on launching a new project targeted at engaging students and encouraging them to become members. I helped arrange the "Welcome Day" event to officially launch this project and keep students informed and engaged. In July 2024, I became President of Hackstart, and I gave a talk to all PFP students to support the project. My team and I also held a three-day Sustainability workshop in September 2024, and we invited a guest speaker, Mr Frederick Tan, on the last day to share his experience with the students and participate in discussions.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Activitiesp1;
