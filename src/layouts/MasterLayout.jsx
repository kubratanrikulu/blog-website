
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer"
import Container from '../components/Shared/Container/Container'
import styles from './MasterLayout.module.css'

// eslint-disable-next-line react/prop-types
const MasterLayout = ({children}) => {
  return (
    <div className={styles.masterLayout}>
    <Header />
    <Container>{children}</Container>
    <Footer />
    </div>
  )
}

export default MasterLayout