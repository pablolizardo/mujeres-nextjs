import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Common/Layout";
import styles from "./Post.module.css";
function Post(post) {
  const progressRef = useRef();
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    window.addEventListener('scroll', reading)
    return () => window.removeEventListener('scroll', reading)
  },[])
  const reading = (e) => {
    setProgress((window.pageYOffset  * 100 ) / e.target.body.clientHeight)
  }
  const paragraphs = post.fields.body.split("\n").filter((p) => p !== "");
  return (
    <Layout>
      <Head>
        <title>{post.fields.title}</title>
      </Head>
      <progress
      color='black'
    
    
              className={styles.progress}
 
 
                    ref={progressRef}
  
  
                  value={progress}
    
    
              max="100"
     
     
      ></progress>
      <section className={styles.page}>
      <h2 className={styles.title}>{post.fields.title}</h2>
      <h3 className={styles.subtitle}>
        {post.fields.subtitle || "Madre y Docente"}
      </h3>
      <img
        className={styles.image}
        src={"https:" + post.fields.heroImage.fields.file.url}
      />

        {paragraphs.slice(0, paragraphs.length / 2).map((p) => (
          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
        <img
          className={styles.fotoVieja}
          src={"https:" + post.fields.fotoVieja.fields.file.url}
        />
        {paragraphs.slice(paragraphs.length / 2, -1).map((p) => (
          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
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
