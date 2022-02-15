import styles from './MoviesRow.module.scss'

const NextButtonMovies = ({scrollX, setScrollX}) => {
        const handleClickPrevius = () => {
                let scrollLineX = scrollX + Math.round(window.innerWidth / 2)
               if(scrollLineX > 0){
                   scrollLineX = 40
               }
               // (window.innerWidth - listWidth ) > scrollLineX
               setScrollX(scrollLineX)
           } 
        return ( <button onClick={handleClickPrevius} className={styles.previusButtonMovies}>
                
        </button>);
        }
 

        export default NextButtonMovies;