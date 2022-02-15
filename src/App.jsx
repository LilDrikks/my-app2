import { useEffect, useState } from 'react';
import objeto from './requires/RequestFetchUrl';
import React from 'react';
import MoviesRow from './components/moviesRow/MoviesRow';
import Banner from './components/SectionBanner';


function App() {
    const [loadAllMoviesAndSeries, setloadAllMoviesAndSeries] = useState([])
    const[loadBanner, setBanner] = useState(null)
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

    return ( 
    <>
        <div className="App">
        {loadBanner && <Banner  item={loadBanner} />}
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