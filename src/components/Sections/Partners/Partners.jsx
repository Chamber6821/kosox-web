import { Link } from 'wouter'
import styles from './Partners.module.css'
import Button from '../../UI/Button/Button'
import { useState } from 'react'

const Partners = ({ className, partners, children, ...props }) => {
  const [isAllCategories, setIsAllCategories] = useState(false)

  return (
    <div className={`${styles.partners} ${className} cntr`} {...props}>
      {children
        ? <h4 className='small-title'>{children}</h4>
        : <></>}
      <div className={styles.partnersList}>
        {!isAllCategories
          ? partners.slice(0, 8).map(partner => (
            <div key={partner.name} className={styles.partnersPartner}>
              <img src={partner.icon} alt='icon' />
              <div className={styles.partnerHover}>
                <h5>{partner.name}</h5>
                <Button><Link to={`/about-manufacturer/${partner.id}`}>Подробнее...</Link></Button>
              </div>
            </div>
          ))
          : partners.map(partner => (
            <div key={partner.name} className={styles.partnersPartner}>
              <img src={partner.icon} alt='icon' />
              <div className={styles.partnerHover}>
                <h5>{partner.name}</h5>
                <Button><Link to={`/about-manufacturer/${partner.id}`}>Подробнее...</Link></Button>
              </div>
            </div>
          ))}
      </div>

      {partners.length > 6
        ? <Button className={`see_all btn ${styles.partnersBtn}`} onClick={() => setIsAllCategories(prev => !prev)}>{!isAllCategories ? 'Смотреть все' : 'Скрыть'}</Button>
        : <></>}
    </div>
  )
}
export default Partners
