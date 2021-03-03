import React from 'react'
import Link from 'next/link'

function Layout({ children }) {
    return (
        <div id='container'>
            <header>
                <Link href='/'><a href='/'>Mujeres De Nuestra Historia</a></Link>
                <nav>
                    <Link href='/'><a href='/'>Inicio</a></Link>
                    <Link href='/presentacion'><a href='/presentacion'>Presentación</a></Link>
                    <Link href='/elproyecto'><a href='/elproyecto'>El proyecto</a></Link>
                    <Link href='/buscar'><a href='/buscar'>Buscar</a></Link>

                </nav>
            </header>
            <main>
                {children}
            </main>
            <aside>Sidebar</aside>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Layout
