import styles from './Banner.module.scss'
const Banner = ({item}) => {
    return ( 
        <section className={styles.banner} style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`
        }}>
            <div className={styles.gradientTop}>
                <div className={styles.gradientRight}>
                    <p>{item.name}</p>
                </div>
            </div>
        </section>
     );
}
 
export default Banner;