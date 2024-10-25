
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import config from './config.json';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CardPage.css';

function PortfolioLand() {
    const navigate = useNavigate(); // Initialize useNavigate
    const cardArr = config;

    const handleNavigate = (link) => {
        navigate(link); // Navigate to the specified link
    };

    return (
        <div className='portfolio-land'> {/* Updated class name */}
            {cardArr.map((eachCard, index) => (
                <div className='col-md-3' style={{ marginBottom: '4%' }} key={index}>
                    <Card className="portfolio-card"> 
                        <Card.Img
                            className="portfolio-image" 
                            variant="top"
                            src={require(`../assets/img/${eachCard.img}`)} 
                        />
                        <Card.Body className="portfolio-content"> {/* Updated class name */}
                            <Card.Title className="portfolio-title">{eachCard.title}</Card.Title> {/* Updated class name */}
                            <Card.Text className="portfolio-text"> {/* Updated class name */}
                                {eachCard.text}
                            </Card.Text>
                            <Button className="portfolio-button" variant="primary" onClick={() => handleNavigate(eachCard.link)}>Info</Button> {/* Updated class name */}
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default PortfolioLand;