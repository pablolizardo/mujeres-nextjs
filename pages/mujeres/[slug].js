import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Common/Layout";
import SocialShare from "../../components/Common/SocialShare";
import styles from "./Post.module.css";
function Post(post) {
  const progressRef = useRef();
  // console.log(post.fields.audio.fields.file.url);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", reading);
    return () => window.removeEventListener("scroll", reading);
  }, []);
  const reading = (e) => {
    setProgress((window.pageYOffset * 100) / e.target.body.clientHeight);
  };
  const paragraphs = post.fields.body.split("\n").filter((p) => p !== "");
  return (
    <Layout>
      <Head>
        <title>{post.fields.title}</title>
        <meta property="og:title" content={post.fields.description} />
        <meta property="og:description" content={post.fields.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.100rgmujeres.com.ar/mujeres/${post.fields.slug}`}
        />
        <meta
          property="og:image"
          content={"https:" + post.fields.heroImage.fields.file.url}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.fields.title} />
        <meta name="twitter:description" content={post.fields.description} />
        <meta
          name="twitter:site"
          content={`https://www.100rgmujeres.com.ar/mujeres/${post.fields.slug}`}
        />
        <meta name="twitter:creator" content="Mujeres de nuestra Historia" />

        <meta
          name="twitter:image"
          content={"https:" + post.fields.heroImage.fields.file.url}
        />
      </Head>
      <progress
        color="black"
        className={styles.progress}
        ref={progressRef}
        value={progress}
        max="100"
      ></progress>
      <section className={styles.page}>
        <SocialShare 
        title={post.fields.title}
        subtitle={post.fields.subtitle || ''}
        description={post.fields.description }
        url={`https://www.100rgmujeres.com.ar/mujeres/${post.fields.slug}`}
        img={"https:" + post.fields.heroImage.fields.file.url}
         />
          <h2 className={styles.title}>{post.fields.title}</h2>
          <h3 className={styles.subtitle}>{post.fields.subtitle || ""}</h3>
        <img
          className={styles.image}
          src={"https:" + post.fields.heroImage.fields.file.url}
        />
        {post.fields.audio && <audio controls className={styles.audio}>
          <source src={`https:${post.fields.audio.fields.file.url}`} type='audio/mp3'/>
          </audio>}

        {paragraphs.slice(0, paragraphs.length / 2).map((p,index) => (
          <p
          key={index}
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
        <img
          className={styles.fotoVieja}
          src={"https:" + post.fields.fotoVieja.fields.file.url}
        />
        {paragraphs.slice(paragraphs.length / 2, -1).map((p, index) => (
          <p
          key={index}

            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
        <a href={post.fields.enlace} target="_blank">Ver página de {post.fields.title}</a>
      </section>
    </Layout>
  );
}
export default Post;

export const getStaticPaths = async () => {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
  });
  const posts = await client.getEntries({ content_type: "blogPost" });

  return {
    paths: posts.items.map((post) => {
      return {
        params: {
          slug: post.fields.slug,
        },
      };
    }),
    fallback: false,
  };
};

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});
export async function getStaticProps({ params }) {
  const posts = await client.getEntries({
    content_type: "blogPost",
  });
  const post = posts.items.find((post) => post.fields.slug === params.slug);
  return { props: post };
}
