import styles from './MoviesRow.module.scss'

const NextButtonMovies = ({objeto,scrollX, setScrollX}) => {

        const handleClickNext = () => {
                let scrollLineX = scrollX - Math.round(window.innerWidth / 2)
                let listWidth = objeto.results.length * 166
                //usei o state para verificar se ele é menor que o tamanho da lista + metade da tela - tela toda
                //scrollX < 3320 - 
                if (scrollX < (window.innerWidth - listWidth + Math.round(window.innerWidth / 2))) {
                        scrollLineX = (window.innerWidth - listWidth) - 50
                }

                setScrollX(scrollLineX)
        }

        return (<button onClick={handleClickNext} className={styles.nextButtonMovies}>
                <img src="./arrow_forward_ios_black_24dp.svg" alt="" className={styles.nextButtonMoviesSvg} />
        </button>);
}


export default NextButtonMovies;  