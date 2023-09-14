import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header id="header" className={'styles.container'}>
      <Link href="/">
        {/* <figure className={'styles.figure'}> */}
        <img className={'w-full h-[20vh] object-cover'} style={{ objectPosition: "50% 25%" }} src="/images/foto.png" alt="foto" />
        {/* </figure> */}
        <img className={'mx-auto px-10 py-20 w-full max-w-xl'} src="/images/logo.png" alt="logo" />
      </Link>
      {/* <input type="text" placeholder="Buscar..." /> */}
      <nav className="mx-auto font-serif flex  uppercase text-lg font-medium tracking-widest gap-6 justify-center">
        <Link href="/" className="py-1 px-6 border-b-2 border-transparent hover:border-gray-500 transition">
          {/* <i data-feather="home"></i> */}
          Inicio
        </Link>
        <Link href="/presentacion" className="py-1 px-6 border-b-2 border-transparent hover:border-gray-500 transition">
          Presentación
        </Link>
        <Link href="/el-proyecto" className="py-1 px-6 border-b-2 border-transparent hover:border-gray-500 transition">
          El proyecto
        </Link>
        <Link href="/rio-grande" className="py-1 px-6 border-b-2 border-transparent hover:border-gray-500 transition">
          Reseña Río Grande
        </Link>
      </nav>
      {/* <audio controls className={'hidden'}>
        <source src="/recitado_low.mp3" type="audio/mpeg" />
      </audio> */}
    </header>
  );
}

export default Header;
