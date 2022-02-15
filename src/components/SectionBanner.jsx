import styles from './Banner.module.scss'

import TitleBanner from './TitleBanner';
import InfoBanner from './InfoBanner';
import OverviewBanner from './OverviewBanner';
import ButtonsBanner from './ButtonsBanner';
import GradientBanner from './GradientBanner';

const Banner = ({ item }) => {
    //console.log(item)
    return (
        <section className={styles.banner} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`
        }}>
            <GradientBanner>
            <TitleBanner item={item} />
            <InfoBanner item={item} />
            <OverviewBanner item={item} />
            <ButtonsBanner />
            </GradientBanner>
        </section>
    );
}

export default Banner;