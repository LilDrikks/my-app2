import './App.css';
import { useEffect, useState } from 'react';
import RequestFetchUrl from './requires/RequestFetchUrl';
import React from 'react';
import MoviesRow from './components/MoviesRow';


function App() {
    const [loadAllMoviesAndSeries, setloadAllMoviesAndSeries] = useState([])
    useEffect(() => {
        const loadAll = async () => {
            //pegando a lista de filmes no arquivo RequestFetchUrl a função getHomeList
            let list = await RequestFetchUrl.getHomeList()
            setloadAllMoviesAndSeries(list)

        }
        loadAll()

    }, []);

    return (
        <>
            <div className="App" >
                <h1> Welcome, user </h1>
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