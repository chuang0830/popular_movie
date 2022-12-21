import { Link } from "react-router-dom";

const MovieItem = ({ value }) => {
  const { title, vote_average, poster_path, id, name } = value;
  const defaultImg =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  return (
    <>
      <Link className="movie_item" to={title ? `/movie/${id}` : `/tv/${id}`}>
        <div className="movie_content">
          <img
            loading="lazy"
            src={
              poster_path === null
                ? defaultImg
                : `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
            }
            alt={title || name}
          />
          <div className="rating">{vote_average}</div>
        </div>
        <div className="movie_title">{title || name}</div>
      </Link>
    </>
  );
};
export default MovieItem;
