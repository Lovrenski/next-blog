import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts/popular", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuPosts = async () => {
  const data = await getData();

  return (
    <div className={styles.items}>
      {data?.map((item) => (
        <Link
          href={`/posts/${item.slug}`}
          className={styles.item}
          key={item._id}
        >
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>
              {item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.user.name}</span>
              <span className={styles.date}>
                {" "}
                - {item.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
