import styles from './MoviesRow.module.css'
import LineMovies from './LineMovies';
import TitleCategory from './TitleCategory';
import NextButtonMovies from './NextButtonMovies';

const MoviesRow = ({title, objeto}) => {
    return ( 
        <>
       <TitleCategory title={title}/>
        <div className={styles.moviesRow}>
            <LineMovies objeto={objeto} />
            <NextButtonMovies />
        </div>
        </>
     );
}
 
export default MoviesRow;