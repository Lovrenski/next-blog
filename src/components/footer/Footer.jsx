import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.jpg"
            alt="bellvoud"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <h1 className={styles.logoText}>Whiteblog</h1>
        </div>
        <p className={styles.desc}>
          Fill the blank canvas with your creativity. Fill the page with your
          knowledge. This plain box is ready to fill with any thoughts. Explore
          by yourself
        </p>
        <div className={styles.icons}>
          <Link href="">
            <Image src="/facebook.png" alt="facebook" width={25} height={25} />
          </Link>
          <Link href="">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={25}
              height={25}
            />
          </Link>
          <Link href="">
            <Image src="/youtube.png" alt="youtube" width={25} height={25} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
