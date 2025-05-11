import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import aboutStyles from "./aboutStyles.module.css"; // Revert to aboutStyles

const About = () => {
  const [tab, setTab] = useState("experience");

  return (
    <div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />
      <div className="container">
        <Row>
          <Col md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text">Abo</span>ut Me
              </h1>
              <p className="details">
                Over 3.5 years of hands-on experience building scalable data science solutions in Python, with strong expertise in automating complex workflows to drive operational efficiency.
                Proven ability in designing robust ETL pipelines using PySpark and SQL to handle large-scale datasets and enhance enterprise data availability.
                Skilled in developing interactive, user-friendly data apps and dashboards using HTML, CSS, JavaScript, Power BI, and Tableau to support real-time business insights.
                Solid foundation in machine learning and deep learning using TensorFlow, Scikit-learn, and SciPy—delivering predictive analytics that power forecasting and strategic planning.
                Advanced data manipulation using NumPy and Pandas, with a strong focus on feature engineering and model optimization.
                Strong command over relational databases (MySQL, MS SQL Server, PostgreSQL), with expertise in performance tuning and handling high-volume data.
                Proficient in financial modeling and data automation using Microsoft Excel, including advanced formulas and task streamlining techniques.
              </p>
              <div className="d-flex align-items-center resume-section">
                <h6>Resume :</h6>
                <a
                  rel="noopener noreferrer"
                  href={process.env.PUBLIC_URL + "/Giri_AI.pdf"}
                  target="_blank"
                >
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col className={`${tab === "experience" ? "active-tab custom-mr-3" : "inactive-tab"} tab`}
                       onClick={() => setTab("experience")}>
                    <WorkIcon />
                    <h5>Work Experiences</h5>
                  </Col>
                  <Col className={`${tab === "education" ? "active-tab custom-ml-3" : "inactive-tab"} tab`}
                       onClick={() => setTab("education")}>
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <br/>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <div className="experience-item">
                        <h5 className={aboutStyles.experienceTitle}>
                          Data Scientist (Intern)
                        </h5>
                        <p className={aboutStyles.experienceDetails}>
                          Northern Trust | Binghamton | Jan 2025 – Current
                        </p>
                        <ul className={aboutStyles.detailList}>
                          <li>Deployed ML and NLP models using AWS SageMaker and Lambda, creating scalable AI-powered solutions and reducing infrastructure costs by 22% through serverless deployment.</li>
                          <li>Developed a customer segmentation model using K-Means and XGBoost that improved campaign engagement by 27% and reduced churn by 18%.</li>
                          <li>Processed over 2 TB of structured and unstructured data with PySpark SQL, improving data availability by 35% through optimized ETL pipelines.</li>
                          <li>Implemented deep learning models with TensorFlow to predict customer lifetime value with 93% accuracy, driving personalized marketing strategies.</li>
                          <li>Optimized SQL queries in MySQL to reduce report generation time by 40% for monthly business reviews.</li>
                          <li>Built executive dashboards in Tableau to enhance stakeholder visibility and insights.</li>
                          <li>Managed version control across multiple data science projects using Git.</li>
                        </ul>
                      </div>
                      <div className="experience-item">
                        <h5 className={aboutStyles.experienceTitle}>
                          Data Analyst
                        </h5>
                        <p className={aboutStyles.experienceDetails}>
                          Tata Consultancy Services | India | Apr 2021 – Jul 2023
                        </p>
                        <ul className={aboutStyles.detailList}>
                          <li>Leveraged ML frameworks for predictive modeling, classification, and clustering.</li>
                          <li>Engineered and maintained data pipelines with PySpark and SQL in AWS environments.</li>
                          <li>Conducted comprehensive data analysis using Python and statistical modeling.</li>
                          <li>Designed interactive dashboards in Power BI and Tableau to visualize complex datasets.</li>
                          <li>Collaborated in Agile teams to deliver data-driven features.</li>
                          <li>Automated ETL operations using Airflow, ensuring scalable data ingestion.</li>
                          <li>Optimized ad-hoc SQL queries for advanced analytics.</li>
                        </ul>
                      </div>
                      <div className="experience-item">
                        <h5 className={aboutStyles.experienceTitle}>
                          Data Analyst
                        </h5>
                        <p className={aboutStyles.experienceDetails}>
                          Cybage Software | India | Jan 2020 – Mar 2021
                        </p>
                        <ul className={aboutStyles.detailList}>
                          <li>Optimized PostgreSQL queries to reduce execution time by 40%.</li>
                          <li>Analyzed pricing trends using NumPy and statistical methods for multiple retail products.</li>
                          <li>Developed visualizations with Seaborn to optimize marketing strategies.</li>
                          <li>Extracted and transformed data using advanced SQL techniques.</li>
                          <li>Contributed to interactive dashboards development with JavaScript libraries.</li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5 className={aboutStyles.educationTitle}>
                          Master's in Information Systems
                        </h5>
                        <ul className={aboutStyles.detailList}>
                          <li>Binghamton University</li>
                          <li>May 2025</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className={aboutStyles.educationTitle}>
                          Bachelor's in Electronics and Communication Engineering
                        </h5>
                        <ul className={aboutStyles.detailList}>
                          <li>Andhra University</li>
                          <li>Aug 2016 – May 2020</li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
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
