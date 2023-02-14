import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaBriefcase, FaGraduationCap, FaHeart, FaTools, FaTrophy } from "react-icons/fa";
import styles from "../styles/About.module.css";

function about() {
  return (
    <div className="component">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Discover the person behind the code</h1>
        </div>
        <img src="/About1.png" alt="header" className={styles.headerImage} />
        <p className={styles.paragraph}>
          Hey there! I am Lakira Minlaka, a young and driven programmer,
          student, and frontend developer. My passion for technology drives me
          to constantly explore new ways of using code to bring innovative and
          impactful solutions to life. I have a curious mind and love to delve
          into modern web technologies, UI design, and complex algorithms and
          data structures in my free time to constantly expand my knowledge and
          skills. I am committed to continual learning and growth and I am eager
          to put my skills and passion to work, making a meaningful difference
          in the world of technology.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={`${styles.gridItem} ${styles.education}`}>
          <div className={styles.itemTitle}>
            <div className={styles.titleIcon}>
              <FaGraduationCap />
            </div>
            <h3 className={styles.titleText}>Education</h3>
          </div>
          <ol className={styles.timeline}>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>
                Royal College, Colombo
              </h4>
              <p className={styles.timelineItemPara}>
                Secondary School, Since 2017
              </p>
            </li>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>
                Vidyaloka College, Galle
              </h4>
              <p className={styles.timelineItemPara}>
                Primary School, 2011 - 2016
              </p>
            </li>
          </ol>
        </div>
        <div className={`${styles.gridItem} ${styles.skills}`}>
          <div className={styles.itemTitle}>
            <div className={styles.titleIcon}>
              <FaTools />
            </div>
            <h3 className={styles.titleText}>Skills</h3>
          </div>
          <ol className={styles.timeline}>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>Programming</h4>
              <p className={styles.timelineItemPara}>
                Javascript, C++ , Python
              </p>
            </li>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>Web Developing</h4>
              <p className={styles.timelineItemPara}>
                HTML, CSS, Javascript, React, Nextjs, Sass, Boostrap
              </p>
            </li>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>UX/UI Design</h4>
              <p className={styles.timelineItemPara}>
                Figma, Adobe XD, Adobe Illustrator
              </p>
            </li>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>Tools</h4>
              <p className={styles.timelineItemPara}>
                Linux, Git, VS Code, Postman
              </p>
            </li>
          </ol>
        </div>
        <div className={`${styles.gridItem} ${styles.achivements}`}>
          <div className={styles.itemTitle}>
            <div className={styles.titleIcon}>
              <FaTrophy />
            </div>
            <h3 className={styles.titleText}>Achivements</h3>
          </div>
          <ol className={styles.timeline}>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>
                NSSC 2022, Merit
              </h4>
              <p className={styles.timelineItemPara}>
                Secondary School, Since 2017
              </p>
            </li>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>
                SLRC 2021, Finalist
              </h4>
              <p className={styles.timelineItemPara}>
                Primary School, 2011 - 2016
              </p>
            </li>
          </ol>
        </div>
        <div className={`${styles.gridItem} ${styles.experience}`}>
          <div className={styles.itemTitle}>
            <div className={styles.titleIcon}>
              <FaBriefcase />
            </div>
            <h3 className={styles.titleText}>Experience</h3>
          </div>
          <ol className={styles.timeline}>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>
                Web developing
              </h4>
              <p className={styles.timelineItemPara}>
                2 Year Experience, Since 2021
              </p>
            </li>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>
                Algorithm and Data Structures
              </h4>
              <p className={styles.timelineItemPara}>
                1 Year Experience, Since 2022 
              </p>
            </li>
            <li className={styles.timelineItem}>
              <h4 className={styles.timelineItemText}>
                UX/UI Design
              </h4>
              <p className={styles.timelineItemPara}>
                1 Year Experience, Since 2022 
              </p>
            </li>
          </ol>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default about;
