import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
              faucibus ligula. Aliquam fringilla malesuada neque, et viverra
              purus rhoncus quis. Sed sed rhoncus nisi. Nunc pellentesque, metus
              a venenatis varius, nisl risus malesuada massa, at sollicitudin
              nunc magna a tellus.
            </p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
              faucibus ligula. Aliquam fringilla malesuada neque, et viverra
              purus rhoncus quis. Sed sed rhoncus nisi. Nunc pellentesque, metus
              a venenatis varius, nisl risus malesuada massa, at sollicitudin
              nunc magna a tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dapibus orci sit amet est rhoncus mollis vitae a nisl. Nulla a
              faucibus ligula. Aliquam fringilla malesuada neque, et viverra
              purus rhoncus quis. Sed sed rhoncus nisi. Nunc pellentesque, metus
              a venenatis varius, nisl risus malesuada massa, at sollicitudin
              nunc magna a tellus.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
