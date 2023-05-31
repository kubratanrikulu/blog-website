import styles from './Container.module.css'

// eslint-disable-next-line react/prop-types
const Container = ({children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container