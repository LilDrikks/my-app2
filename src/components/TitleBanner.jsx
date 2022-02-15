import styles from './Banner.module.scss'

const TitleBanner = ({ item }) => {
    return (<p className={styles.title}>{item.name}</p>);
}

export default TitleBanner;