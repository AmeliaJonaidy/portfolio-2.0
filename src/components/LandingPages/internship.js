import { Container } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import '../Styles/internship.css';

const tasks = {
  evaluation: [
    "Designing wireframes and interactive prototypes using Figma",
    "Refining wireframes and prototypes based on user and supervisor feedback",
    "Implementing form validation and user input handling (Frontend)",
    "Rendering math expressions using LaTeX.js for better readability (Frontend)",
    "Developing API endpoints using FastAPI (Backend)",
    "Structuring data for efficient retrieval and storage using Python (Backend)",
    "Conducting local testing to ensure functionality and usability",
    "Reviewing and improving code structure and readability",
  ],
  generator: [
    "Designing wireframes and interactive prototypes using Figma",
    "Frontend and backend development",
    "Integrating LLM into the frontend and backend pipeline",
    "Structuring data for efficient retrieval and storage using Python (Backend)",
    "Conducting local testing to ensure functionality and usability",
  ],
};

const techStack = [
  { label: "Next.js", category: "Frontend" },
  { label: "CSS", category: "Frontend" },
  { label: "LaTeX.js", category: "Frontend" },
  { label: "Figma", category: "Design" },
  { label: "Python", category: "Backend" },
  { label: "FastAPI", category: "Backend" },
  { label: "LLM Integration", category: "AI" },
];

const Internship = () => {
  return (
    <section className="internship-page">

      {/* ── Hero ── */}
      <section className="intern-hero">
        <div className="intern-hero-bg" aria-hidden="true">
          <span className="hero-orb hero-orb--1" />
          <span className="hero-orb hero-orb--2" />
          <div className="hero-grid" />
        </div>
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="intern-hero-content">
                  <span className="intern-badge">Internship Experience</span>
                  <h1 className="intern-hero-title">
                    A*STAR
                    <span className="intern-hero-sub">Institute for Infocomm Research (I²R)</span>
                  </h1>
                  <p className="intern-hero-desc">
                    Contributing as a student intern in UI/UX design and full stack development
                    under the <strong>AI4SoL</strong> project — Data and Theory Driven AI to Boost the Science of Learning.
                  </p>
                  <div className="intern-hero-meta">
                    <div className="meta-pill"><span className="meta-icon">🏛️</span> A*STAR · I²R</div>
                    <div className="meta-pill"><span className="meta-icon">💼</span> Student Intern</div>
                    <div className="meta-pill"><span className="meta-icon">🔬</span> AI4SoL Project</div>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Overview ── */}
      <section className="intern-section intern-overview">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="section-label">Overview</div>
                <h2 className="section-title">What I Did</h2>
                <p className="section-body">
                  During my internship at A*STAR, I was responsible for contributing to two web-based
                  applications centred on math word problem evaluation and generation. My role spanned
                  the full development lifecycle — from user research and Figma prototyping through to
                  frontend implementation and backend API development — giving me hands-on exposure
                  to real-world iterative design and engineering practices.
                </p>
                <div className="tech-stack">
                  {techStack.map((t) => (
                    <span key={t.label} className={`tech-pill tech-pill--${t.category.toLowerCase()}`}>
                      <span className="tech-category">{t.category}</span>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── App 1 ── */}
      <section className="intern-section intern-app">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="app-card">
                  <div className="app-card-header">
                    <div className="app-number">01</div>
                    <div className="app-card-title-group">
                      <span className="app-status app-status--complete">Completed</span>
                      <h3 className="app-card-title">Math Word Problem Evaluation Tool</h3>
                    </div>
                  </div>
                  <p className="app-card-desc">
                    A dual-mode review platform designed to streamline the quality assessment of
                    AI-generated math word problems. The tool supports both individual review and
                    consolidated multi-reviewer analysis to drive informed editorial decisions.
                  </p>
                  <div className="app-modes">
                    <div className="mode-card">
                      <div className="mode-icon">📝</div>
                      <div>
                        <h4 className="mode-title">Mode 1 — Individual Review</h4>
                        <p className="mode-desc">
                          Reviewers evaluate each problem against structured criteria: plausibility,
                          clarity, answerability, and topic alignment.
                        </p>
                      </div>
                    </div>
                    <div className="mode-card">
                      <div className="mode-icon">📊</div>
                      <div>
                        <h4 className="mode-title">Mode 2 — Consolidated Results</h4>
                        <p className="mode-desc">
                          Aggregates feedback across multiple reviewers so editors can analyse
                          consensus and make a final quality decision per problem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="task-list-heading">My Contributions</div>
                  <ul className="task-list">
                    {tasks.evaluation.map((t, i) => (
                      <li key={i} className="task-item">
                        <span className="task-bullet" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── App 2 ── */}
      <section className="intern-section intern-app intern-app--alt">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="app-card app-card--alt">
                  <div className="app-card-header">
                    <div className="app-number app-number--alt">02</div>
                    <div className="app-card-title-group">
                      <span className="app-status app-status--ongoing">Ongoing</span>
                      <h3 className="app-card-title">Math Word Problem Authoring App</h3>
                    </div>
                  </div>
                  <p className="app-card-desc">
                    An LLM-powered authoring tool that generates math word problems complete with
                    underlying structure and context. Reviewers can verify accuracy, edit any
                    incorrect or unclear content, and save the finalised problem for downstream use.
                  </p>
                  <div className="app-purpose">
                    <span className="purpose-icon">🎯</span>
                    <p>
                      Ensures AI-generated problems are accurate, well-structured, and suitable for
                      educational deployment — with a human-in-the-loop validation step.
                    </p>
                  </div>
                  <div className="task-list-heading">My Contributions</div>
                  <ul className="task-list">
                    {tasks.generator.map((t, i) => (
                      <li key={i} className="task-item">
                        <span className="task-bullet" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

      {/* ── Takeaways ── */}
      <section className="intern-section intern-takeaways">
        <Container>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="section-label">Reflection</div>
                <h2 className="section-title">Key Takeaways</h2>
                <div className="takeaway-grid">
                  {[
                    { icon: "🎨", title: "UI/UX Design", body: "Gained practical experience in designing and iterating wireframes and prototypes in Figma based on real user and supervisor feedback." },
                    { icon: "⚡", title: "Full Stack Development", body: "Built end-to-end features spanning Next.js frontends, FastAPI backends, and Python data pipelines within a professional codebase." },
                    { icon: "🤖", title: "AI Integration", body: "Integrated large language models into a production-grade web application, bridging AI research and user-facing software." },
                    { icon: "🔄", title: "Iterative Process", body: "Experienced real-world agile workflows — understanding user requirements, gathering feedback, and continuously refining the product." },
                  ].map((item) => (
                    <div className="takeaway-card" key={item.title}>
                      <div className="takeaway-icon">{item.icon}</div>
                      <h4 className="takeaway-title">{item.title}</h4>
                      <p className="takeaway-body">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>

    </section>
  );
};

export default Internship;