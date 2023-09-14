import React from "react";

function Footer() {
  // const goToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <footer className={'mx-auto flex justify-between gap-10 '}>
      <span>Mujeres de Nuestra Historia</span>
      <span>Copyright© 2021</span>
      {/* <a href="#header" onClick={goToTop}>
        Ir a arriba ↑
      </a> */}
    </footer>
  );
}

export default Footer;
