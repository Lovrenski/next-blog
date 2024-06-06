"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/inbox", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <h3 className={styles.subtitle}>Get in touch with us</h3>
      <div className={styles.wrapper}>
        <div className={styles.form}></div>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className={styles.textarea}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
