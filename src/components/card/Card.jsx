import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="post" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};
