import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header id="header" className={styles.container}>
      <Link href="/">
        <a href="/">
          <Image
            src="/images/logo.png"
            width={140}
            height={70}
            objectFit="contain"
          />
        </a>
      </Link>
      <input type="text" placeholder="Buscar..." />
      <nav>
        <Link activeClass="active" href="/">
          <a href="/">
            <i data-feather="home"></i>
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
