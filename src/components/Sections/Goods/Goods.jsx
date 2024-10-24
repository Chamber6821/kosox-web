import styles from './Goods.module.css'

const Goods = ({ className, imgUrl, children, ...props }) => {
  return (
    <div className={`${styles.catalog_start_inner} ${className}`} {...props}>
      <div className={styles.catalog_start_text}>
        {children}
      </div>
      <figure className={styles.catalog_start_img}>
        <img src={imgUrl} alt='img' />
      </figure>
    </div>
  )
}
export default Goods
