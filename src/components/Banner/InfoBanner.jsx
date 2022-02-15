import styles from './Banner.module.scss'

const InfoBanner = ({item}) => {

    let yearMovie = item.first_air_date.substring(0, 4)
    let seasonMovie = item.number_of_seasons
    return ( 
    <div className={styles.infoBanner}>
        <p className={styles.vote}>Votos {item.vote_average}</p>
        <p className={styles.year}>{yearMovie}</p>
        <p className={styles.season}>{seasonMovie + ' Seasons'}</p>
    </div> );
}
 
export default InfoBanner;