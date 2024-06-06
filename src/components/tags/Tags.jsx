import Link from "next/link";
import styles from "./tags.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories");

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Tags = async () => {
  const data = await getData();

  return (
    <div className={styles.list}>
      <span className={styles.listTitle}>Tags</span>
      {data?.map((item) => (
        <>
          <Link href={`/blog?cat=${item.slug}`}>{item.title}</Link>
        </>
      ))}
    </div>
  );
};

export default Tags;
