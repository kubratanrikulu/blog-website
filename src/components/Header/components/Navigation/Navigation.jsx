
import { navRoutes } from './navRoutes'
import { useNavigate } from 'react-router-dom'
import styles from '../../Header.module.css'
const Navigation = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.headerLink}>
      <ul className={styles.headerList}>
        {navRoutes.map((route, index) => (
          <li key={index}
          onClick={() => { navigate(route.path)}} >
            {route.label}
         </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation