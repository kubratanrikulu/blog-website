import styles from "./AboutCard.module.css";
import profil from "../../../public/assets/images/profill.jpg";
const AboutCard = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.aboutMe}>
        <span>About Me</span>
      </div>
      <div className={styles.aboutCard}>
        <div className={styles.aboutHeader}>
          <div>
            <img
              className={styles.aboutImage}
              src={profil}
              alt=""
              width={"100px"}
            />
          </div>
          <div>
            <h3>Kübra Tanrıkulu</h3>
            <span>Frontend Developer</span>
            <div className={styles.headerIcon}>
              <a href="">
                <i
                  className="fa-brands fa-twitter"
                  style={{ color: "#1da1f2", fontSize: "18px" }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-medium"
                  style={{ fontSize: "18px" }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#0a66c2", fontSize: "18px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <p>
            Welcome, it’s great to have you here. We know that first impressions
            are important, so we’ve populated your new site with some initial
            getting started posts that…
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
