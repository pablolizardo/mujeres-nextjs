import { Metadata } from "next";
import Link from "next/link";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export const metadata: Metadata = {
  title: "Mujeres de nuestra Historia",
  description: "Este 2021 es el año Centenario de mi querida ciudad de Río Grande, es por ello que con mucho orgullo y responsabilidad he decidido devolverle a Río Grande todo lo que como ciudad me ha dado. Con este trabajo de investigación quiero dar a conocer historias de mujeres de nuestra ciudad, mujeres que han nacido, han transitado o han dejado su huella imborrable en estas tierras. Pero principalmente dejar un registro escrito que sea utilizado como archivo, para que estas generaciones y las que están por venir conozcan la historia de las mujeres que fueron pioneras en este suelo, las que han abierto la senda para que otras continúan el camino, las que han sido destacadas y reconocidas, pero también aquellas historias de mujeres donde su labor ha sido silenciosa o su historia no ha sido visibilizada. Sabiendo también que nuestra historia no inicia en 1921, sino con las primeras mujeres, las mujeres Selknam, que fueron miles.",
  openGraph: {
    type: 'website',
    images: [{ url: "https://100rgmujeres.com.ar/images/logo.png", alt: "Logo" }],
    url: "https://www.100rgmujeres.com.ar"
  }
}

const Home = async () => {
  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
  });
  const posts = await client.getEntries({
    content_type: "blogPost",
  });
  return (
    <section className={'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'}>
      {posts.items.map((post, index) => (
        <Link className={'rounded-md border transition p-5 hover:scale-105  prose hover:shadow-lg'} href={`/mujeres/${post.fields.slug}`}>
          <img className="aspect-square object-cover w-full rounded " alt={post.fields.title} src={"https:" + post.fields.heroImage.fields.file.url} />
          <h3 className="font-serif font-normal text-2xl">{post.fields.title}</h3>
          <h4 className="line-clamp-3">{post.fields.subtitle}</h4>
          <p className="line-clamp-4">{post.fields.description}</p>
          {/* Continuar Leyendo → */}
        </Link>
      ))}
    </section>
  );
}
export default Home