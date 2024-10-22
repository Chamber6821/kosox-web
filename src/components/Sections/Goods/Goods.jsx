import styles from './Goods.module.css'

const Goods = ({ className, imgUrl, children, ...props }) => {
  return (
    <div className={`${styles.catalog_start_inner} ${className}`}>
      <div className={styles.catalog_start_text}>
        {children}
      </div>
      <img src={imgUrl} alt='img' className={styles.catalog_start_img} />
    </div>
  )
}
export default Goods
