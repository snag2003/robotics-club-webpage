"use client"
import React, { useState, useEffect } from 'react';
import styles from "./Header.module.css";
import Link from "next/link";

const Header = ({ closeSidebar }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setShowDropdown(false); // Close the dropdown when a link is clicked
    closeSidebar();
  };

  return (
    <header>
      <div className={styles.Bar}> 
        <div className={styles.TitleCard}>
          <a href='/'> <div className={styles.HeaderIcon}> </div> </a>
          <a href='/' className={styles.TitleText}> 
            <div className={styles.UniName}>Quality Leadership University </div>
            <div className={styles.ClubName}>Robotics Club</div>
          </a>
        </div>
        <div className={styles.NavBar}>
          {isSmallScreen ? (
            <div className={styles.DropdownMenu}>
              <button onClick={toggleDropdown} className={styles.DropdownButton}>
              </button>
              <div className={showDropdown ? styles.DropdownContent : styles.Hidden}>
                <button onClick={handleLinkClick} className={styles.CloseButton}></button>
                <Link href='/' onClick={handleLinkClick}>Home</Link> 
                <Link href='/about' onClick={handleLinkClick}>About Us</Link>
                <Link href='/projects' onClick={handleLinkClick}>Our Projects</Link>
                <Link href='/join-us' onClick={handleLinkClick}>Join Us</Link>
              </div>
            </div>
          ) : (
            <>
              <Link href='/'>Home</Link> 
              <Link href='/about'>About Us</Link>
              <Link href='/projects'>Our Projects</Link>
              <Link href='/join-us'>Join Us</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
