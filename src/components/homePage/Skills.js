import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";

// Import icons from react-icons/fa and react-icons/si
import { 
  FaDatabase, FaCloud, FaServer, FaCode, FaHammer, FaBrain, 
  FaCommentAlt, FaRobot, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaGitAlt, FaClipboardCheck, FaChartLine, FaProjectDiagram, FaUsers, 
  FaSearchPlus, FaTasks, FaAws, FaBullseye, FaRocket 
} from "react-icons/fa";
import { 
  SiPostgresql, SiMongodb, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, 
  SiScipy, /* SiMatplotlib, */ SiPytorch, SiMysql, SiTableau, SiMicrosoftexcel, 
  SiMicrosoftoffice, SiJira, SiSap, SiApacheairflow 
} from "react-icons/si";

const skills = [
  // Databases & Cloud Platforms
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
  // Query Languages
  {
    icon: <FaCode size={50} color="#0078d4" />,
    name: "T-SQL",
    link: "https://learn.microsoft.com/en-us/sql/t-sql",
  },
  // AI/ML Capabilities
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
  // Additional AI/ML Skills
  {
    icon: <FaCommentAlt size={50} color="#0078d4" />,
    name: "NLP",
    link: "https://en.wikipedia.org/wiki/Natural_language_processing",
  },
  {
    icon: <FaBullseye size={50} color="#0078d4" />,
    name: "Predictive Modeling",
    link: "https://en.wikipedia.org/wiki/Predictive_analytics",
  },
  {
    icon: <FaRocket size={50} color="#0078d4" />,
    name: "AI-Powered Solutions",
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
  },
  // Other Databases
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
  // Languages
  {
    icon: <FaPython size={50} color="#0078d4" />,
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    icon: <FaCode size={50} color="#0078d4" />,
    name: "PySpark SQL",
    link: "https://spark.apache.org/",
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
  // Frameworks & Libraries
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
    link: "https://www.scipy.org/",
  },
  // Removed SiMatplotlib skill since it's not exported
  {
    icon: <FaChartLine size={50} color="#0078d4" />,
    name: "Seaborn",
    link: "https://seaborn.pydata.org/",
  },
  {
    icon: <SiPytorch size={50} color="#0078d4" />,
    name: "PyTorch",
    link: "https://pytorch.org/",
  },
  // Other Databases (continued)
  {
    icon: <SiMysql size={50} color="#0078d4" />,
    name: "MySQL",
    link: "https://www.mysql.com/",
  },
  // Data Visualization Tools
  {
    icon: <SiTableau size={50} color="#0078d4" />,
    name: "Tableau",
    link: "https://www.tableau.com/",
  },
  {
    icon: <SiMicrosoftexcel size={50} color="#0078d4" />,
    name: "MS Excel",
    link: "https://www.microsoft.com/en-us/microsoft-365/excel",
  },
  // Tools
  {
    icon: <FaGitAlt size={50} color="#0078d4" />,
    name: "Git",
    link: "https://git-scm.com/",
  },
  {
    icon: <SiMicrosoftoffice size={50} color="#0078d4" />,
    name: "MS Office Suite",
    link: "https://www.microsoft.com/en-us/microsoft-365",
  },
  {
    icon: <SiJira size={50} color="#0078d4" />,
    name: "JIRA",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    icon: <SiSap size={50} color="#0078d4" />,
    name: "SAP",
    link: "https://www.sap.com/",
  },
  {
    icon: <SiApacheairflow size={50} color="#0078d4" />,
    name: "Airflow",
    link: "https://airflow.apache.org/",
  },
  // Analytic Skills
  {
    icon: <FaClipboardCheck size={50} color="#0078d4" />,
    name: "Requirements Gathering",
    link: "https://en.wikipedia.org/wiki/Requirements_engineering",
  },
  {
    icon: <FaChartLine size={50} color="#0078d4" />,
    name: "Statistical Analysis",
    link: "https://en.wikipedia.org/wiki/Statistical_inference",
  },
  {
    icon: <FaProjectDiagram size={50} color="#0078d4" />,
    name: "Process Modeling",
    link: "https://en.wikipedia.org/wiki/Process_model",
  },
  {
    icon: <FaUsers size={50} color="#0078d4" />,
    name: "Stakeholder Management",
    link: "https://en.wikipedia.org/wiki/Stakeholder",
  },
  {
    icon: <FaSearchPlus size={50} color="#0078d4" />,
    name: "Gap Analysis",
    link: "https://en.wikipedia.org/wiki/Gap_analysis",
  },
  // Cloud Platforms
  {
    icon: <FaAws size={50} color="#0078d4" />,
    name: "AWS",
    link: "https://aws.amazon.com/",
  },
  // Methodologies
  {
    icon: <FaTasks size={50} color="#0078d4" />,
    name: "Agile",
    link: "https://en.wikipedia.org/wiki/Agile_software_development",
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
            <Col key={index}>
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
