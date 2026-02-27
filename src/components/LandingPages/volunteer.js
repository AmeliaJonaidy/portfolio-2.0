import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
import yfc2 from '../../assets/img/yfc2.jpeg';
import yfc1 from '../../assets/img/yfc.jpeg';
import world1 from '../../assets/img/world1.jpeg';
import OH1 from '../../assets/img/OH1.jpeg';
import '../Styles/volunteer.css';

const Volunteer = () => {
  const navigate = useNavigate();

  return (
    <div className="volunteer-page">

      {/* ── Hero ── */}
      <section className="volunteer-hero">
        <div className="volunteer-hero-bg" aria-hidden="true">
          <span className="vol-orb vol-orb--1" />
          <span className="vol-orb vol-orb--2" />
          <div className="vol-hero-grid" />
        </div>
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="volunteer-hero-content">
                  <span className="volunteer-badge">Volunteering Experiences</span>
                  <h1 className="volunteer-hero-title">Giving Back &amp;<br />Growing Forward</h1>
                  <p className="volunteer-hero-desc">
                    During my time at Republic Polytechnic, I've participated in various volunteering
                    experiences — some one-time events, others recurring opportunities I've been
                    involved with over an extended period.
                  </p>
                  <div className="volunteer-hero-meta">
                    <div className="vol-meta-pill"><span>🙏</span> SYFC Member &amp; Subcore Leader</div>
                    <div className="vol-meta-pill"><span>🌏</span> WorldSkills 2023 Volunteer</div>
                    <div className="vol-meta-pill"><span>🏫</span> RP Open House Ambassador</div>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 1: SYFC Part 1 ── */}
      <section className="vol-section vol-section--alt">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={5} className="vol-img-col">
                    <img
                      src={yfc2}
                      alt="SYFC"
                      className="vol-img vol-img--round"
                    />
                  </Col>
                  <Col xs={12} md={6} xl={7}>
                    <div className="vol-section-label">Volunteering · 2022 – Present</div>
                    <h2 className="vol-section-title">Singapore Youth For Christ (SYFC)</h2>
                    <span className="vol-role-badge">Member + Subcore Leader</span>
                    <p className="vol-body">
                      Singapore Youth for Christ is an organization with a range of ministries, and I serve
                      as a student leader in the polytechnic ministry. I became a member when I joined the
                      PFP program in 2022 and took on the role of student leader at the beginning of my
                      first year in 2023.
                    </p>
                    <p className="vol-body">
                      As a member, I've taken part in a variety of activities and even assisted with
                      organizing a few. In September 2024, I attended the FellowSheep Partea as a
                      participant. I was also active in organizing the "Rest and Play Holiday PEP" for
                      Christian Republic Polytechnic students, which provided an opportunity for fellowship
                      over the holidays. During school, I attended weekly gatherings to discuss specific
                      themes or carry out a bible study.
                    </p>
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 2: SYFC Part 2 ── */}
      <section className="vol-section">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <div className="vol-section-label">Leadership &amp; Growth</div>
                    <h2 className="vol-section-title">Leading the Team</h2>
                    <p className="vol-body">
                      As a Subcore Leader, I worked with my team to create social media content for our
                      Instagram, creating series such as "Armour of God" and "Fruit of the Spirit." I also
                      created events to help students connect, such as a "Welcome Tea" to welcome new
                      members and begin the academic year. Furthermore, my teammates and I organized a
                      weekly event called "Rest and Play."
                    </p>
                    <p className="vol-body">
                      SYFC has helped me grow in numerous ways — focusing on my relationship with God and
                      teaching me the meaning of perseverance. Juggling school, hackathons, being on the
                      EXCO of an interest group, and SYFC all at once taught me how to manage my time more
                      effectively than ever before. This experience has undoubtedly helped me grow in ways
                      I never imagined.
                    </p>
                  </Col>
                  <Col xs={12} md={6} xl={5} className="vol-img-col">
                    <img
                      src={yfc1}
                      alt="SYFC activities"
                      className="vol-img vol-img--round"
                    />
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 3: WorldSkills ── */}
      <section className="vol-section vol-section--alt">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={5} className="vol-img-col">
                    <img
                      src={world1}
                      alt="WorldSkills 2023"
                      className="vol-img vol-img--rect"
                    />
                  </Col>
                  <Col xs={12} md={6} xl={7}>
                    <div className="vol-section-label">Volunteering · 2023</div>
                    <h2 className="vol-section-title">WorldSkills 2023 ASEAN</h2>
                    <span className="vol-role-badge">Student Volunteer</span>
                    <p className="vol-body">
                      In 2023, I had the opportunity to help out as a student volunteer, bringing secondary
                      school students around the Suntec Convention Center to see the WorldSkills ASEAN
                      competition and attend various seminars and workshops. Observing ASEAN's top performers
                      compete in technical skills was a truly memorable experience.
                    </p>
                    <p className="vol-body">
                      This volunteering experience taught me how to work together with new individuals and
                      adapt to change. As a large-scale event, there were multiple adjustments that needed
                      to be made — such as changes in timing or route — and my team and I were able to do
                      so while maintaining the students' safety throughout.
                    </p>
                  </Col>
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Section 4: Open House ── */}
      <section className="vol-section vol-section--closing">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                    <div className="vol-section-label">Volunteering · 2024 &amp; 2025</div>
                    <h2 className="vol-section-title">RP Open House Student Ambassador</h2>
                    <span className="vol-role-badge">Student Ambassador</span>
                    <p className="vol-body">
                      In 2024, I had the opportunity to be an Open House Student Ambassador, bringing
                      secondary students around RP to the different schools and diploma booths so they
                      could find out more about their interests and what each diploma has to offer.
                    </p>
                    <p className="vol-body">
                      I also engaged in talks with students to better understand their interests, sharing
                      what I knew in the hopes of positively impacting their decision-making.
                    </p>
                    <p className="vol-body">
                      In 2025, I had the opportunity to represent my diploma at the Open House, managing
                      a booth and engaging with secondary school students — sharing insights about my
                      diploma and showcasing projects created by students from different cohorts.
                    </p>
                    <button className="vol-back-btn" onClick={() => navigate('/aboutme')}>
                      Back to About Me <ArrowRightCircle size={20} />
                    </button>
                  </Col>
                  <Col xs={12} md={6} xl={5} className="vol-img-col">
                    <img
                      src={OH1}
                      alt="RP Open House"
                      className="vol-img vol-img--rect"
                    />
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

export default Volunteer;