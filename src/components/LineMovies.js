import Movies from "./Movies";

const LineMovies = ({objeto}) => {

  

    return ( 
        <div className="lineMovies">
        {objeto.results.map((item, key) =>( 
        <div key={key} className="lineMoviesMap">
            <Movies  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}  alt={item.title === undefined ? item.name : item.title} />
        </div>
        ) )}
        </div>
     )
}
 
export default LineMovies;