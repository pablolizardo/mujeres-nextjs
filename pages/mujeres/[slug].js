import React from 'react'
import Layout from '../../components/Common/Layout'

function Post(post) {
    return <Layout>
        <h1>{post.fields.title}</h1>
        <h2>{post.fields.subtitle}</h2>
        <p style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: post.fields.body }}></p>
    </Layout>
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