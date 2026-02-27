import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
import hackstart from '../../assets/img/hackstart.jpeg';
import act from '../../assets/img/othersact.png';
import '../Styles/activities.css';

const Activities = () => {
  const navigate = useNavigate();

  return (
    <div className="activities-page">

      {/* ── Hero ── */}
      <section className="act-hero">
        <div className="act-hero-bg" aria-hidden="true">
          <span className="act-orb act-orb--1" />
          <span className="act-orb act-orb--2" />
          <div className="act-hero-grid" />
        </div>
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="act-hero-content">
                  <span className="act-badge">Interest Group / Projects / Activities</span>
                  <h1 className="act-hero-title">Leading, Building<br />&amp; Exploring</h1>
                  <p className="act-hero-desc">
                    From leading Hackstart as President to attending industry bootcamps and career
                    sessions, these experiences have helped me develop leadership skills, collaborate
                    effectively within a team, and continuously expand my knowledge.
                  </p>
                  <div className="act-hero-meta">
                    <div className="act-meta-pill"><span>🚀</span> Hackstart President</div>
                    <div className="act-meta-pill"><span>🎓</span> SCS × SOI Career Mentor</div>
                    <div className="act-meta-pill"><span>🤖</span> AI &amp; Metaverse Bootcamp</div>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 1: Hackstart ── */}
      <section className="act-section act-section--alt">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={5} className="act-img-col">
                    <img src={hackstart} alt="Hackstart" className="act-img act-img--rect" />
                  </Col>
                  <Col xs={12} md={6} xl={7}>
                    <div className="act-section-label">Interest Group · 2023 – Present</div>
                    <h2 className="act-section-title">Hackstart @ Republic Polytechnic</h2>
                    <span className="act-role-badge">Vice President → President</span>
                    <p className="act-body">
                      Hackstart is a project with the goal of becoming an official interest group,
                      enabling students to find competitions, attend training courses, and connect with
                      others who share similar interests. Our events accommodate all skill levels and
                      require minimal commitment from students.
                    </p>
                    <p className="act-body">
                      In 2023, I joined the EXCO as <strong>Vice President of Membership</strong>, where
                      I worked on launching a new initiative to engage students and drive membership. I
                      helped arrange the "Welcome Day" event to officially launch the project and keep
                      students informed and engaged.
                    </p>
                    <p className="act-body">
                      In July 2024, I became <strong>President of Hackstart</strong> and gave a talk to
                      all PFP students to promote the project. My team and I also held a three-day
                      Sustainability Workshop in September 2024, inviting guest speaker Mr Frederick Tan
                      on the final day to share his experience and lead discussions with students.
                    </p>

                    <div className="act-timeline">
                      <div className="act-timeline-item">
                        <span className="act-timeline-dot" />
                        <div>
                          <p className="act-timeline-title">Vice President of Membership</p>
                          <p className="act-timeline-date">2023 — Launched "Welcome Day" event</p>
                        </div>
                      </div>
                      <div className="act-timeline-item">
                        <span className="act-timeline-dot" />
                        <div>
                          <p className="act-timeline-title">President of Hackstart</p>
                          <p className="act-timeline-date">July 2024 — PFP student talk &amp; Sustainability Workshop</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 2: Other Activities ── */}
      <section className="act-section act-section--closing">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <div className="act-section-label">Other Activities</div>
                    <h2 className="act-section-title">Events &amp; Workshops</h2>

                    <div className="act-event-card">
                      <span className="act-event-icon">🎓</span>
                      <div>
                        <p className="act-event-title">SCS × SOI Club: Career Mentor Session</p>
                        <p className="act-event-date">2023</p>
                        <p className="act-event-desc">
                          Participated in a career mentoring session organised in collaboration with the
                          Singapore Computer Society and SOI Club, gaining valuable industry insights and
                          guidance from professionals in the tech sector.
                        </p>
                      </div>
                    </div>

                    <div className="act-event-card">
                      <span className="act-event-icon">🤖</span>
                      <div>
                        <p className="act-event-title">Digital Skills Bootcamp — AI and Metaverse</p>
                        <p className="act-event-date">3 – 5 September 2024</p>
                        <p className="act-event-desc">
                          Attended a three-day bootcamp focused on emerging digital skills, covering
                          Artificial Intelligence and Metaverse technologies, broadening my understanding
                          of cutting-edge innovations and their real-world applications.
                        </p>
                      </div>
                    </div>

                    <button className="act-back-btn" onClick={() => navigate('/aboutme')}>
                      Back to About Me <ArrowRightCircle size={20} />
                    </button>
                  </Col>
                  <Col xs={12} md={6} xl={5} className="act-img-col">
                    <img src={act} alt="Other Activities" className="act-img act-img--rect" />
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

export default Activities;