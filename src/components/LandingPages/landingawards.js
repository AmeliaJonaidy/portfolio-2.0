import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
import trophy from '../../assets/img/Tropy Star.png';
import direct1 from '../../assets/img/Director231.pdf';
import direct2 from '../../assets/img/Director232.pdf';
import prize1 from '../../assets/img/DiplomaP2024.pdf';
import direct3 from '../../assets/img/Director241.pdf';
import award1 from '../../assets/img/ASTAR.jpg';
import '../Styles/awards.css';

const awards = [
  {
    icon: "🏆",
    title: "Director's Roll of Honour — Sem 1 2023",
    subtitle: "SOI-DDDD · Republic Polytechnic",
    cert: direct1,
    label: "View Certificate",
  },
  {
    icon: "🏆",
    title: "Director's Roll of Honour — Sem 2 2023",
    subtitle: "SOI-DDDD · Republic Polytechnic",
    cert: direct2,
    label: "View Certificate",
  },
  {
    icon: "🎓",
    title: "AY2023 Diploma Prize",
    subtitle: "Republic Polytechnic",
    cert: prize1,
    label: "View Certificate",
  },
  {
    icon: "🏆",
    title: "Director's Roll of Honour — Sem 1 2024",
    subtitle: "SOI-DDDD · Republic Polytechnic",
    cert: direct3,
    label: "View Certificate",
  },
  {
    icon: "⭐",
    title: "A*STAR Science Award (Polytechnic)",
    subtitle: "Agency for Science, Technology and Research",
    cert: award1,
    label: "View Certificate",
  },
];

const Awards = () => {
  const navigate = useNavigate();

  return (
    <div className="awards-page">

      {/* ── Hero ── */}
      <section className="awards-hero">
        <div className="awards-hero-bg" aria-hidden="true">
          <span className="awards-orb awards-orb--1" />
          <span className="awards-orb awards-orb--2" />
          <div className="awards-hero-grid" />
        </div>
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="awards-hero-content">
                  <span className="awards-badge">Awards &amp; Scholarships</span>
                  <h1 className="awards-hero-title">Academic<br />Excellence</h1>
                  <p className="awards-hero-desc">
                    These awards and scholarships highlight my academic achievements during my time at
                    Republic Polytechnic — showcasing dedication and hard work, and reflecting the
                    milestones I have reached in my educational journey.
                  </p>
                  <div className="awards-hero-meta">
                    <div className="awards-meta-pill"><span>🏆</span> Director's Roll of Honour × 3</div>
                    <div className="awards-meta-pill"><span>🎓</span> Diploma Prize</div>
                    <div className="awards-meta-pill"><span>⭐</span> A*STAR Science Award</div>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Awards Section ── */}
      <section className="awards-section awards-section--closing">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-start">
                  <Col xs={12} md={5} xl={4} className="awards-img-col">
                    <img src={trophy} alt="Awards" className="awards-img" />
                  </Col>
                  <Col xs={12} md={7} xl={8}>
                    <div className="awards-section-label">Recognition</div>
                    <h2 className="awards-section-title">My Awards</h2>
                    <div className="awards-list">
                      {awards.map((a) => (
                        <div className="award-card" key={a.title}>
                          <div className="award-card-left">
                            <span className="award-icon">{a.icon}</span>
                            <div>
                              <p className="award-name">{a.title}</p>
                              <p className="award-subtitle">{a.subtitle}</p>
                            </div>
                          </div>
                          <a href={a.cert} target="_blank" rel="noopener noreferrer" className="award-view-link">
                            View ↗
                          </a>
                        </div>
                      ))}
                    </div>
                    <button className="awards-back-btn" onClick={() => navigate('/aboutme')}>
                      Back to About Me <ArrowRightCircle size={20} />
                    </button>
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

    </div>
  );
};

export default Awards;