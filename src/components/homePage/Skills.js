import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
// Import icons from react-icons
import { FaDatabase, FaCloud, FaServer, FaCode, FaHammer, FaBrain, FaCommentAlt, FaRobot } from "react-icons/fa";
import { SiPostgresql, SiMongodb } from "react-icons/si";

const skills = [
  {
    icon: <FaDatabase size={50} color="#0078d4" />,
    name: "SQL Server",
    link: "https://www.microsoft.com/en-us/sql-server",
  },
  {
    icon: <FaCloud size={50} color="#0078d4" />,
    name: "Azure Cloud",
    link: "https://azure.microsoft.com/",
  },
  {
    icon: <FaServer size={50} color="#0078d4" />,
    name: "Azure Database",
    link: "https://azure.microsoft.com/products/azure-sql",
  },
  {
    icon: <FaHammer size={50} color="#0078d4" />,
    name: "Power BI",
    link: "https://powerbi.microsoft.com/",
  },
  {
    icon: <FaCode size={50} color="#0078d4" />,
    name: "T-SQL",
    link: "https://learn.microsoft.com/en-us/sql/t-sql",
  },
  // Additional Skills
  {
    icon: <FaBrain size={50} color="#0078d4" />,
    name: "Machine Learning",
    link: "https://en.wikipedia.org/wiki/Machine_learning",
  },
  {
    icon: <FaCommentAlt size={50} color="#0078d4" />,
    name: "LLM",
    link: "https://openai.com/",
  },
  {
    icon: <FaRobot size={50} color="#0078d4" />,
    name: "Deep Learning",
    link: "https://en.wikipedia.org/wiki/Deep_learning",
  },
  {
    icon: <SiPostgresql size={50} color="#0078d4" />,
    name: "Postgres DB",
    link: "https://www.postgresql.org/",
  },
  {
    icon: <SiMongodb size={50} color="#0078d4" />,
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
];

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <div id="skills" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Ski</span>lls
          </h1>
        </div>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index + 1}>
              <div className="skills">
                {skill.icon}
                <a rel="noopener noreferrer" href={skill.link} target="_blank">
                  <h6>{skill.name}</h6>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default Skills;
