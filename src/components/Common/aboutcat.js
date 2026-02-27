import { Container, Row, Col } from "react-bootstrap";
import mypic from "../../assets/img/mypic.png";
import resume from '../../assets/img/resume.pdf';
import trophy from "../../assets/img/Tropy Star.png";
import comp from "../../assets/img/comp.jpeg";
import hackstart from "../../assets/img/hackstart.jpeg";
import yfc from "../../assets/img/yfc.jpeg";
import cert from "../../assets/img/cert.png";
import internship from "../../assets/img/internship.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
import '../Styles/aboutcat.css';

const cards = [
  {
    img: yfc,
    category: 'Volunteering Experiences',
    description: "During my time at Republic Polytechnic, I've participated in various volunteering experiences. Some were one-time events, while others were recurring opportunities that I've been involved with for an extended period.",
    route: '/aboutme/volunteer',
    icon: '🤝',
  },
  {
    img: internship,
    category: 'Internship',
    description: "I interned at A*STAR's Institute for Infocomm Research (I²R), contributing to the AI4SoL project as a UI/UX designer and full stack developer, building two web applications for math word problem evaluation and generation.",
    route: '/aboutme/internship',
    icon: '💼',
  },
  {
    img: comp,
    category: 'Competitions',
    description: "Competitions provide valuable opportunities for growth, allowing participants (like me!) to enhance their knowledge and experience. They also foster connections with students from various schools, all united by common goals and interests.",
    route: '/aboutme/competitions',
    icon: '🏆',
  },
  {
    img: hackstart,
    category: 'Interest Group / Activities',
    description: "The interest group has been a significant growth opportunity for me, helping me develop leadership skills and learn how to collaborate effectively within a team. Attending various events and workshops has further expanded my knowledge.",
    route: '/aboutme/activities',
    icon: '🚀',
  },
  {
    img: cert,
    category: 'Certifications',
    description: "Throughout my time in the Diploma program, I've had the opportunity to earn various certifications, including the PCEP - Entry-Level Python Programmer Certificate, as well as courses from LinkedIn Learning, DataCamp, and others.",
    route: '/aboutme/certifications',
    icon: '📜',
  },
  {
    img: trophy,
    category: 'Awards & Scholarship',
    description: "These awards and scholarships highlight my academic achievements during my time at Republic Polytechnic, showcasing my dedication and hard work. Each recognition reflects the milestones I have reached in my educational journey.",
    route: '/aboutme/awards',
    icon: '⭐',
  },
];

const AboutCat = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="lab-page">

      {/* ── Hero / About ── */}
      <section className="lab-hero">
        <div className="lab-hero-bg" aria-hidden="true">
          <span className="lab-orb lab-orb--1" />
          <span className="lab-orb lab-orb--2" />
          <div className="lab-hero-grid" />
        </div>

        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row className="align-items-center lab-hero-row">

                  {/* Photo */}
                  <Col xs={12} md={4} xl={4} className="lab-img-col">
                    <div className="lab-img-wrapper">
                      <img src={mypic} alt="About Me" className="lab-img" />
                      <div className="lab-img-glow" />
                    </div>
                  </Col>

                  {/* Text */}
                  <Col xs={12} md={8} xl={8}>
                    <span className="lab-badge">About Me</span>
                    <h1 className="lab-hero-title">
                      Passionate about<br />Technology &amp; Impact
                    </h1>
                    <p className="lab-body">
                      Collaboration with like-minded individuals energizes me, as it facilitates the exchange
                      of ideas and enhances our understanding of our respective fields. My curiosity about
                      technology has sparked a particular interest in <strong>Artificial Intelligence</strong>.
                      At the same time, I am exploring how <strong>software development</strong> can create
                      positive change in the world and support various communities.
                    </p>
                    <p className="lab-body">
                      I am dedicated to discovering and creating innovative solutions that leverage technology
                      for the better!
                    </p>

                    <div className="lab-hero-meta">
                      <div className="lab-meta-pill"><span>🤖</span> AI Enthusiast</div>
                      <div className="lab-meta-pill"><span>💻</span> Full Stack Developer</div>
                      <div className="lab-meta-pill"><span>🌍</span> Tech for Good</div>
                    </div>

                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lab-resume-btn"
                    >
                      View My Resume →
                    </a>
                  </Col>

                </Row>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Categories Slider ── */}
      <section className="lab-cats-section">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="lab-cats-header">
                  <span className="lab-section-label">Explore</span>
                  <h2 className="lab-section-title">My Experiences &amp; Achievements</h2>
                </div>

                <Slider {...sliderSettings} className="lab-slider">
                  {cards.map((card) => (
                    <div key={card.route} className="lab-slide-wrapper">
                      <div className="lab-card">
                        <div className="lab-card-img-wrap">
                          <img
                            src={card.img}
                            alt={card.category}
                            className="lab-card-img"
                          />
                          <div className="lab-card-icon">{card.icon}</div>
                        </div>
                        <div className="lab-card-body">
                          <p className="lab-card-category">{card.category}</p>
                          <p className="lab-card-desc">{card.description}</p>
                          <button
                            className="lab-card-btn"
                            onClick={() => navigate(card.route)}
                          >
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

    </div>
  );
};

export default AboutCat;