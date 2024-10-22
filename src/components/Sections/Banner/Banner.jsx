import { Link } from 'wouter'
import styles from './Banner.module.css'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import Attention from '../../UI/Attention/Attention'

const Banner = ({ breadcrumbs, children }) => {
  return (
    <div className={`cntr ${styles.banner}`}>
      <div className={styles.breadcrumbs}>
        {breadcrumbs.map(({ title, url }, idx) => {
          if (idx + 1 === breadcrumbs.length) {
            return <Attention key={title}>{title}</Attention>
          } else {
            return (
              <span key={title}>
                <Link to={url}>{title}</Link> /&nbsp;
              </span>
            )
          }
        })}
      </div>
      <SectionTitle className={styles.bannerTitle}>
        {children}
      </SectionTitle>
    </div>
  )
}
export default Banner
