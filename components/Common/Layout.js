import React from 'react'
import Link from 'next/link'

function Layout({ children }) {
    return (
        <div id='container'>
            <header>
                <Link href='/'><a href='/'><strong>Mujeres De Nuestra Historia</strong></a></Link>
                <nav>
                    <Link activeClass='active' href='/'><a href='/'>Inicio</a></Link>
                    <Link activeClass='active' href='/presentacion'><a href='/presentacion'>Presentación</a></Link>
                    <Link activeClass='active' href='/elproyecto'><a href='/elproyecto'>El proyecto</a></Link>
                    <Link activeClass='active' href='/buscar'><a href='/buscar'>Buscar</a></Link>

                </nav>
            </header>
            <main>
                {children}
            </main>
            <aside>Sidebar</aside>
            <footer>
                <span>Mujeres de Nuestra Historia</span>
                <span>Copyright 2021®</span>
                <span>Ir a arriba ↑</span>
            </footer>
        </div>
    )
}

export default Layout
