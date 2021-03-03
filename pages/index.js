import Head from 'next/head'
import Layout from '../components/Common/Layout'
import Post from '../components/Common/Post'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mujeres de nuestra historia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <Post slug='mariainesoscares' />
      </Layout>
    </div>
  )
}
