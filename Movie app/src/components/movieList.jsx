import React from "react";

const MovieList = (props) => {

  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="image-container col-12 col-md-4 mb-md-4 ">
          <img src={movie?.Poster} alt="movie-poster" />
          <div onClick={() => props.handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center">
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
