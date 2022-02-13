import styles from './MoviesRow.module.css'

const NextButtonMovies = () => {
        return ( <button className={styles.nexButtonMovies}>
                <img src="./arrow_forward_ios_black_24dp.svg" alt="" className={styles.nexButtonMoviesSvg}/> 
        </button>);
        }


        export default NextButtonMovies;