import Movies from "./Movies";
import styles from './MoviesRow.module.scss'

const LineMovies = ({objeto}) => {
 
    return ( 
        <div className={styles.lineMovies}>
        {objeto.results.map((item, key) =>( 
        <div key={key} className={styles.lineMoviesMap}>
            <Movies  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}  alt={item.title === undefined ? item.name : item.title} />
        </div>
        ) )}
        </div>
     )
}
 
export default LineMovies;