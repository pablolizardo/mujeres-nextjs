import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Layout({ children }) {
    return (
      <div id="container">
        <header id="header">
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
          <nav>
            <Link activeClass="active" href="/">
              <a href="/">Inicio</a>
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
            <Link activeClass="active" href="/buscar">
              <a href="/buscar">Buscar</a>
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <aside>Sidebar</aside>
        <footer>
          <span>Mujeres de Nuestra Historia</span>
          <span>Copyright 2021®</span>
          <Link replace href="#header">
            <a href="#header">Ir a arriba ↑</a>
          </Link>
        </footer>
      </div>
    );
}

export default Layout
