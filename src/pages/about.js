import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "../styles/About.module.css";

function about() {
  return (
    <div className="component">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default about;
