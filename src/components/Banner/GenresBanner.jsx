import styles from './Banner.module.scss'
const GenresBanners = ({item}) => {

    let genres = item.genres

    return ( 
        <div className={styles.divGenres}>
        genres: {genres.map((item, key) =><p key={key} className={styles.genres}>{item.name}</p>)}
        </div>
     );
}
 
export default GenresBanners;