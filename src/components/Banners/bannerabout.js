import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutimg from "../../assets/img/about.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();
  return (
    <section className="bannerabt" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={aboutimg} alt="about Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Get to know me</span>
                  <p>Curious about me? Here are some aspects to explore: my hobbies, the memorable experiences that have shaped my journey, and the volunteering opportunities I've been involved in.</p>
                  <button onClick={() => navigate('/aboutme')}> About Me <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;