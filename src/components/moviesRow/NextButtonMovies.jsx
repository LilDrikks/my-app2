import styles from './MoviesRow.module.scss'

const NextButtonMovies = ({onClick}) => {
        return ( <button onClick={onClick} className={styles.nextButtonMovies}>
                <img src="./arrow_forward_ios_black_24dp.svg" alt="" className={styles.nextButtonMoviesSvg}/> 
        </button>);
        }


        export default NextButtonMovies;  