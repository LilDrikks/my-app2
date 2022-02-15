import styles from './Banner.module.scss'

const GradientBanner = ({children}) => {
    return (
        <div className={styles.gradientTop}>
            <div className={styles.gradientRight}>
                {children}
            </div>
        </div>
         );
}
 
export default GradientBanner;