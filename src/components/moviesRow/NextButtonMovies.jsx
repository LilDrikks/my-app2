import styles from './MoviesRow.module.scss'

const NextButtonMovies = ({objeto,scrollX, setScrollX}) => {

        const handleClickNext = () => {
                let scrollLineX = scrollX - Math.round(window.innerWidth / 2)
                let listWidth = objeto.results.length * 166
                /* Se o valor do estado for menor doque a largura da tela  menos o tamanho da lista 
                 mais metade do valor da largura da tela tela
                 #Ex: (1000 < 1200 - 3400 + 600),
                         (scrollX < (window.innerWidth - listWidth + Math.round(window.innerWidth / 2)))
                         ((window.innerWidth - listWidth) > scrollLineX)
                        console.log(scrollX, window.innerWidth, listWidth, Math.round(window.innerWidth / 2))
                */

                if ((window.innerWidth - listWidth) > scrollLineX){
                        scrollLineX = (window.innerWidth - listWidth) - 50
                }
                setScrollX(scrollLineX)
        }

        return (<button onClick={handleClickNext} className={styles.nextButtonMovies}>
                <img src="./arrow_forward_ios_black_24dp.svg" alt="" className={styles.nextButtonMoviesSvg} />
        </button>);
}


export default NextButtonMovies;  