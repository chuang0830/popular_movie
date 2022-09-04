import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
const MovieItem =()=>{
    const List = useSelector((state) => state.movieList.movies);
    return(
        <>
        {List&&List.length?List.map((v ,i)=>{
            const {title, vote_average, poster_path, id} = v
            return(
                <Link className="movie_item" key={id} to={`/movie/${id}`}>
                    <div className="movie_content">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt="" />
                        <div className="rating">
                            {vote_average}
                        </div>
                    </div>
                    <div className="movie_title">
                        {title}
                    </div>
                </Link>
            )
        }):(<Loading/>)}
       
      </>
    )
}
export default MovieItem