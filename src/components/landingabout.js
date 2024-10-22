import { Container, Row, Col } from "react-bootstrap";
import mypic from "../assets/img/mypic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const LandingAbout = () => {
    return (
<section className="homeland" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={4} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={mypic} alt="about me Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={8} xl={9}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">About Me</span>
                  <p>I am currently pursuing a Diploma in Digital Design at Republic Polytechnic, driven by a deep passion for technology and a commitment to continuous learning and growth. I thrive on challenges that push my boundaries and expand my skill set.</p>
                  <p>Collaboration with like-minded individuals energizes me, as it facilitates the exchange of ideas and enhances our understanding of our respective fields. My curiosity about technology has sparked a particular interest in Artificial Intelligence. At the same time, I am exploring how software development can create positive change in the world and support various communities.</p>
                  <p>I am dedicated to discovering and creating innovative solutions that leverage technology for the greater good.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    );
  };

export default LandingAbout;