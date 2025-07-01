import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from "./components/movieList";

function App() {
  const [movie, setMovie] = useState([]);

  const getMovieRequest=async()=>{
    const  url= "http://www.omdbapi.com/?s=star war&apikey=99e376d"
    const response = await fetch(url);
    const responsejson=await response.json()
    console.log(responsejson);
    setMovie(responsejson.Search)
  }

  useEffect(()=>{
    getMovieRequest()
  },[])



  return (
    <div className="movie-app container">
      <div className="row">
        <MovieList movies={movie} />
      </div>
    </div>
  );
}

export default App;