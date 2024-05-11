import React from 'react';
import { MainTitle } from "./components/MainTitle/MainTitle";
import { Box } from './components/Box/Box';
import { Footer } from "./components/Footer/Footer";
import styles from "../styles/Home.module.css";
import '../styles/global.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <MainTitle />
        <Box />
        <Box />
        <Footer />
      </main>
    </div>
  );
}
