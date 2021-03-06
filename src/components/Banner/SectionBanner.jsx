import styles from './Banner.module.scss'

import TitleBanner from './TitleBanner';
import InfoBanner from './InfoBanner';
import OverviewBanner from './OverviewBanner';
import ButtonsBanner from './ButtonsBanner';
import GradientBanner from './GradientBanner';
import GenresBanners from './GenresBanner';

const SectionBanner = ({ item }) => {
    let bannerImage 

    if(item.backdrop_path){
        bannerImage = item.backdrop_path
    }
    else if(item.poster_path){
        bannerImage = item.poster_path
    }else{
        bannerImage = item.networks[1].logo_path
    }

    return (
        <section className={styles.banner} style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${bannerImage}')`,
        }}>
            <GradientBanner>
            <TitleBanner item={item} />
            <InfoBanner item={item} />
            <OverviewBanner item={item} />
            <ButtonsBanner />
            <GenresBanners item={item} />
            </GradientBanner>
        </section>
    );
}

export default SectionBanner;