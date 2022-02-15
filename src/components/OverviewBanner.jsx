import styles from './Banner.module.scss'

const OverviewBanner = ({item}) => {
    return ( <p className={styles.overview}>{item.overview}</p> );
}
 
export default OverviewBanner;