import React, { useEffect } from "react";
import { useDispatch  } from "react-redux";
import axios from "axios";
import { setMovie, fetchMovieList } from "../redux/action/movie";
import MovieItem from '../component/MovieItem';
// import './App.css';

function App() {
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://api.themoviedb.org/3/movie/popular?api_key=92af3febcb8cefe9b1932f8b3b7fde7e&language=en-US&page=1")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setMovie(response.data.results));
  // };

  useEffect(() => {
    dispatch(fetchMovieList());
  }, []);

  return (
    <div className="container">
      <MovieItem/>
    </div>
  );
}

export default App;
