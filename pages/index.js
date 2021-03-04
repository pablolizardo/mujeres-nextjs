import Head from 'next/head'
import Layout from '../components/Common/Layout'
import PostLink from '../components/Common/PostLink'
import styles from '../styles/Home.module.css'

export default function Home(posts) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mujeres de nuestra historia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {posts.data.items.map((post, index) =>
          <PostLink post={post} key={index} />
        )}
      </Layout>
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
  })
  const posts = await client.getEntries({
    content_type: 'blogPost'
  })
  return {
    props: {
      data: posts
    }
  }
}