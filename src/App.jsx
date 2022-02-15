import { useEffect, useState } from 'react';
import objeto from './requires/RequestFetchUrl';
import React from 'react';
import MoviesRow from './components/moviesRow/MoviesRow';
import SectionBanner from './components/Banner/SectionBanner';
import Header from './components/Header/Header';


function App() {
    const [loadAllMoviesAndSeries, setloadAllMoviesAndSeries] = useState([])
    const[loadBanner, setBanner] = useState(null)
    const[headerBlack, setHeaderBlack] = useState(false)
    useEffect(() => {
        const loadAll = async() => {
            //pegando a lista de filmes no arquivo RequestFetchUrl a função getHomeList
            let list = await objeto.getHomeList()
            setloadAllMoviesAndSeries(list)

            let originals = list.filter(i => i.slug === 'originals')
            let randomOriginals = Math.floor(Math.random() * (originals[0].items.results.length -1))
            let random = originals[0].items.results[randomOriginals]
            let randomFetch = await objeto.getBanner(random.id, 'tv')
            setBanner(randomFetch)
        }
        loadAll()
    }, []);

    useEffect(() => {
        const handleScrollWindow = () => {
            if(window.scrollY > 10){
                setHeaderBlack(true)
            }else{
                setHeaderBlack(false)
            }
        }
        window.addEventListener('scroll', handleScrollWindow)

        return () => {
            
            window.removeEventListener('scroll', handleScrollWindow)
        };
    }, [headerBlack]);

    return ( 
    <>
        <div className="App">
            <Header headerBlack={headerBlack} />
        {loadBanner && <SectionBanner  item={loadBanner} />}
        <div>
            {
                loadAllMoviesAndSeries.map((item, key) => <MoviesRow key={key} title={item.title} objeto={item.items} />)
            }
        </div>
    </div>
</>
);
}
    


export default App;