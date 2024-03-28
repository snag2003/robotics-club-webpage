import React from 'react';
import styles from "./Header.module.css";
import Navbar from '../Navbar/NavBar';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
          <img src="./img/logo.jpeg" className={styles.img} />
      </Link><h3>Header</h3>
      <Navbar/>
    </header>
  );
}


export default Header;