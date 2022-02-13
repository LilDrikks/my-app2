import styles from './MoviesRow.mudule.css'
import LineMovies from './LineMovies';
import TitleCategory from './TitleCategory';
import NextButtonMovies from './NextButtonMovies';

const MoviesRow = ({title, objeto}) => {
    return ( 
        <>
       <TitleCategory title={title}/>
        <div className="moviesRow">
            <LineMovies objeto={objeto} />
            <NextButtonMovies />
        </div>
        </>
     );
}
 
export default MoviesRow;