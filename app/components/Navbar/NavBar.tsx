import React from 'react';
import styles from "./NavBar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>      
            <ul>
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Our Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/join-us">
                  <p>Join Us</p>
                </Link>
              </li>
            </ul>
    </>
  );
};

export default Navbar;
