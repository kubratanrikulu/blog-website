
import blog from "../../../public/assets/images/contact2.png"
import styles from "./BlogCard.module.css"
const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <div>
      <img
                src={blog}
                alt=""
                width={'550px'}
              />
      </div>
      <div className={styles.blogCardRight}>
       <div className={styles.blogHeader}>
        <div className={styles.blogTag}><i className="fa-solid fa-circle" style={{color: "#c5c5fe", fontSize: "12px"}}></i><span>Travel</span></div>
        <div><span>September 26, 2019</span></div>
        <div><span>1 min read</span></div>
       </div>
       <div className={styles.blogContent} >
        <h1>The spectacle before us was indeed sublime</h1>
        <p>Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…</p>
       </div>
       <div className={styles.blogCardFooter}>
          <div><button type="submit" className={styles.blogCardButton}>Contine Reading <i className="fa-solid fa-arrow-right"></i></button></div>
          <div>Person</div>
        </div>   
      </div>
        
    </div>
  )
}

export default BlogCard