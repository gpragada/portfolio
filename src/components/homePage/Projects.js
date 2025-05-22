import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { FaFilm, FaKeyboard, FaHeartbeat, FaYoutube, FaCar, FaRobot } from "react-icons/fa";

const myProjects = [
  {
    icon: <FaRobot size={72} color="#8e44ad" />,
    title: "Deep Learning Experiments on Fashion",
    description:
      "Optimized ANN/CNN models on Fashion MNIST with hyperparameter tuning; reached up to 92.6% accuracy.",
    source: "https://github.com/gpragada",
    demoLink: "#",
  },
  {
    icon: <FaYoutube size={72} color="#ff6347" />,
    title: "COVID-19 Case Study & Survey Analysis",
    description:
      "Developed a deep NN to forecast COVID-19 trends with reliable RMSE scores based on historical data.",
    source: "https://github.com/gpragada",
    demoLink: "#",
  },
  {
    icon: <FaFilm size={72} color="#e50914" />,
    title: "Netflix Subscription Forecasting",
    description:
      "Forecasted Netflix subscriptions using ARIMA/SARIMA after thorough EDA of regional trends.",
    source: "https://github.com/gpragada",
    demoLink: "https://whatsapp-clone-53d8c.web.app/rooms/QIPEvsdzwLBr8AcT1WVD",
  },
  {
    icon: <FaCar size={72} color="#000" />,
    title: "Tesla Stock Price Prediction",
    description:
      "Used Prophet to forecast Tesla’s stock prices for 30 days using historical data preprocessing.",
    source: "https://github.com/gpragada",
    demoLink: "https://shopping-cart-a0d9a.web.app/",
  },
  {
    icon: <FaHeartbeat size={72} color="#ff0000" />,
    title: "Pneumonia Detection via CNNs",
    description:
      "Built a CNN-based classifier for chest X-rays with data augmentation, achieving over 92% accuracy.",
    source: "https://github.com/gpragada",
    demoLink: "https://linkedin-clone-a7ba5.web.app/",
  },
  {
    icon: <FaKeyboard size={72} color="#000" />,
    title: "Next Word Prediction Model",
    description:
      "A model for predicting the next word in a sequence; built as a pixel-perfect UI clone with Firebase.",
    source: "https://github.com/gpragada",
    demoLink: "https://facebook-clone-ccd54.web.app/",
  },
  {
    icon: <FaRobot size={72} color="#00aced" />,
    title: "AI-Powered Insights Chatbot",
    description:
      "Chatbot that converts NL queries to SQL, displays real-time dashboards, and automates ETL workflows.",
    source: "https://github.com/gpragada",
    demoLink: "https://northerntrust-chatbot-demo.netlify.app/",
  },
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => (
              <Col md={4} className="mb-5" key={index + 1}>
                <div className="project-card">
                  <div className="img-section">
                    {project.icon}
                    <div className="imageCardEffect"></div>
                  </div>
                  <div className="project-info">
                    <h5 className="color-white font-weight-bold">
                      {project.title}
                    </h5>
                    <p className="color-white">{project.description}</p>
                    <div className="d-flex justify-content-between mr-4">
                      <a
                        rel="noopener noreferrer"
                        href={project.source}
                        className="project-card-btn"
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
