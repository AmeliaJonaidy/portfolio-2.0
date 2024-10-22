import { Container, Row, Col } from "react-bootstrap";
import trophy from "../assets/img/Tropy Star.png"; 
import comp from "../assets/img/comp.jpeg";
import Slider from "react-slick";
import hackstart from "../assets/img/hackstart.jpeg";
import yfc from "../assets/img/yfc.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const AboutCat = () => {
      const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div className="aboutcat">
            <Slider {...settings}>
                <div className="aboutcat-card">
                    <div className="aboutcat-header">
                        <img src={yfc} alt="Volunteering Experiences" className="aboutcat-image" />
                    </div>
                    <div className="aboutcat-content">
                        <p className="aboutcat-category">Volunteering Experiences</p>
                        <p className="aboutcat-description">
                            During my time at Republic Polytechnic, I've participated in various volunteering experiences. 
                            Some were one-time events, while others were recurring opportunities that I've been involved with for an extended period.
                        </p>
                        <button className= "aboutcat-button" onClick={() => navigate('/aboutme/volunteer')}> Read More </button>
                    </div>
                </div>

                <div className="aboutcat-card">
                    <div className="aboutcat-header">
                        <img src={hackstart} alt="Interest Group/Project/Activities" className="aboutcat-image" />
                    </div>
                    <div className="aboutcat-content">
                        <p className="aboutcat-category">Interest Group/Project/Activities</p>
                        <p className="aboutcat-description">
                            The interest group has been a significant growth opportunity for me, helping me develop leadership skills 
                            and learn how to collaborate effectively within a team. Attending various events and workshops has further expanded my knowledge.
                        </p>
                        <button className= "aboutcat-button" onClick={() => navigate('/aboutme/activities')}> Read More </button>
                    </div>
                </div>

                <div className="aboutcat-card">
                    <div className="aboutcat-header">
                        <img src={comp} alt="Competitions" className="aboutcat-image" />
                    </div>
                    <div className="aboutcat-content">
                        <p className="aboutcat-category">Competitions</p>
                        <p className="aboutcat-description">
                            Competitions provide valuable opportunities for growth, allowing participants (like me!) to enhance their knowledge and experience. 
                            They also foster connections with students from various schools, all united by common goals and interests.
                        </p>
                        <button className= "aboutcat-button" onClick={() => navigate('/aboutme/competitions')}> Read More </button>
                    </div>
                </div>

                <div className="aboutcat-card">
                    <div className="aboutcat-header">
                        <img src={trophy} alt="Awards and Scholarship" className="aboutcat-image" />
                    </div>
                    <div className="aboutcat-content">
                        <p className="aboutcat-category">Awards and Scholarship</p>
                        <p className="aboutcat-description">
                            These awards and scholarships highlight my academic achievements during my time at Republic Polytechnic, 
                            showcasing my dedication and hard work. Each recognition reflects the milestones I have reached in my educational journey.
                        </p>
                        <button className= "aboutcat-button" onClick={() => navigate('/aboutme/awards')}> Read More </button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default AboutCat;
