import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import styles from "../styles/Navbar.module.css"

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useContext(ThemeContext);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  return (
    <button
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(activeTheme === "light" ? "dark" : "light")}
      className={styles.themetoggle}
    >
      {activeTheme === "light" ? <MdDarkMode /> : <MdLightMode /> }
    </button>
  );
};

export default ThemeToggle;
