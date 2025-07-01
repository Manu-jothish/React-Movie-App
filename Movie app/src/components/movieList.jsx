import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="col-12 col-md-4">
          <img src={movie.Poster} alt="movie-poster"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
