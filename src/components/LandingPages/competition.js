import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
import brainhack from '../../assets/img/comp.jpeg';
import brain1 from '../../assets/img/brain.pdf';
import brain2 from '../../assets/img/brain2.pdf';
import geekout from '../../assets/img/geekout.jpeg';
import geekoutcert from '../../assets/img/geek.png';
import huawei from '../../assets/img/huawei.jpeg';
import scametur from '../../assets/img/brain2.jpg';
import ecofy from '../../assets/img/ntu.JPG';
import '../Styles/competition.css';

const Competitions = () => {
  const navigate = useNavigate();

  return (
    <div className="competitions-page">

      {/* ── Hero ── */}
      <section className="comp-hero">
        <div className="comp-hero-bg" aria-hidden="true">
          <span className="comp-orb comp-orb--1" />
          <span className="comp-orb comp-orb--2" />
          <div className="comp-hero-grid" />
        </div>
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="comp-hero-content">
                  <span className="comp-badge">Competitions</span>
                  <h1 className="comp-hero-title">Competing,<br />Learning &amp; Growing</h1>
                  <p className="comp-hero-desc">
                    Competitions have provided me with valuable opportunities for growth — enhancing my
                    knowledge, pushing my limits, and building connections with students from various
                    schools united by common goals and interests.
                  </p>
                  <div className="comp-hero-meta">
                    <div className="comp-meta-pill"><span>🧠</span> BrainHack CODE_EXP 2024 &amp; 2025</div>
                    <div className="comp-meta-pill"><span>🏛️</span> GovTech GeekOut 2024</div>
                    <div className="comp-meta-pill"><span>📱</span> Huawei Tech For City 2024</div>
                    <div className="comp-meta-pill"><span>🌿</span> NTU Python Pathways 2026</div>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 1: BrainHack 2024 ── */}
      <section className="comp-section comp-section--alt">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={5} className="comp-img-col">
                    <img src={brainhack} alt="BrainHack 2024" className="comp-img comp-img--rect" />
                  </Col>
                  <Col xs={12} md={6} xl={7}>
                    <div className="comp-section-label">Competition · June 2024</div>
                    <h2 className="comp-section-title">BrainHack DSTA CODE_EXP 2024</h2>
                    <span className="comp-role-badge">Finalist · Team Binary Blossoms</span>
                    <p className="comp-body">
                      I participated in the finals of BrainHack CODE_EXP 2024, which took place at Marina
                      Bay Sands on June 12th and 13th. BrainHack 2024 saw 4,000 participants from 109 schools,
                      including many university students.
                    </p>
                    <p className="comp-body">
                      During the finals, Binary Blossoms developed <strong>Be-Leaf</strong> — a functional
                      mobile app featuring AI recognition to determine recyclable and non-recyclable objects.
                      We pitched to a large crowd at MBS, including university students.
                    </p>
                    <p className="comp-body">
                      It was an exciting and enriching event that pushed my limits and broadened my knowledge
                      and skills. A significant accomplishment for our team, especially since it was our first
                      time participating in any competition.
                    </p>
                    <a href={brain1} target="_blank" rel="noopener noreferrer" className="comp-cert-link">
                      📄 View Certificate of Participation
                    </a>
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 3: GeekOut 2024 ── */}
      <section className="comp-section comp-section--alt">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={5} className="comp-img-col">
                    <img src={geekout} alt="GovTech GeekOut 2024" className="comp-img comp-img--rect" />
                  </Col>
                  <Col xs={12} md={6} xl={7}>
                    <div className="comp-section-label">Hackathon · June 2024</div>
                    <h2 className="comp-section-title">GovTech GeekOut 2024</h2>
                    <span className="comp-role-badge">Participant · 25-Hour Hackathon</span>
                    <p className="comp-body">
                      In June 2024, I participated in GeekOut 2024 — a fantastic experience working with
                      teammates from different schools and backgrounds over a 25-hour hackathon.
                    </p>
                    <p className="comp-body">
                      The event provided great insights and learning opportunities through talks and workshops
                      delivered by excellent professionals at GovTech. During the hackathon, we developed a
                      solution to help Singaporean students discover their interests and possible career paths.
                    </p>
                    <a href={geekoutcert} target="_blank" rel="noopener noreferrer" className="comp-cert-link">
                      📄 View Certificate of Participation
                    </a>
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 4: Huawei 2024 ── */}
      <section className="comp-section">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <div className="comp-section-label">Competition · June 2024</div>
                    <h2 className="comp-section-title">Huawei Tech For City 2024</h2>
                    <span className="comp-role-badge">Participant · Team Binary Blossoms</span>
                    <p className="comp-body">
                      My team Binary Blossoms and I also participated in Huawei Tech For City 2024, also
                      during June 2024. This competition built on the idea we developed during BrainHack —
                      we created an improved and updated version of <strong>Be-Leaf</strong>.
                    </p>
                    <p className="comp-body">
                      Our updated innovation reimagines how food delivery works to help solve the recycling
                      problem. Instead of matching delivery riders with customers, our app matches karung
                      guni men, volunteers, and artists with people who want to recycle items — and also
                      educates users on ways to reduce consumption.
                    </p>
                  </Col>
                  <Col xs={12} md={6} xl={5} className="comp-img-col">
                    <img src={huawei} alt="Huawei Tech For City 2024" className="comp-img comp-img--tall" />
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

            {/* ── Section 2: BrainHack 2025 ── */}
      <section className="comp-section">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <div className="comp-section-label">Competition · 2025</div>
                    <h2 className="comp-section-title">BrainHack DSTA CODE_EXP 2025</h2>
                    <span className="comp-role-badge">Finalist · Team Caffeinated Coders</span>
                    <p className="comp-body">
                      Taking part in BrainHack 2025 with over 4,300 students was both challenging and
                      unforgettable — pushing me well out of my comfort zone. This year, our team
                      <strong> Caffeinated Coders</strong> competed in the Code_EXP category and were
                      thrilled to make it to the finals!
                    </p>
                    <p className="comp-body">
                      We developed <strong>Scamateur</strong> — a mobile game designed for young adults aged
                      15–29. Players take on the role of youth cyber defenders, tackling real-world inspired
                      scam scenarios. The goal: stop the spread of misinformation and support scam victims,
                      all while building cyber awareness and empathy through immersive, interactive gameplay.
                    </p>
                    <p className="comp-body">
                      Exploring game design and development for the first time sparked a deeper interest in
                      the field, inspiring me to keep learning, experimenting, and building.
                    </p>
                                        <a href={brain2} target="_blank" rel="noopener noreferrer" className="comp-cert-link">
                      📄 View Certificate of Participation
                    </a>
                  </Col>
                  <Col xs={12} md={6} xl={5} className="comp-img-col">
                    <img src={scametur} alt="Scamateur" className="comp-img comp-img--rect" />
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 5: NTU Python Pathways 2026 ── */}
      <section className="comp-section comp-section--closing">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <div className="comp-section-label">Competition · 2026</div>
                    <h2 className="comp-section-title">NTU Python Pathways 2026</h2>
                    <span className="comp-role-badge">Participant</span>
                    <p className="comp-body">
                      For NTU Python Pathways 2026, my team built <strong>Ecofy</strong> - a pixel-art HDB
                      household simulator that bridges Singapore's sustainability Value-Action Gap,
                      turning abstract climate trade-offs into a real dollars-and-cents survival game.
                    </p>
                    <p className="comp-body">
                      While 80% of Singaporeans care about the environment, only 32% take action due to
                      the perceived "Sustainability Premium." Ecofy tackles this by letting players manage
                      real Singaporean household costs, PUB bills, and carbon footprint in real-time -
                      making the long-term ROI of sustainable choices visible and tangible.
                    </p>
                    <p className="comp-body">
                      Standout features include an <strong>LLM-powered Landlord persona</strong> (backed
                      by GPT-4o) that reacts to your decisions with witty Singaporean commentary, a
                      <strong> Curveball Engine</strong> that throws in unpredictable events like tariff
                      hikes and appliance repairs, and dynamic plot graphs that visualise cash flow and
                      carbon footprint in real-time.
                    </p>
                    <button className="comp-back-btn" onClick={() => navigate('/aboutme')}>
                      Back to About Me <ArrowRightCircle size={20} />
                    </button>
                  </Col>
                  <Col xs={12} md={6} xl={5} className="comp-img-col">
                    <img src={ecofy} alt="Ecofy" className="comp-img comp-img--rect" />
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

export default Competitions;