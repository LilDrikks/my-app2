import styles from './Banner.module.scss'
import {CgPlayButton, CgInfo} from 'react-icons/cg'
const Banner = ({item}) => {
    console.log(item)
    return ( 
        <section className={styles.banner} style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`
        }}>
            <div className={styles.gradientTop}>
                <div className={styles.gradientRight}>
                    <p className={styles.title}>{item.name}</p>
                    <p className={styles.vote}>Votos {item.vote_average}</p>
                    <p className={styles.overview}>{item.overview}</p>
                    <div className={styles.buttons}>
                        <button>
                            <CgPlayButton className={styles.cgPlayIcon}/> Assistir
                        </button>
                        <button className={styles.btnCgInfo}>
                          <CgInfo className={styles.cgInfoIcon}/> Mais informações
                        </button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Banner;