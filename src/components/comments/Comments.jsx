"use client";

import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const Comments = ({ postSlug }) => {
  const status = useSession();
  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href></Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
            faucibus ligula. Aliquam fringilla malesuada neque, et viverra purus
            rhoncus quis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
            faucibus ligula. Aliquam fringilla malesuada neque, et viverra purus
            rhoncus quis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
            faucibus ligula. Aliquam fringilla malesuada neque, et viverra purus
            rhoncus quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
