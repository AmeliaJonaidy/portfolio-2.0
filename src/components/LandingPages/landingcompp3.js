import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import huawei from "../../assets/img/huawei.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export const Compp3 = () => {
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
                    src={huawei} 
                    alt="brainhack Img" 
                    style={{ 
                      width: '350px', // Adjust width as needed
                      height: '450px', // Adjust height as needed
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
                <span className="tagline">HUAWEI TECH FOR CITY 2024</span>
                <p>My team Binary Blossoms and I also participated in another competition together which also happened during June of 2024. </p>
                <p>This competition built on the idea we developed during the Brainhack 2024 competition. We decided to produce an improved and updated version of Be-Leaf.</p>
                <p>Our updated innovation takes on the way food delivery works and modifies it to help solve the recycling problem. Instead of matching delivery riders with customers, our application matches karung guni men, volunteers, and artists with people who want to recycle items. On top of recycling, it even educates on ways to reduce usage.</p>
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

export default Compp3;
