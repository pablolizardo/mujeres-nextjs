import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className={styles.container}>
      <span>Mujeres de Nuestra Historia</span>
      <span>Copyright© 2021</span>
      <a href="#header" onClick={goToTop}>
        Ir a arriba ↑
      </a>
    </footer>
  );
}

export default Footer;
