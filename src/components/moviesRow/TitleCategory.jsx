import styles from './MoviesRow.module.css'
const TitleCategory = ({title}) => {
    return (  <p className={styles.titleCategory}>{title}</p> );
}
 
export default TitleCategory;