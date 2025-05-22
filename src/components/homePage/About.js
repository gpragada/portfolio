import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
// Removed AssignmentIcon import since Projects tab is no longer needed
import SkillSvg from "../../images/about-shape.svg";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  return (
    <div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <div className="container">
        <Row>
          <Col md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text">Profess</span>ional Summary
              </h1>
              <ul className="details">
                <li>3.5+ years of experience in developing scalable data science solutions using Python, with a strong ability to automate complex data processing workflows and streamline business operations.</li>
                <li>Skilled in designing robust ETL pipelines using PySpark and SQL, capable of efficiently processing large-scale datasets and improving data availability for enterprise reporting systems.</li>
                <li>Adept at building interactive web-based interfaces using HTML, CSS, and JavaScript to enhance the usability and functionality of data visualization tools.</li>
                <li>Strong foundation in machine learning model development using TensorFlow, with experience in predictive analytics that supports business forecasting and strategic planning.</li>
                <li>Experienced in advanced data manipulation and statistical programming using NumPy and Pandas for efficient data transformation.</li>
                <li>Knowledgeable in using Scikit-learn and SciPy for feature engineering and model evaluation, focusing on improving performance and accuracy.</li>
                <li>Competent in creating insightful data visualizations using matplotlib and Seaborn to translate technical findings into actionable insights.</li>
                <li>Hands-on expertise in relational database management using MySQL, MS SQL Server, and PostgreSQL with an emphasis on performance tuning.</li>
                <li>Experienced in developing BI dashboards using Power BI and Tableau, integrating real-time KPIs to aid strategic decision-making.</li>
                <li>Proficient in Microsoft Excel for financial modeling and reporting, including advanced functions like Pivot Tables and VLOOKUP.</li>
              </ul>
              <div className="d-flex align-items-center resume-section">
                <h6>Resume :</h6>
                <a
                  rel="noopener noreferrer"
                  href="/Giri_(Resume)_.pdf"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${tab === "experience" ? "active-tab custom-mr-3" : "inactive-tab"} tab
                    `}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Professional Experience</h5>
                  </Col>
                  <Col
                    className={`
                      ${tab === "education" ? "active-tab custom-ml-3" : "inactive-tab"} tab
                    `}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Education</h5>
                  </Col>
                  {/* Removed Projects button */}
                </Row>
                <br />
                <div className="about-sub-data">
                  {tab === "experience" && (
                    <div className="work-experiences">
                      <div className="experience-item">
                        <h5>Data Scientist (Intern) - Northern Trust | Binghamton | Jan 2025 – Current</h5>
                        <ul>
                          <li>Deployed ML and NLP models using AWS SageMaker and Lambda, creating scalable AI-powered solutions and reducing infrastructure costs by 22% through serverless deployment.</li>
                          <li>Developed a customer segmentation model using K-Means and XGBoost that improved campaign engagement by 27% and reduced churn by 18%.</li>
                          <li>Processed over 2 TB of structured and unstructured data using PySpark SQL to boost data availability by 35% via optimized ETL pipelines.</li>
                          <li>Implemented deep learning models with TensorFlow to predict customer lifetime value with 93% accuracy, driving personalized marketing strategies.</li>
                          <li>Optimized complex MySQL queries, reducing report generation time by 40% for monthly business reviews.</li>
                          <li>Built executive dashboards using Tableau with real-time KPIs to enhance stakeholder visibility and insights.</li>
                          <li>Managed version control over 30+ data science notebooks and production scripts using Git.</li>
                        </ul>
                      </div>
                      <div className="experience-item">
                        <h5>Data Analyst - Tata Consultancy Services | India | Apr 2021 – Jul 2023</h5>
                        <ul>
                          <li>Leveraged machine learning frameworks such as TensorFlow and Scikit-learn for predictive modeling, including regression, classification, clustering, and NLP tasks.</li>
                          <li>Developed and maintained data pipelines using PySpark and SQL in AWS environments to ensure secure and scalable transformations.</li>
                          <li>Conducted comprehensive data analysis using Python (Pandas, NumPy, SciPy, Scikit-learn) and statistical modeling for strategic business insights.</li>
                          <li>Designed and deployed interactive dashboards in Power BI and Tableau, translating complex datasets into actionable insights.</li>
                          <li>Collaborated in Agile/Scrum teams, participating in sprint planning and backlog grooming to deliver data-driven features.</li>
                          <li>Automated ETL operations using Airflow, ensuring reliable data ingestion from MySQL, PostgreSQL, and MS SQL Server.</li>
                          <li>Optimized SQL queries for ad-hoc reporting and advanced analytics in relational databases.</li>
                          <li>Delivered executive reporting and visualizations using Excel PivotTables, VLOOKUP, and PowerPoint.</li>
                        </ul>
                      </div>
                      <div className="experience-item">
                        <h5>Data Analyst - Cybage Software | India | Jan 2020 – Mar 2021</h5>
                        <ul>
                          <li>Optimized complex PostgreSQL queries, reducing query execution time by 40% and enabling faster data retrieval.</li>
                          <li>Utilized NumPy for matrix operations and statistical analyses to evaluate pricing trends across multiple retail channels.</li>
                          <li>Created correlation and distribution visualizations with Seaborn to inform budget allocation decisions.</li>
                          <li>Executed advanced SQL queries, including CTEs and window functions, for in-depth campaign analytics.</li>
                          <li>Contributed to building interactive dashboards using JavaScript chart libraries, enhancing internal tool engagement.</li>
                          <li>Automated reconciliation processes with Excel formulas and macros, saving over 30 hours per month.</li>
                          <li>Prepared executive presentations and documentation using MS Office Suite to support project tracking.</li>
                          <li>Conducted stakeholder interviews and translated business KPIs into technical dashboard specifications.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {tab === "education" && (
                    <div className="education">
                      <div className="education-item">
                        <h5>Master of Science in Information Systems</h5>
                        <p>
                          Binghamton University, State University of New York Binghamton<br />
                          Aug 2023 - May 2025
                        </p>
                      </div>
                      <div className="education-item">
                        <h5>Bachelor of Technology in Electronics and Communication</h5>
                        <p>
                          Andhra University, India Visakhapatnam<br />
                          June 2016 – Apr 2020
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Removed Projects tab content */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;