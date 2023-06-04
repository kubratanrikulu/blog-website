/* eslint-disable react/prop-types */
import styles from "./BlogCard.module.css"

const BlogCard = ({article}) => {
  function getRandomColor() {
    const colors = ["#83ea6c", "#ffcf00", "#c5c5fe", "#85b2f4", "#49dfd4"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  return (
    <div className={styles.blogCard}>
      <div>
      {article.thumbnail && (
              <img src={article.thumbnail} width={350} alt={article.title} />
            )}
      </div>
      <div className={styles.blogCardRight}>
       <div className={styles.blogHeader}>
        <div className={styles.blogTag}><i className="fa-solid fa-circle" style={{color: getRandomColor(), fontSize: "12px"}}></i><span>{article.categories[0]}</span></div>
        <div><span>{article.pubDate}</span></div>
        <div><span>1 min read</span></div>
       </div>
       <div className={styles.blogContent} >
        <h1>{article.title}</h1>
        <p className={styles.blogDescription} dangerouslySetInnerHTML={{
          __html: article.description
        }}></p>
       </div>
       <div className={styles.blogCardFooter}>
          <div><button type="submit" className={styles.blogCardButton}>Continue Reading  <a href={`/makale/${article.id}`}></a> </button></div>
          <div>{article.author}</div>
        </div>   
      </div>
        
    </div>
  )
}

export default BlogCard