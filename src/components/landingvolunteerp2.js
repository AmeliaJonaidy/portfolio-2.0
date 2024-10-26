import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import yfc1 from '../assets/img/yfc.jpeg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Volunteerp2 = () => {
  const navigate = useNavigate();
  return (
    <section className="volunteerabout" id="home">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <p>As a Subcore Leader, I worked with my team to create social media content for our Instagram, creating series such as "Armour of God" and "Fruit of the Spirit." I also created events to help students connect, such as a "Welcome Tea" to welcome new members and begin the academic year. Furthermore, my teammates and I organized a weekly event called "Rest and Play."</p>
                <p>SYFC has helped me grow in numerous ways. It has helped me focus on my relationship with God, teaching me the meaning of perseverance. Juggling and trying to balance school, hackathons, being on the EXCO of an interest group, and SYFC all at the same time. It has also taught me how to manage my time more effectively than I did before joining. This experience has undoubtedly helped me grow in ways I never imagined I would.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img 
                    src={yfc1} 
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
        </Row>
      </Container>
    </section>
  )
}

export default Volunteerp2;
