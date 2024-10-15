import styles from './Attention.module.css';

const Attention = ({children, className, ...props}) => {
  return (
    <span className={`${styles.attention} ${className}`} {...props}>{children}</span>
  )
}
export default Attention;