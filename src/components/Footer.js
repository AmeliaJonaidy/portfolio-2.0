import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import github from "../assets/img/github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/amelia-jonaidy-299a5b238/"><img src={navIcon1} alt="amelia-linkedin" /></a>
              <a href="mailto:23002502@myrp.edu.sg"> <img src={navIcon2} alt="amelia-email" /></a>
              <a href="https://github.com/AmeliaJonaidy" target="_blank" rel="noopener noreferrer"><img src={github} alt="amelia-resume" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
