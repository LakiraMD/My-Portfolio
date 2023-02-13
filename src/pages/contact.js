import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "../styles/Contact.module.css";
import { MdEmail } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
function contact() {
  return (
    <div className="component">
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Get in Touch with Me Today</h1>
        </div>
        <p className={styles.paragraph}>
          Let's connect and see how I can bring your vision to life. Fill out
          the form or send me an email, I'm here for you.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.box}>
          <div className={styles.icon}>
            <BsTelephonePlusFill />
          </div>
          <p className={styles.text}>+(94) 76 423 4619</p>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <HiLocationMarker />
          </div>
          <p className={styles.text}>Galle, Sri Lanka.</p>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <div className={styles.icon}>
            <MdEmail />
          </div>
          <p className={styles.text}>mdlakiramd@gmail.com</p>
        </div>
      </div>
      {/* --------- */}
      <div className={styles.inputBox}>
        <div className={styles.inputContainer}>
          <div className={styles.inputContainerRight}>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="text" placeholder="Subject" className={styles.input} />
          </div>
          <textarea placeholder="Message" className={styles.textArea} />
        </div>
        <button className={styles.button}>Submit</button>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default contact;
