import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import config from './config.json';
import { useNavigate } from 'react-router-dom';
import './CardPage.css';

function PortfolioLand() {
    const navigate = useNavigate();
    const cardArr = config;

    // State to manage the selected tag
    const [selectedTag, setSelectedTag] = useState(null);

    // Function to handle tag selection
    const handleTagClick = (tag) => {
        setSelectedTag(tag === selectedTag ? null : tag); // Toggle the tag
    };

    // Filter cards based on the selected tag
    const filteredCards = selectedTag
        ? cardArr.filter(card => card.tags.includes(selectedTag))
        : cardArr;

    // Get unique tags for the navbar
    const uniqueTags = [...new Set(cardArr.flatMap(card => card.tags))];

    return (
        <div className='portfolio-land'>
            {/* Tags Navigation Bar */}
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

            {filteredCards.map((eachCard, index) => (
                <div className='portfolio-card-container' key={index}>
                    <Card className="portfolio-card">
                        <Card.Img
                            className="portfolio-image"
                            variant="top"
                            src={require(`../assets/img/${eachCard.img}`)}
                        />
                        <Card.Body className="portfolio-content">
                            <Card.Title className="portfolio-title">{eachCard.title}</Card.Title>
                            <Card.Text className="portfolio-text">
                                {eachCard.text}
                            </Card.Text>
                            <Button 
                                className="portfolio-button" 
                                variant="primary" 
                                onClick={() => navigate(eachCard.link)}
                            >
                                Info
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default PortfolioLand;
