import AboutCard from "../../components/AboutCard/AboutCard"
import BlogCard from "../../components/BlogCard/BlogCard"
import styles from "./Homepage.module.css"

const homepage = () => {
  return (
    <div className={styles.homePage}><BlogCard /><AboutCard /></div>
  )
}

export default homepage