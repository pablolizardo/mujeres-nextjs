import React, { useEffect } from "react";
import Link from 'next/link'
import Header from "./Header";
const feather = require("feather-icons");

function Layout({ children }) {
  useEffect(() => feather.replace(), []);
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
    return (
      <div id="container">
        <Header />
        <main>{children}</main>
        <aside>Sidebar</aside>
        <footer>
          <span>Mujeres de Nuestra Historia</span>
          <span>Copyright 2021®</span>
          <a href="#header" onClick={goToTop}>
            
            Ir a arriba ↑
          
          </a>
        </footer>
      </div>
    );
}

export default Layout
