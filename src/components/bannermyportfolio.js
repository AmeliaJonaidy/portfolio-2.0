import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import portimg from "../assets/img/portfolio.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <section className="bannerportfolio" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Portfolio</span>
                  <p>Check out my portfolio to explore a variety of my past projects in development, design, and artificial intelligence. This includes school assignments, personal, and competition projects!</p>
                  <button onClick={() => navigate('/myportfolio')}> My Portfolio <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={portimg} alt="port Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

