import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { FaFilm, FaKeyboard, FaHeartbeat, FaYoutube, FaCar, FaRobot } from "react-icons/fa";

const myProjects = [
  {
    icon: <FaFilm size={72} color="#e50914" />,
    title: "Netflix Subscriptiion forecasting",
    description:
      "Tried to replicate WhatsApp UI, and some features also. - Can Create Groups - Can Switch B/w the groups - send messages to any groups. Used Firebase for the databases",
    source: "https://github.com/gpragada",
    demoLink: "https://whatsapp-clone-53d8c.web.app/rooms/QIPEvsdzwLBr8AcT1WVD",
  },
  {
    icon: <FaKeyboard size={72} color="#000" />,
    title: "Next Word Prediction Model",
    description:
      "The aim of this project is to make a pixel-perfect clone of Facebook. I used the BEM naming Convention. Used Firebase for the databases",
    source: "https://github.com/gpragada",
    demoLink: "https://facebook-clone-ccd54.web.app/",
  },
  {
    icon: <FaHeartbeat size={72} color="#ff0000" />,
    title: "pneumonia detection using CNN",
    description:
      "This page is designed using HTML, CSS and Reactjs, redux, reduxthunk, json mocker. User can upload post, like and comment on other posts.",
    source: "https://github.com/gpragada",
    demoLink: "https://linkedin-clone-a7ba5.web.app/",
  },
  {
    icon: <FaYoutube size={72} color="#FF0000" />,
    title: "Youtube API Data Analysis",
    description:
      "User can sign up with Google API and input their own data. After login, they can create an invoice. Bonus—Can generate a bill in PDF form.",
    source: "https://github.com/gpragada",
    demoLink: "/",
  },
  {
    icon: <FaCar size={72} color="#000" />,
    title: "Tesla Stock Analysis",
    description:
      "Concept used ContextApi, Axios, Styled-Components, React-Router-Dom. User can filter through Products e.g. sort price, filter by category",
    source: "https://github.com/gpragada",
    demoLink: "https://shopping-cart-a0d9a.web.app/",
  },
  {
    icon: <FaRobot size={72} color="#222" />,
    title: "LLAMA Models & OLAMA Models",
    description:
      "User can get details of vaccine slot availability on one click",
    source: "https://github.com/gpragada",
    demoLink: "https://covidsaharsa.netlify.app/",
  },
  {
    icon: <FaRobot size={72} color="#222" />,
    image: process.env.PUBLIC_URL + "/chatbot.png",
    title: "AI-Powered Business Insights Chatbot",
    description:
      "Interactive GenAI chatbot enabling business query analytics.\nExecutes real-time SQL on sales ops data.\nVisualizes results with charts and dashboards.\nIntegrates OpenAI GPT with PostgreSQL/MySQL.",
    source: "https://github.com/gpragada/ai-chatbot",
    demoLink: "https://your-chatbot-demo-link.com",
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
