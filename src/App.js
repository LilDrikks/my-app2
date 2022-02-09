
import './App.css';
import {useEffect} from 'react';
import RequestFetchUrl from './RequestFetchUrl';

function App() {
  
  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista de filmes
      let list = await RequestFetchUrl.getHomeList()
      console.log(list)
    }
    loadAll ()
  }, []);

  return (
    <div className="App">
        <h1>Hello</h1>
    </div>
  );
}

export default App;
