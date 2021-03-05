import Link from "next/link";
import React from 'react'
import Layout from '../../components/Common/Layout'
import styles from "./Post.module.css";
function Post(post) {
    return (
      <Layout>
        <h2 className={styles.title}>{post.fields.title}</h2>
        <h3 className={styles.subtitle}>
          {post.fields.subtitle || "Madre y Docente"}
        </h3>
        <img
          className={styles.image}
          src={"https:" + post.fields.heroImage.fields.file.url}
        />
        {post.fields.body.split("\n").filter(p => p !== '').map(p => 
        <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: p }}
            />
        )}
      </Layout>
    );
}
export default Post

export const getStaticPaths = async () => {
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    const client = require('contentful').createClient({
        space: space,
        accessToken: accessToken,
    })
    const posts = await client.getEntries({ content_type: 'blogPost' })

    return {
        paths: posts.items.map(post => {
            return {
                params: {
                    slug: post.fields.slug
                }
            }
        }),
        fallback: false
    }
}

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})
export async function getStaticProps({ params }) {

    const posts = await client.getEntries({
        content_type: 'blogPost'
    })
    const post = posts.items.find(post => post.fields.slug === params.slug)
    console.log(post.fields.title)
    return { props: post }
}