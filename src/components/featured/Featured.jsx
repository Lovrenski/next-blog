import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, white dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="yessir" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus orci sit amet est rhoncus mollis vitae a nisl.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
            faucibus ligula. Aliquam fringilla malesuada neque, et viverra purus
            rhoncus quis. Sed sed rhoncus nisi. Nunc pellentesque, metus a
            venenatis varius, nisl risus malesuada massa, at sollicitudin nunc
            magna a tellus.
          </p>
          <button className={styles.button}>Read</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
