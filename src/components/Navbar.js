import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeToggle from "./ThemeToggler";

const Navbar = () => {
  const router = useRouter();

  const [selected, setSelected] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    const path = router.pathname.substring(1);
    setSelected(path || "home");
  }, [router]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.Navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div
        className={`${styles.hamburger} ${
          menuOpen ? styles.open : styles.closed
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
      </div>
      <div
        className={`${styles.Navbar__items} ${
          menuOpen ? styles.open : styles.closed
        }`}
      >
        <Link href="/" legacyBehavior>
          <a
            className={`${styles.Navbar__item} ${
              selected === "home" ? styles.active : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a
            className={`${styles.Navbar__item} ${
              selected === "about" ? styles.active : ""
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a
            className={`${styles.Navbar__item} ${
              selected === "blog" ? styles.active : ""
            }`}
          >
            Blog
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a
            className={`${styles.Navbar__item} ${
              selected === "contact" ? styles.active : ""
            }`}
          >
            Contact
          </a>
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
