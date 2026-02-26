import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OH1 from "../../assets/img/OH1.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Volunteerp4 = () => {
  const navigate = useNavigate();
  return (
    <section className="volunteerabout" id="home">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Republic Polytechnic 2024 and 2025 Open House Student Ambassador</span>
                <p>In 2024, I had the opportunity to be an Open House Student Ambassador, where I brought secondary students around RP, allowing them to see and be brought around to the different schools and diploma booth so that they can find out more about their interests and what the different diplomas in RP have to offer them. </p>
                <p>I also had the opportunity to engage in talks with some of the students in order to better understand their interests, and I attempted to share what I knew to the best of my ability in the hopes of impacting their decision-making.</p>
                <p>In 2025, I had the opportunity to represent my diploma at the Open House, where I managed a booth and engaged with secondary school students. I shared insights into the details of my diploma and showcased a variety of projects created by students from different cohorts.</p>
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
                    src={OH1} 
                    alt="worldskills Img" 
                    style={{ 
                      width: '400px', 
                      height: '270px', 
                      objectFit: 'cover' 
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

export default Volunteerp4;
