import styles from './Blog.module.css'
import BlogCard from '../../components/BlogCard/BlogCard';
import useArticles from '../../Hook/useArticles';
const Blog = () => {
  const { data } = useArticles();
  return (
    
    <div className={styles.blog}>
       <div className={styles.blogCards}>
      {data.length > 0 &&
        data.map((article) => (
      <BlogCard  key={article.title} article={article} />))}
      </div>
    </div>
  )
}

export default Blog