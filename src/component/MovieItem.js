import { Link } from "react-router-dom";

const MovieItem =({value})=>{
    const {title, vote_average, poster_path, id, name} = value
    return(
        <>
            <Link className="movie_item" to={title?`/movie/${id}`:`/tv/${id}`}>
                <div className="movie_content">
                    <img loading="lazy"
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                    srcSet={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path} 1x,
                    https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path} 2x`} 
                    alt= {title||name}/>
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