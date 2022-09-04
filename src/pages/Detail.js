import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchMovie,
    removeSelectedMovie,
} from "../redux/action/movie";
import Loading from '../component/Loading'
const Detail =()=>{
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movie);
    const { genres, poster_path, original_title, vote_average, overview } = movie
  useEffect(() => {
    if (movieId && movieId!==''){dispatch(fetchMovie(movieId))}
    return () => {
        dispatch(removeSelectedMovie());
      };
  }, []);
    return(<>
    {Object.keys(movie).length === 0 ? (
       <Loading/>
      ):( <div className="detail">
            <div className="detail_img">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}alt="" />
            </div>
            <div className="detail_content">
                <div className="content_genres">
                {
                    genres?.map((v, i)=>{
                        return <p key={i}>{v.name}</p>
                    })
                }
                </div>
                <h1>{original_title}
                    <span className="content_rating">{(vote_average)?.toFixed(1)}</span>
                </h1>
                <p className="content_overview">{overview}</p>
            </div>
        </div> )}
    </>)
}
export default Detail