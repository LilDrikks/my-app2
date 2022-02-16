import styles from './MoviesRow.module.scss'

import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

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
                <BsFillArrowLeftCircleFill  className={styles.previusButtonMoviesIco}/>
        </button>);
        }
 

        export default NextButtonMovies;