import Script from "next/script";
import type { Metadata } from "next";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import { getAllPostsSummary } from "../lib/contentful";
import "./globals.css";

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.100rgmujeres.com.ar"),
  title: "Mujeres de nuestra Historia",
  description:
    "Este 2021 es el año Centenario de mi querida ciudad de Río Grande, es por ello que con mucho orgullo y responsabilidad he decidido devolverle a Río Grande todo lo que como ciudad me ha dado. Con este trabajo de investigación quiero dar a conocer historias de mujeres de nuestra ciudad, mujeres que han nacido, han transitado o han dejado su huella imborrable en estas tierras. Pero principalmente dejar un registro escrito que sea utilizado como archivo, para que estas generaciones y las que están por venir conozcan la historia de las mujeres que fueron pioneras en este suelo, las que han abierto la senda para que otras continúen el camino, las que han sido destacadas y reconocidas, pero también aquellas historias de mujeres donde su labor ha sido silenciosa o su historia no ha sido visibilizada. Sabiendo también que nuestra historia no inicia en 1921, sino con las primeras mujeres, las mujeres Selknam, que fueron miles.",
  openGraph: {
    type: "website",
    images: [{ url: "/images/logo.png", alt: "Logo" }],
    url: "https://www.100rgmujeres.com.ar",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getAllPostsSummary();
  const searchItems = posts.map(
    ({ slug, title, subtitle, heroImage }) => ({
      slug,
      title,
      subtitle,
      heroImage,
    })
  );

  return (
    <html lang="es">
      <body className="m-0 bg-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-36MD6VKR3K"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-36MD6VKR3K');
          `}
        </Script>
        <Header searchItems={searchItems} />
        <div className="grid gap-10 max-w-[1480px] mx-auto p-5">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
