import styles from './Button.module.css'

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${className || ''}`}
    >{children}
    </button>
  )
}
export default Button
