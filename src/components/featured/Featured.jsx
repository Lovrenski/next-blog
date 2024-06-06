import Link from "next/link";
import Image from "next/image";
import styles from "./featured.module.css";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts/featured`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hi, white dev here!</b> Discover my exploration and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={data?.img} alt="featured" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data?.title}</h1>
          {/* <div
            className={styles.postDesc}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          /> */}
          <p className={styles.postDesc}>Lorem</p>
          <Link className={styles.button} href={`/posts/${data?.slug}`}>
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
