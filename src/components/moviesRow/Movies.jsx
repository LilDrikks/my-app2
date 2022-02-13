import styles from './MoviesRow.module.css'

const Movies = ({src, alt}) => {
    return ( 
            <img src={src} alt={alt} className={styles.imgMovie}/>
     );
}
 
export default Movies;