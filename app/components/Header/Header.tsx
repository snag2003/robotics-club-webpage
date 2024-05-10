import React from 'react';
import styles from "./Header.module.css";
import Link from "next/link";

// Section done by Victor Ferrara

//  Note: Merged Navbar Component directly, to facilitate organizing

/*  Note 2: Main Page for some reason has a 8px margin (default by most browsers) and I
    have not been able to remove it within my minimal HTML knowledge. 
    It appears that global.css is not properly modifying the <body> 
    tag in the home page after having attempted
    to change the background color atribute to black in global.css */

const Header = () => {
  return (
  <header>

    <div className={styles.Bar}> 
      
      <div className={styles.TitleCard}>

        {/*Image set as background image as css property of div*/}
        <a href='/'> <div className={styles.HeaderIcon}> </div> </a>
        
        <a href='/' className={styles.TitleText}> 
          <div className={styles.UniName}>QLU</div>
          <div className={styles.ClubName}>Robotics Club</div>
        </a>

      </div>

      <div className={styles.NavBar}>

        {/* TODO fix subpage routing. Currently returns a 404 error on attempt to change page*/}
        <Link href='<About Path>'> About Us </Link>
        <Link href='<Projects Path>'> Our Projects </Link>
        <Link href='<Join_Us Path>'> Join Us </Link>

      </div>

    </div>
 
  </header>
  );
}

export default Header;