import styles from './MoviesRow.module.scss'

import { useState } from 'react';

import LineMovies from './LineMovies';
import TitleCategory from './TitleCategory';
import NextButtonMovies from './NextButtonMovies';
import PreviusButtonMovies from './PreviusButtonMovies'



const MoviesRow = ({ title, objeto }) => {

    const [scrollX, setScrollX] = useState(0);

    return (
        <div className={styles.esconde}>
            <TitleCategory title={title} />
            <div className={styles.moviesRow} style={{ marginLeft: scrollX }}>
                <PreviusButtonMovies scrollX={scrollX} setScrollX={setScrollX} />
                <LineMovies objeto={objeto} />
                <NextButtonMovies scrollX={scrollX} setScrollX={setScrollX} objeto={objeto} />
            </div>
        </div>
    );
}

export default MoviesRow;