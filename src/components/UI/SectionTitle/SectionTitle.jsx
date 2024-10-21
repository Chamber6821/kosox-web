import styles from './SectionTitle.module.css';

const SectionTitle = ({children, className, ...props}) => {
  return (
    <h2 className={`${styles.title} ${className}`} {...props}>{children}</h2>
  )
}
export default SectionTitle