import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QLU Robotics</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <Header />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">QLU Robotics Club</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
