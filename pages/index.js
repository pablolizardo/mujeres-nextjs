import Head from 'next/head'
import Layout from '../components/Common/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mujeres de nuestra historia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Mujeres </h1>
        <h2>de nuestra historia</h2>
      </Layout>
    </div>
  )
}
