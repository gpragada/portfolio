import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
// Import icons from react-icons
import { FaDatabase, FaCloud, FaServer, FaCode, FaHammer, FaBrain, FaRobot, FaMagic, FaCommentAlt, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaBolt, FaLanguage, FaChartLine, FaGitAlt, FaAws, FaTasks, FaChartPie } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiOpenai, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiScipy, SiPytorch, SiMysql, SiTableau, SiMicrosoftoffice } from "react-icons/si";

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
  {
    icon: <SiOpenai size={50} color="#0078d4" />,
    name: "Generative AI",
    link: "https://openai.com/",
  },
  {
    icon: <FaMagic size={50} color="#0078d4" />,
    name: "DALL-E",
    link: "https://openai.com/dall-e/",
  },
  {
    icon: <FaPython size={50} color="#0078d4" />,
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    icon: <FaBolt size={50} color="#0078d4" />,
    name: "PySpark",
    link: "https://spark.apache.org/docs/latest/api/python/index.html",
  },
  {
    icon: <FaHtml5 size={50} color="#0078d4" />,
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <FaCss3Alt size={50} color="#0078d4" />,
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <FaJsSquare size={50} color="#0078d4" />,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <SiTensorflow size={50} color="#0078d4" />,
    name: "TensorFlow",
    link: "https://www.tensorflow.org/",
  },
  {
    icon: <SiNumpy size={50} color="#0078d4" />,
    name: "NumPy",
    link: "https://numpy.org/",
  },
  {
    icon: <SiPandas size={50} color="#0078d4" />,
    name: "Pandas",
    link: "https://pandas.pydata.org/",
  },
  {
    icon: <SiScikitlearn size={50} color="#0078d4" />,
    name: "Scikit-learn",
    link: "https://scikit-learn.org/",
  },
  {
    icon: <SiScipy size={50} color="#0078d4" />,
    name: "SciPy",
    link: "https://scipy.org/",
  },
  {
    icon: <FaChartPie size={50} color="#0078d4" />,
    name: "matplotlib",
    link: "https://matplotlib.org/",
  },
  {
    icon: <SiPytorch size={50} color="#0078d4" />,
    name: "PyTorch",
    link: "https://pytorch.org/",
  },
  {
    icon: <SiMysql size={50} color="#0078d4" />,
    name: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    icon: <SiTableau size={50} color="#0078d4" />,
    name: "Tableau",
    link: "https://www.tableau.com/",
  },
  {
    icon: <FaLanguage size={50} color="#0078d4" />,
    name: "NLP",
    link: "https://en.wikipedia.org/wiki/Natural_language_processing",
  },
  {
    icon: <FaChartLine size={50} color="#0078d4" />,
    name: "Predictive Modeling",
    link: "https://en.wikipedia.org/wiki/Predictive_analytics",
  },
  {
    icon: <FaGitAlt size={50} color="#0078d4" />,
    name: "Git",
    link: "https://git-scm.com/",
  },
  {
    icon: <SiMicrosoftoffice size={50} color="#0078d4" />,
    name: "MS Office",
    link: "https://www.microsoft.com/en-us/microsoft-365",
  },
  {
    icon: <FaAws size={50} color="#0078d4" />,
    name: "AWS Cloud",
    link: "https://aws.amazon.com/",
  },
  {
    icon: <FaTasks size={50} color="#0078d4" />,
    name: "Agile",
    link: "https://www.agilealliance.org/agile101",
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
