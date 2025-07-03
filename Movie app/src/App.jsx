import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/movieList";
import MovieListHandler from "./components/MovieListHandler";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavourites";
import RemoveFavourite from "./components/RemoveFavourite";

function App() {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourite, setFavourite] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=99e376d`;
    const response = await fetch(url);
    const responsejson = await response.json();
    if (responsejson.Search) {
      setMovie(responsejson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourite")
    );
    if (movieFavourites) {
      setFavourite(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourite", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourite, movie];
    setFavourite(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const RemoveFromFavourite = (movie) => {
    const newFavouriteList = favourite.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourite(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="movie-app container-fluid  ">
      <div className="dh "style={{marginLeft: "90px"}}>
        <div className="row  d-flex align-items-center mt-4 mb-4">
          <MovieListHandler heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            movies={movie}
            handleFavouriteClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
        </div>

        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHandler heading="Favourites" />
        </div>

        <div className="row">
          <MovieList
            movies={favourite}
            handleFavouriteClick={RemoveFromFavourite}
            favouriteComponent={RemoveFavourite}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
