
import Container from '../Shared/Container/Container'
import styles from './Header.module.css'
import Navigation from './components/Navigation/Navigation'

const Header = () => {
  return (
    <header>
      <div className={styles.header} >
      <Container>
      <div className={styles.innerHeader}>
        <div className={styles.headerLogo}></div>
       <Navigation />
       <div className={styles.headerIcon} >
        <a href=""><i className="fa-brands fa-twitter" style={{color: "#1da1f2", fontSize: "22px"}}></i></a>
        <a href=""><i className="fa-brands fa-medium" style={{fontSize: "22px"}}></i></a>
        <a href=""><i className="fa-brands fa-linkedin"  style={{color: "#0a66c2", fontSize: "22px"}}></i></a>
        <i className="fa-brands fa-square-instagram" style={{color: "#f700ba", fontSize: "22px"}}></i>
       </div>
       <div className={styles.mobileMenuToggler}>
          <i className="fa-solid fa-bars"></i>
      </div>
      </div>
    </Container>
      </div>
    </header>
  )
}

export default Header