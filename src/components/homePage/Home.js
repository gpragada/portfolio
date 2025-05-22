import React from "react";
import { Col, Row } from "react-bootstrap";
import { pageAnimation, titleAnim } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import styles from "./styles.module.css";
import formalPhotoStyles from "./formalPhoto.module.css";
import ChatBot from "./ChatBot";

const TransformText = () => {
    return "</ Changing the world one commit at a Time >";
};

const Home = ({ countData }) => {
  const [element, controls] = useScroll();
  return (
    <div id="home" className="fix">
      <div className="bg-image">
        <motion.div
          variants={pageAnimation}
          ref={element}
          animate={controls}
          className="container home-page-intro"
        >
          <Row className="home-row align-items-center">
            <Col md={8} xs={12}>
              <motion.div className="intro-section">
                <motion.h5 variants={titleAnim} className="mb-5">
                  <h6 style={{ color: "white" }}>
                    {" Page Count "}
                    <RemoveRedEyeIcon />{" "}
                    {countData}
                  </h6>
                  <TransformText />
                </motion.h5>
                <motion.h1 variants={titleAnim} className="mb-4">
                  Hi, I'm <span className="chonburi-font green-text">Giri</span> Sai Kumar Pragada
                </motion.h1>
                <motion.h2 variants={titleAnim} className="mb-4">
                  <span className="chonburi-font green-text">Data Analyst at</span>{" "}
                  TCS
                </motion.h2>
                <a
                  href="https://linktr.ee/amananku26"
                  rel="noreferrer"
                  target="_blank"
                  className={`${styles.clipped} ${styles.lipped}`}
                >
                </a>
              </motion.div>
            </Col>
            <Col md={4} xs={12} className="d-flex justify-content-center">
              <img
                src={process.env.PUBLIC_URL + '/images/Giri.jpg'}
                alt="Giri"
                className={formalPhotoStyles.formalPhoto} // applied formal effect
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
              />
            </Col>
          </Row>
        </motion.div>
      </div>
      {/* Render ChatBot component */}
      <ChatBot />
    </div>
  );
};

export default Home;