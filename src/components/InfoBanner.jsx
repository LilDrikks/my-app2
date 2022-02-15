import styles from './Banner.module.scss'

const InfoBanner = ({item}) => {
    return ( 
    <div>
        <p className={styles.vote}>Votos {item.vote_average}</p>
    </div> );
}
 
export default InfoBanner;