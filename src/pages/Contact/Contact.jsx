import styles from "./Contact.module.css";
import db from "../../../public/Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const Contact = () => {
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");

  const send = async (e) => {
    e.preventDefault();
    if (content !== "") {
      await addDoc(collection(db, "contract"), {
        name,
        email,
        subject,
        message: content,
      });
      setContent("");
      setEmail("");
      setSubject("");
      setName("");
    }
  };

  return (

      <div style={{ position: "relative" }} className="md:col-start-2 col-span-4 gap-4">
        <div className={styles.contactMe}>
          <h1>Contact Me</h1>
        </div>
        <div className={styles.contactFormArea}>
          <span>
            Feel free to <strong>send a message</strong>, just fill the form
            below and <strong>I will reply to you shortly!</strong>👍
          </span>
          <div className={styles.contactForm}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Your Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor="message">Your message (optional)</label>
            <textarea
              id="message"
              name="message"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            <button className={styles.contactButton} onClick={send}>
              Submit
            </button>
          </div>
        </div>
      </div>
  );
};

export default Contact;
