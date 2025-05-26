import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import styles from "../components/navbar.module.css";

function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <h1>DevPoint</h1>
        <ul className={styles.nav_list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>

          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
