import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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

            {/* Tag filter bar */}
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

            {/* Card grid */}
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