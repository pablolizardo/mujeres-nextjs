import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mujeres de nuestra historia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Mujeres </h1>
      <h2>de nuestra historia</h2>
    </div>
  )
}
