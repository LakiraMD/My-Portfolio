import "@/styles/globals.css";
import React, { useState, useEffect } from "react";
import ThemeContext from "../context/themeContext";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  // set 2s delay to remove loader

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        let pageLoaded = false;
        window.addEventListener("load", () => {
          pageLoaded = true;
        });
        setTimeout(() => {
          if (pageLoaded) {
            loader.style.display = "none";
          } else {
            loader.style.display = "none";
          }
        }, 0);
      }
    }
  }, []);
  

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
