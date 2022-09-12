import { Link } from "react-router-dom";

const MovieItem =({value})=>{
    const {title, vote_average, poster_path, id, name} = value
    return(
        <>
            <Link className="movie_item" to={title?`/movie/${id}`:`/tv/${id}`}>
                <div className="movie_content">
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt="" />
                    <div className="rating">
                        {vote_average}
                    </div>
                </div>
                <div className="movie_title">
                    {title||name}
                </div>
            </Link>
      </>
    )
}
export default MovieItem