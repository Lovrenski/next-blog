import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="/">
          <Image src="/facebook.png" alt="facebook" width={30} height={30} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="instagram" width={30} height={30} />
        </Link>
        <Link href="/">
          <Image src="/youtube.png" alt="youtube" width={30} height={30} />
        </Link>
      </div>
      <div className={styles.logo}>whiteblog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
