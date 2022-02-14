import styles from './MoviesRow.module.scss'

const Movies = ({src, alt}) => {
    return ( 
            <img src={src} alt={alt} className={styles.imgMovie}/>
     );
} 
 
export default Movies;