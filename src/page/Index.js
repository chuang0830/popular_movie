import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { fetchMovieList } from "../redux/action/movie";
import { fetchTvList } from "../redux/action/tv";
import { fetchtrending } from "../redux/action/trending";
import MovieItem from '../component/MovieItem';
import Loading from "../component/Loading";

const  Index = () =>{
  const [loading, setLoading]=useState(true)
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieList.movies);
  const tvs = useSelector((state) => state.tvList.tvs);
  const trending = useSelector((state) => state.hero);
  const {vote_average, title, name, overview, backdrop_path}= trending.trending
  useEffect(() => {
    dispatch(fetchtrending())
    dispatch(fetchMovieList())
    setTimeout(()=>{
      dispatch(fetchTvList())
    },1000)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }, []);

  return (
      <>
        {loading?
          <Loading/>:
          (
            <>
              <div className="hero_section">
                  <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`} alt="" />
                  <div className="hero_text">
                      <div className="hero_rating">{vote_average?.toFixed(1)}</div>
                      <h2>{title||name}</h2>
                      <p>{overview}</p>
                  </div>
              </div>
              <div className="container">
                <div className="list_container">
                  <div className="list_title">
                    Popular English Movie
                  </div>
                  <div className="list_wrap">
                    {movies&&movies.length&&movies.map(value =>{
                      return (value.original_language==='en')&&<MovieItem value={value} key={value.id}/>
                  })}
                  </div>
                </div>
                <div className="list_container">
                  <div className="list_title">
                  Popular Foreign Language Movie
                  </div>
                  <div className="list_wrap">
                    {movies&&movies.length&&movies.map(value=>{
                      return (value.original_language!=='en')&&<MovieItem value={value} key={value.id}/>
                  })}
                  </div>
                
                </div>
                <div className="list_container">
                  <div className="list_title">
                  Popular English TV show
                  </div>
                  <div className="list_wrap">
                    {tvs&&tvs.length&&tvs.map(value=>{
                      return (value.original_language ==='en')&&<MovieItem value={value} key={value.id}/>
                  })}
                  </div>
                
                </div>
                <div className="list_container">
                  <div className="list_title">
                  Popular Foreign Language show
                  </div>
                  <div className="list_wrap">
                    {tvs&&tvs.length&&tvs.map(value=>{
                      return (value.original_language!=='en')&&<MovieItem value={value} key={value.id}/>
                  })}
                  </div>
                
                </div>
              </div>
            </>
          )
        }
      </>
      
  );
}

export default Index;
