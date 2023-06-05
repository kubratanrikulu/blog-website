/* eslint-disable react-hooks/rules-of-hooks */
import useArticles from "../../Hook/useArticles";
import AboutCard from "../../components/AboutCard/AboutCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import Follow from "../../components/FollowSection/Follow";
import styles from "./Homepage.module.css";
const homepage = () => {
  const { data } = useArticles();

  return (
    <div className="grid grid-cols-2 justify-center md:grid-cols-1">
       <div className={styles.homePage}>
      <div><div className={styles.blogCards}>
        {data.length > 0 &&
          data
            .slice(0, 3)
            .map((article) => (
              <BlogCard key={article.title} article={article} />
            ))}
      </div></div>
      
<div>
<div className={styles.homepageRight}>
        <div className={styles.homepageAbout}>
        <AboutCard />
        </div>
        <div className={styles.homepageFollow}>
        <Follow />
        </div>
         
      </div>
</div>
     
    </div>
    </div>
   
  );
};

export default homepage;
