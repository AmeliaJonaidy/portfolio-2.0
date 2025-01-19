import { Container, Row, Col } from "react-bootstrap";
import mypic from "../assets/img/mypic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import resume from '../assets/img/resume.pdf'
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const LandingAbout = () => {
    return (
<section className="homeland" id="home">
<style>
{`
          .resumelinks {
            color:rgb(104, 174, 255);
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s, text-decoration 0.3s;
          }

          .resumelinks:hover {
            color:rgb(22, 133, 250);
            text-decoration: underline;
          }
        `}
      </style>
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={mypic} alt="about me Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">About Me</span>
                  <p>Collaboration with like-minded individuals energizes me, as it facilitates the exchange of ideas and enhances our understanding of our respective fields. My curiosity about technology has sparked a particular interest in Artificial Intelligence. At the same time, I am exploring how software development can create positive change in the world and support various communities.</p>
                  <p>I am dedicated to discovering and creating innovative solutions that leverage technology for the better!</p>
                  <p>Click here to view my resume: <a href={resume} target="_blank" rel="noopener noreferrer" className="resumelinks">My Resume</a></p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    );
  };

export default LandingAbout;