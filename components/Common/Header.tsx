'use client';

import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import SearchBar from "./SearchBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="header" className={'styles.container'}>
      <Link href="/">
        <img className={'w-full h-[20vh] object-cover hidden lg:block'} style={{ objectPosition: "50% 25%" }} src="/images/foto.png" alt="foto" />
        <img className={'mx-auto px-10 pt-10 pb-5 w-full max-w-xl'} src="/images/logo.png" alt="logo" />
      </Link>

      <div className="lg:hidden px-4 pb-4">
        <SearchBar />
      </div>

      <div className="lg:hidden flex justify-end px-4 pb-2 fixed top-3 right-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-700 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden font-serif uppercase text-lg font-medium tracking-widest px-4 pb-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 lg:px-4 border-b border-gray-200 hover:bg-gray-50"
          >
            Inicio
          </Link>
          <Link
            href="/presentacion"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 lg:px-4 border-b border-gray-200 hover:bg-gray-50"
          >
            Presentación
          </Link>
          <Link
            href="/el-proyecto"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 lg:px-4 border-b border-gray-200 hover:bg-gray-50"
          >
            El proyecto
          </Link>
          <Link
            href="/rio-grande"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 lg:px-4 border-b border-gray-200 hover:bg-gray-50"
          >
            Reseña Río Grande
          </Link>
        </nav>
      )}

      <nav className="hidden lg:flex mx-auto font-serif uppercase text-lg font-medium tracking-widest gap-3 lg:gap-6 justify-center items-center max-w-7xl">
        <Link href="/" className="py-1 px-3 lg:px-6 border-b-2 border-transparent hover:border-gray-500 transition shrink-0">
          Inicio
        </Link>
        <Link href="/presentacion" className="py-1 px-3 lg:px-6 border-b-2 border-transparent hover:border-gray-500 transition shrink-0">
          Presentación
        </Link>
        <Link href="/el-proyecto" className="py-1 px-3 lg:px-6 border-b-2 border-transparent hover:border-gray-500 transition shrink-0">
          El proyecto
        </Link>
        <Link href="/rio-grande" className="py-1 px-3 lg:px-6 border-b-2 border-transparent hover:border-gray-500 transition shrink-0">
          Reseña Río Grande
        </Link>
        <SearchBar />
      </nav>
    </header>
  );
}

export default Header;
