import styles from './MoviesRow.module.scss'

const NextButtonMovies = ({scrollX, setScrollX}) => {
        const handleClickPrevius = () => {
                let scrollLineX = scrollX + Math.round(window.innerWidth / 2)
               if(scrollLineX > 0){
                   scrollLineX = 40
               }
               setScrollX(scrollLineX)
           } 
        return ( <button onClick={handleClickPrevius} className={styles.previusButtonMovies}>
                <img src="./arrow_forward_ios_black_24dp.svg" alt="" className={styles.previusButtonMoviesSvg}/> 
        </button>);
        }
 

        export default NextButtonMovies;