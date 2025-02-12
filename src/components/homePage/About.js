import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  const methodDoesNotExist = (aman) => {
    throw new Error("this is a sentry error");
  };

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="details">
                Database Administrator with 2.5 years of experience in SQL Server and Azure cloud services. 
                Skilled in database management, performance tuning, and cloud infrastructure. 
                Currently pursuing Master's in Information Systems at Binghamton University. 
                Passionate about data management and cloud technologies.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a rel="noopener noreferrer" href="/Aman_Anku_FE_Resume.pdf" target="_blank">
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${tab === "experience"
                        ? "active-tab custom-mr-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Work Experiences</h5>
                  </Col>
                  <Col
                    className={`
                      ${tab === "education"
                        ? "active-tab custom-ml-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <br/>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>Tata Consultancy Services</h5>
                      <ul>
                        <li>Database Administrator (2.5 years)</li>
                        <li>Managed SQL Server databases and Azure cloud infrastructure</li>
                        <li>Performed database maintenance, backup/recovery, and performance tuning</li>
                        <li>Implemented security measures and access controls</li>
                        {/* Additional work experience points */}
                        <li>Installed, configured, managed, upgraded, migrated, monitored, and troubleshooted SQL Server versions from 2008 up to 2019 in both standalone and clustered environments on physical and virtual servers.</li>
                        <li>Implemented high availability solutions including Clustering, Log Shipping, Mirroring, Replication, and Always-On; hosted SQL databases on Microsoft Azure.</li>
                        <li>Executed Side-by-Side and In-Place upgrades of MS SQL Server from legacy versions to 2012 and 2014; experienced with SQL Azure IAAS, PAAS, and Managed Instances.</li>
                        <li>Expert in performance tuning via Index Defragmentation, optimizing execution plans, index rebuilding, reorganization, and partitioning; utilized tools such as SQL Profiler, Index Tuning Wizard, Spotlight, and Windows Performance Monitor.</li>
                        <li>Designed and implemented robust Backup and Recovery strategies; provided production support for large and complex databases (VLDB).</li>
                        <li>Configured and managed Linked Servers for data transfer between SQL Server and heterogeneous databases and supported ETL-based applications.</li>
                        <li>Created database objects (Tables, Views, Indexes, Stored Procedures, Cursors, Triggers, and SQL joins) with proficient T-SQL query writing.</li>
                        <li>Installed, configured, and administered Windows Server (2003/2008/2012), Active Directory, and VMware environments.</li>
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>Master's in Information Systems</h5>
                        <ul>
                          <li>Binghamton University</li>
                          <li>Expected Graduation: May 2025</li>
                          <li>CGPA: 3.82</li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
