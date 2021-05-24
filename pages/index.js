import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Common/Layout";
import PostLink from "../components/Common/PostLink";
import styles from "../styles/Home.module.css";

export default function Home(posts) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mujeres de nuestra historia</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta property="og:title" content="Mujeres de nuestra Historia" />
        <meta
          property="og:description"
          content="Este 2021 es el año Centenario de mi querida ciudad de Río Grande, es por ello que con mucho orgullo y responsabilidad he decidido devolverle a Río Grande todo lo que como ciudad me ha dado. Con este trabajo de investigación quiero dar a conocer historias de mujeres de nuestra ciudad, mujeres que han nacido, han transitado o han dejado su huella imborrable en estas tierras. Pero principalmente dejar un registro escrito que sea utilizado como archivo, para que estas generaciones y las que están por venir conozcan la historia de las mujeres que fueron pioneras en este suelo, las que han abierto la senda para que otras continúan el camino, las que han sido destacadas y reconocidas, pero también aquellas historias de mujeres donde su labor ha sido silenciosa o su historia no ha sido visibilizada. Sabiendo también que nuestra historia no inicia en 1921, sino con las primeras mujeres, las mujeres Selknam, que fueron miles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.100rgmujeres.com.ar" />
        <meta
          property="og:image"
          content="https://100rgmujeres.com.ar/images/logo.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mujeres de nuestra Historia" />
        <meta
          name="twitter:description"
          content="Este 2021 es el año Centenario de mi querida ciudad de Río Grande, es por ello que con mucho orgullo y responsabilidad he decidido devolverle a Río Grande todo lo que como ciudad me ha dado. Con este trabajo de investigación quiero dar a conocer historias de mujeres de nuestra ciudad, mujeres que han nacido, han transitado o han dejado su huella imborrable en estas tierras. Pero principalmente dejar un registro escrito que sea utilizado como archivo, para que estas generaciones y las que están por venir conozcan la historia de las mujeres que fueron pioneras en este suelo, las que han abierto la senda para que otras continúan el camino, las que han sido destacadas y reconocidas, pero también aquellas historias de mujeres donde su labor ha sido silenciosa o su historia no ha sido visibilizada. Sabiendo también que nuestra historia no inicia en 1921, sino con las primeras mujeres, las mujeres Selknam, que fueron miles"
        />
        <meta name="twitter:site" content="https://www.100rgmujeres.com.ar" />
        <meta name="twitter:creator" content="Alejandra Lizardo" />

        <meta
          name="twitter:image"
          content="https://100rgmujeres.com.ar/images/logo.png"
        />
      </Head>
      <Layout>
       <div className={styles.containers}>
        {posts.data.items.map((post, index) => (
          <div className={styles.card}>
            <img src={"https:" + post.fields.heroImage.fields.file.url}></img>
            <div className={styles.textos}>
            <h1>{post.fields.title}</h1>
            <h2>{post.fields.subtitle}</h2>
            <p>{post.fields.description}</p>
            <Link href={`/mujeres/${post.fields.slug}`}>
            <a
              className={styles.keepReading}
              href={`/mujeres/${post.fields.slug}`}
            >
              Continuar Leyendo →
            </a>
          </Link>
            </div>
            </div>
        ))}
        </div>
      </Layout>
    </div>
  );
}
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});
export const getStaticProps = async (ctx) => {
  const posts = await client.getEntries({
    content_type: "blogPost",
  });
  return {
    props: {
      data: posts,
    },
  };
};
