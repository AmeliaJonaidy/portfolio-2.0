import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import yfc2 from '../../assets/img/yfc2.jpeg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Volunteerp1 = () => {
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
                    src={yfc2} 
                    alt="yfc Img" 
                    style={{ 
                      borderRadius: '50%', // Makes the image round
                      width: '400px', // Adjust width as needed
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
                <span className="tagline">Singapore Youth For Christ (SYFC) Member + Subcore Leader : 2022 - present</span>
                <p>Singapore Youth for Christ is an organization with a range of ministries, and I serve as a student leader in the polytechnic ministry. I became a member when I joined the PFP program in 2022 and took on the role of student leader at the beginning of my first year in 2023.</p>
                <p>As a member, I've taken part in a variety of activities and even assisted with organizing a few. In September 2024, I attended the FellowSheep Partea as a participant. In addition, I was active in organizing the "Rest and Play Holiday PEP" for Christian Republic Polytechnic students, which provided an opportunity for fellowship over the holidays. During school, I attended weekly gatherings to discuss specific themes or carry out a bible study.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Volunteerp1;
