import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/logo.jpg" alt="" className={styles.image} fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>About this Blog.</h1>
        <p className={styles.desc}>
          Explore the vast world with only one application that make you feel
          the freedom. We made this website only for those who want to pour the
          creativity and ideas. Enjoy the pure contents from the novelists,
          artists, and any other writer in this blog from wideworld!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
