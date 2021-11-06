import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Turbine Air Travels & Tours</title>
        <meta name="description" content="Turbine Air Travels & Tours" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Turbine Air Travels & Tours!</a>
        </h1>
      </main>
    </div>
  )
}
