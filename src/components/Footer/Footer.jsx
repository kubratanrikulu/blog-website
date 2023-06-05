/* eslint-disable react/prop-types */
import styles from "./Footer.module.css";
import useArticles from "../../Hook/useArticles";
// eslint-disable-next-line react/prop-types
const Footer = () => {
  const { data } = useArticles();
  function getRandomColor() {
    const colors = ["#83ea6c", "#ffcf00", "#c5c5fe", "#85b2f4", "#49dfd4"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  return (
    <div
      className="grid grid-cols-1 gap-4  justify-center md:grid-cols-3"
      style={{ background: "#fffacd" }}
    >
      <div className="flex justify-center">
        <div style={{ position: "relative" }}>
          <div className={styles.footerHeader}>
            <span>Recent Post</span>
          </div>
          <div className={styles.footerSection}>
            <ul className={styles.posts}>
              {data.slice(0, 3).map((article, index) => (
                <li key={article.guid} className={styles.post}>
                  <span className={styles.number}>{index + 1}</span>
                  <div>
                    {article.thumbnail && (
                      <img
                        src={article.thumbnail}
                        className={styles.postImage}
                        alt={article.title}
                      />
                    )}
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postTitle}>
                      <h4>
                        <a href={article.link}>{article.title}</a>
                      </h4>{" "}
                    </div>
                    <div>
                      <span>{article.pubDate}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ position: "relative" }}>
          <div className={styles.footerHeader}>
            <span>Tag Cloud</span>
          </div>
          <div className={styles.footerSection}>
            <ul className={styles.tags}>
              {data.slice(2, 7).map((article) => (
                <li key={article.guid} className={styles.tag}>
                  <div className={styles.blogTag}>
                    <i
                      className="fa-solid fa-circle"
                      style={{ color: getRandomColor(), fontSize: "12px" }}
                    ></i>
                    <span>{article.categories[0]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ position: "relative" }}>
          <div className={styles.footerHeader}>
            <span>Follow Me</span>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.followCard}>
              <ul>
                <li>
                  <a href="">
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#1da1f2", fontSize: "22px" }}
                    ></i>
                  </a>
                  <span>Twitter</span>
                </li>
                <li>
                  <a href="">
                    <i
                      className="fa-brands fa-medium"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </a>
                  <span>Medium</span>
                </li>
                <li>
                  <a href="">
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#0a66c2", fontSize: "22px" }}
                    ></i>
                  </a>
                  <span>Linkedln</span>
                </li>
                <li>
                  <a href="">
                    <i
                      className="fa-brands fa-square-instagram"
                      style={{ color: "#f700ba", fontSize: "22px" }}
                    ></i>
                  </a>
                  <span>Instagram</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
