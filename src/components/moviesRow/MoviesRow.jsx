import styles from './MoviesRow.module.scss'
import LineMovies from './LineMovies';
import TitleCategory from './TitleCategory';
import NextButtonMovies from './NextButtonMovies';
import PreviusButtonMovies from './PreviusButtonMovies'

import { useState } from 'react';

const MoviesRow = ({title, objeto}) => {
    const [scrollX, setScrollX] = useState(40);

    
    

    const handleClickNext = () =>{
        let scrollLineX = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = objeto.results.length * 166
        //usei o state para verificar se ele é menor que o tamanho da lista + metade da tela - tela toda
        //scrollX < 3320 - 
        if(scrollX < (window.innerWidth - listWidth + Math.round(window.innerWidth / 2))){
            scrollLineX = (window.innerWidth - listWidth) - 50
        }
        
        setScrollX(scrollLineX) 
    } 

    return ( 
        <>
       <TitleCategory title={title}/>
        <div className={styles.moviesRow} style={{marginLeft: scrollX}}>   
            <PreviusButtonMovies scrollX={scrollX} setScrollX={setScrollX}/>
            <LineMovies objeto={objeto} />
            <NextButtonMovies onClick={handleClickNext} />
        </div>
        </>
     );
}
 
export default MoviesRow;