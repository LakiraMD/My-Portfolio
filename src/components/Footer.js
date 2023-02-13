import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri'
const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          href="https://instagram.com/min_lakira"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.icon}
        >
        <RiInstagramFill size={24} />
        </a>
        <a
          href="https://twitter.com/Lakira_md"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.icon}
        >
        <FaTwitter size={24} />
        </a>
        <a
          href="https://facebook.com/lakiramd"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.icon}
        >
        <FaFacebook size={24} />
        </a>
        <a
          href="https://github.com/LakiraMD"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.icon}
        >
        <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/lakira-md"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.icon}
        >
        <FaLinkedin size={24} />
        </a>
      </div>
      <div className={styles.links}>
        <Link href="/" legacyBehavior>
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a className={styles.link}>Blog</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={styles.link}>Contact</a>
        </Link>
      </div>
      <hr className={styles.hr} />
      <p className={styles.copyright}>&copy; {currentYear} Lakira Minlaka</p>
    </footer>
  );
};

export default Footer;
