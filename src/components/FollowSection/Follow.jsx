import styles from "./Follow.module.css";

const AboutCard = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.followMe}>
        <span>Follow Me!</span>
      </div>
      <div className={styles.followCard}>
        <ul>
          <li>
          <a href=""><i className="fa-brands fa-twitter" style={{color: "#1da1f2", fontSize: "22px"}}></i></a><span>Twitter</span>
          </li>
          <li>
          <a href=""><i className="fa-brands fa-medium" style={{fontSize: "18px"}}></i></a><span>Medium</span>
          </li>
          <li>
          <a href=""><i className="fa-brands fa-linkedin"  style={{color: "#0a66c2", fontSize: "22px"}}></i></a><span>Linkedln</span>
          </li>
          <li>
            <a href=""><i className="fa-brands fa-square-instagram" style={{color: "#f700ba", fontSize: "22px"}}></i></a><span>Instagram</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
