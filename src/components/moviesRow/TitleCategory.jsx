import styles from './MoviesRow.module.scss'
const TitleCategory = ({title}) => {
    return (  <p className={styles.titleCategory}>{title}</p> );
}
 
export default TitleCategory;