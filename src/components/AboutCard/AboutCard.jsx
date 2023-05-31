
import styles from './AboutCard.module.css'
import profil from "../../../public/assets/images/profill.jpg"
const AboutCard = () => {
  return (
    <div style={{position: "relative"}}>
       <div className={styles.aboutMe}><span>About Me</span></div>
    <div className={styles.aboutCard}>
    
    <div>
    <img className={styles.aboutImage}
              src={profil}
              alt=""
              width={'200px'}
            />
    </div>
    <div className={styles.blogCardRight}>
     <div className={styles.blogHeader}>
      <h3>Kübra Tanrıkulu</h3>
      <span>Frontend Developer</span>
      <div className={styles.headerIcon} >
        <a href=""><i className="fa-brands fa-twitter" style={{color: "#1da1f2", fontSize: "20px"}}></i></a>
        <a href=""><i className="fa-brands fa-medium" style={{fontSize: "20px"}}></i></a>
        <a href=""><i className="fa-brands fa-linkedin"  style={{color: "#0a66c2", fontSize: "20px"}}></i></a>
        <i className="fa-brands fa-square-instagram" style={{color: "#f700ba", fontSize: "20px"}}></i>
       </div>
     </div>
     <div className={styles.blogContent} >
      <p>Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…</p>
     </div>   
    </div>
      
  </div>
    </div>
   
  )
}

export default AboutCard