import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import './globals.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mujeres de nuestra Historia",
  description: "Este 2021 es el año Centenario de mi querida ciudad de Río Grande, es por ello que con mucho orgullo y responsabilidad he decidido devolverle a Río Grande todo lo que como ciudad me ha dado. Con este trabajo de investigación quiero dar a conocer historias de mujeres de nuestra ciudad, mujeres que han nacido, han transitado o han dejado su huella imborrable en estas tierras. Pero principalmente dejar un registro escrito que sea utilizado como archivo, para que estas generaciones y las que están por venir conozcan la historia de las mujeres que fueron pioneras en este suelo, las que han abierto la senda para que otras continúen el camino, las que han sido destacadas y reconocidas, pero también aquellas historias de mujeres donde su labor ha sido silenciosa o su historia no ha sido visibilizada. Sabiendo también que nuestra historia no inicia en 1921, sino con las primeras mujeres, las mujeres Selknam, que fueron miles.",
  openGraph: {
    type: 'website',
    images: [{ url: "https://100rgmujeres.com.ar/images/logo.png", alt: "Logo" }],
    url: "https://www.100rgmujeres.com.ar"
  }
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-36MD6VKR3K"
                ></script>
                <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-36MD6VKR3K');`,
                    }}
                />
            </head>
            <body className="m-0 bg-white">
                <Header />
                <div className="grid gap-10 max-w-[1480px] mx-auto p-5">
                    <main>{children}</main>
                    {/* <Sidebar /> */}
                    <Footer />
                </div>
            </body>
        </html>
    )
}