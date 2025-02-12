import React from "react";
import "../styles/_footer.scss";
import { Col, Nav, Row } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="footer pb-5 pt-5 ">
      <div className="container">
        <Row className="justify-content-between align-items-center">
          <Col md={3} xs={12}>
            <div className="d-flex justify-content-between footer-info mt-4">
            <Nav.Link
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/giripragada0881/"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="Linkedin"
                >
                 <LinkedInIcon/>
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://github.com/gpragada"
                  className="nav-item cursor-pointer"
                  aria-label="Github"
                  target="_blank"
                >
                  <GitHubIcon />
                </Nav.Link>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 ">
              <li className="p-1">
                <a rel="noopener noreferrer" href="#home">Home</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#about">About</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#skills">Skills</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#projects">Projects</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4  footer-end">
          <p>
            Designed & Developed by{" "}
            <span className="chonburi-font green-text"> Giri Pragada</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
