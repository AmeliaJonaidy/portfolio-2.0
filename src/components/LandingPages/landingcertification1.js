import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
import cert from '../../assets/img/cert.png';
import pcepcert from '../../assets/img/pcepcert.pdf';
import LiteracyAI from '../../assets/img/AISGcert.pdf';
import AWSSkills from '../../assets/img/AWSskillcert.pdf';
import '../Styles/certification.css';

const linkedinCerts = [
  { name: "Photoshop 2021 Quick Start", date: "May 2024" },
  { name: "Learning Node.js", date: "May 2024" },
  { name: "Introduction to Web Design and Development", date: "May 2024" },
  { name: "Illustrator 2023 Quick Start", date: "May 2024" },
  { name: "Software Testing Foundations: Test Planning", date: "Oct 2024" },
  { name: "UX Design: 3 Creating Personas", date: "Nov 2024" },
  { name: "Software Testing Foundations: Test Techniques", date: "Nov 2024" },
  { name: "Software Testing Foundations: Bug Writing and Management", date: "Nov 2024" },
  { name: "Learning React Native", date: "Nov 2024" },
  { name: "Learning Jira Cloud Edition", date: "Nov 2024" },
  { name: "Figma: Using Auto Layout", date: "Nov 2024" },
  { name: "Figma Essential Training: The Basics", date: "Nov 2024" },
  { name: "Unit Testing and Test Driven Development in Python", date: "Jan 2025" },
  { name: "Building Modern UIs with React Router v6", date: "Jan 2025" },
  { name: "Google Analytics 4 (GA4) Essential Training", date: "Jan 2025" },
  {name: "Software Testing Assistance with GitHub Copilot AI", date: "Feb 2025"},
  {name: "Build AI Agents and Automate Workflows with n8n", date: "July 2025"}
];

const Certifications = () => {
  const navigate = useNavigate();

  return (
    <div className="certs-page">

      {/* ── Hero ── */}
      <section className="certs-hero">
        <div className="certs-hero-bg" aria-hidden="true">
          <span className="certs-orb certs-orb--1" />
          <span className="certs-orb certs-orb--2" />
          <div className="certs-hero-grid" />
        </div>
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="certs-hero-content">
                  <span className="certs-badge">Certifications</span>
                  <h1 className="certs-hero-title">Credentials &amp;<br />Continuous Learning</h1>
                  <p className="certs-hero-desc">
                    Throughout my Diploma program, I've earned various certifications across Python,
                    AI literacy, cloud computing, UX design, and software development — from platforms
                    like PCEP, AI Singapore, AWS, and LinkedIn Learning.
                  </p>
                  <div className="certs-hero-meta">
                    <div className="certs-meta-pill"><span>🐍</span> PCEP Python</div>
                    <div className="certs-meta-pill"><span>🤖</span> AI Singapore</div>
                    <div className="certs-meta-pill"><span>☁️</span> AWS</div>
                    <div className="certs-meta-pill"><span>💼</span> LinkedIn Learning × 15</div>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 1: Professional Certs ── */}
      <section className="certs-section certs-section--alt">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <div className="certs-section-label">Professional Certifications</div>
                    <h2 className="certs-section-title">Industry Credentials</h2>

                    <div className="cert-card">
                      <div className="cert-card-left">
                        <div>
                          <p className="cert-name">PCEP — Certified Entry-Level Python Programmer</p>
                          <p className="cert-date">Certified March 13, 2024</p>
                        </div>
                      </div>
                      <a href={pcepcert} target="_blank" rel="noopener noreferrer" className="cert-view-link">
                        View ↗
                      </a>
                    </div>

                    <div className="cert-card">
                      <div className="cert-card-left">
                        <div>
                          <p className="cert-name">AI For Industry: Literacy in AI — AI Singapore</p>
                          <p className="cert-date">Certified April 2, 2024</p>
                        </div>
                      </div>
                      <a href={LiteracyAI} target="_blank" rel="noopener noreferrer" className="cert-view-link">
                        View ↗
                      </a>
                    </div>

                    <div className="cert-card">
                      <div className="cert-card-left">
                        <div>
                          <p className="cert-name">AWS AI Skills Builder — Singapore Computer Society</p>
                          <p className="cert-date">Certified December 12, 2024</p>
                        </div>
                      </div>
                      <a href={AWSSkills} target="_blank" rel="noopener noreferrer" className="cert-view-link">
                        View ↗
                      </a>
                    </div>

                    <div className="cert-card">
                      <div className="cert-card-left">
                        <div>
                          <p className="cert-name">Google IT Automation with Python</p>
                          <p className="cert-date">Certified December 12, 2024</p>
                        </div>
                      </div>
                      <a
                        href="https://www.coursera.org/account/accomplishments/specialization/TRLWHJJBRYQT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-view-link"
                      > View ↗
                      </a>
                    </div>

                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 2: LinkedIn Learning ── */}
      <section className="certs-section certs-section--closing">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="certs-section-label">LinkedIn Learning</div>
                <h2 className="certs-section-title">Online Courses</h2>
                <p className="certs-body">
                  I've completed 15 LinkedIn Learning courses spanning UI/UX design, frontend development,
                  software testing, and design tools.
                </p>
                <div className="linkedin-grid">
                  {linkedinCerts.map((c) => (
                    <div className="linkedin-card" key={c.name}>
                      <span className="linkedin-card-name">{c.name}</span>
                      <span className="linkedin-card-date">{c.date}</span>
                    </div>
                  ))}
                </div>
                <div className="certs-footer-row">
                  <a
                    href="https://www.linkedin.com/in/amelia-jonaidy-299a5b238/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-link cert-view-link--lg"
                  >
                    View All LinkedIn Certificates ↗
                  </a>
                  <button className="certs-back-btn" onClick={() => navigate('/aboutme')}>
                    Back to About Me <ArrowRightCircle size={20} />
                  </button>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

    </div>
  );
};

export default Certifications;