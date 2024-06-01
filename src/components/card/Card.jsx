import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
          faucibus ligula. Aliquam fringilla malesuada neque, et viverra purus
          rhoncus quis. Sed sed rhoncus nisi. Nunc pellentesque, metus a
          venenatis varius, nisl risus malesuada massa, at sollicitudin nunc
          magna a tellus.
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};
