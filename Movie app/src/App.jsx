import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/movieList";
import MovieListHandler from "./components/MovieListHandler";
import SearchBox from "./components/SearchBox";

function App() {
  const [movie, setMovie] = useState([]);
  const [searchValue,setSearchValue]= useState("")

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=99e376d`;
    const response = await fetch(url);
    const responsejson = await response.json();
      if(responsejson.Search){
     setMovie(responsejson.Search);
      }
    
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [getMovieRequest]);

  return (
    <div className="movie-app container-fluid ">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHandler heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movie} />
      </div>
    </div>
  );
}

export default App;
