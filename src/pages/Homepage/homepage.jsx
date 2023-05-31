/* eslint-disable react-hooks/rules-of-hooks */
import useArticles from "../../Hook/useArticles";
import AboutCard from "../../components/AboutCard/AboutCard"
import BlogCard from "../../components/BlogCard/BlogCard"
import styles from "./Homepage.module.css"
const homepage = () => {
  const { data } = useArticles();

  return (
    <div className={styles.homePage}>
      {data.length > 0 &&
        data.map((article) => (
      <BlogCard  key={article.title} article={article} />))}<AboutCard /></div>
  )
}

export default homepage