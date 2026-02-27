import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import config from '../../config/config.json';
import ProjectModal from './ProjectModal';
import '../Styles/CardPage.css';

function PortfolioLand() {
    const cardArr = config;
    const [selectedTag, setSelectedTag] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleTagClick = (tag) => {
        setSelectedTag(tag === selectedTag ? null : tag);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    const filteredCards = selectedTag
        ? cardArr.filter(card => card.tags.includes(selectedTag))
        : cardArr;

    const uniqueTags = [...new Set(cardArr.flatMap(card => card.tags))];

    return (
        <div className='portfolio-land'>

            {/* ── Hero Overview ── */}
            <section className="portfolio-hero">
                <div className="portfolio-hero-bg" aria-hidden="true">
                    <span className="portfolio-orb portfolio-orb--1" />
                    <span className="portfolio-orb portfolio-orb--2" />
                    <div className="portfolio-hero-grid" />
                </div>
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <div className="portfolio-hero-content">
                                    <span className="portfolio-hero-badge">My Portfolio</span>
                                    <h1 className="portfolio-hero-title">
                                        Projects &amp; Work
                                    </h1>
                                    <p className="portfolio-hero-desc">
                                        A collection of projects spanning mobile development, web applications,
                                        AI, game development, and design. Each project reflects my passion for
                                        building meaningful solutions through technology.
                                    </p>
                                    <div className="portfolio-hero-meta">
                                        <div className="portfolio-meta-pill"><span>📱</span> Mobile Development</div>
                                        <div className="portfolio-meta-pill"><span>🌐</span> Web Development</div>
                                        <div className="portfolio-meta-pill"><span>🤖</span> Artificial Intelligence</div>
                                        <div className="portfolio-meta-pill"><span>🎮</span> Game Development</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* ── Tag filter bar — sticky ── */}
            <div className="tags-navbar">
                {uniqueTags.map((tag, index) => (
                    <span
                        key={index}
                        className={`portfolio-tag ${selectedTag === tag ? 'active' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* ── Card grid ── */}
            <div className="portfolio-cards-grid">
                {filteredCards.map((eachCard, index) => (
                    <div className='portfolio-card-container' key={index}>
                        <Card className="portfolio-card">
                            <Card.Img
                                className="portfolio-image"
                                variant="top"
                                src={require(`../../assets/img/${eachCard.img}`)}
                            />
                            <Card.Body className="portfolio-content">
                                <Card.Title className="portfolio-title">{eachCard.title}</Card.Title>
                                <Card.Text className="portfolio-text">
                                    {eachCard.shortText}
                                </Card.Text>
                                <Button
                                    className="portfolio-button"
                                    variant="primary"
                                    onClick={() => handleProjectClick(eachCard)}
                                >
                                    More Info
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <ProjectModal
                show={showModal}
                onHide={handleCloseModal}
                project={selectedProject}
            />
        </div>
    );
}

export default PortfolioLand;