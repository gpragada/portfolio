import React from "react";
import { Col, Row } from "react-bootstrap";
import { pageAnimation, titleAnim } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import styles from "./styles.module.css"

const TransformText = () => {
    return "</ Changing the world one commit at a Time >"
}

const Home = ({countData}) => {
  const [element, controls] = useScroll();
  return (
    <div id="home" className="fix  ">
      <div className="bg-image">
      
        <motion.div
          variants={pageAnimation}
          ref={element}
          animate={controls}
          className="container home-page-intro "
        >
          <Row className="home-row">
            <Col md={8} xs={12}>
              <motion.div className="intro-section">
                <motion.h5 variants={titleAnim} className="mb-5">
                <h6 style={{color:"white"}}>{" Page Count "}<RemoveRedEyeIcon/>{" "}{countData}</h6>
                <TransformText  /> 
                </motion.h5>
                <motion.h1 variants={titleAnim} className="mb-4">
                  Hi, I'm <span className="chonburi-font green-text">Giri</span> Sai Kumar
                  Pragada
                </motion.h1>
                <motion.h2 variants={titleAnim} className="mb-4">
                  <span className="chonburi-font green-text">SQL & Azure SQL Database Administrator at</span>{" "}
                  TCS
                </motion.h2>
                <a href='https://linktr.ee/amananku26' rel="noreferrer" target="_blank"  class="clipped clipped-ltr" className={`${styles.clipped} ${styles.lipped}` }> </a>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        
      </div>
    </div>
  );
};

export default Home;
