import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header id="header" className={styles.container}>
      <Link href="/">
        <a href="/">
          <figure className={styles.figure}>
            <img className={styles.foto} src="/images/foto.png" alt="foto" />
          </figure>
        </a>
      </Link>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
      {/* <input type="text" placeholder="Buscar..." /> */}
      <nav>
        <Link activeClass="active" href="/">
          <a href="/">
            {/* <i data-feather="home"></i> */}
            Inicio
          </a>
        </Link>
        <Link activeClass="active" href="/presentacion">
          <a href="/presentacion">Presentación</a>
        </Link>
        <Link activeClass="active" href="/elproyecto">
          <a href="/elproyecto">El proyecto</a>
        </Link>
        <Link activeClass="active" href="/riogrande">
          <a href="/buscar">Reseña Río Grande</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
