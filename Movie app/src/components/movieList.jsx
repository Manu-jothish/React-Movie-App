import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container col-12 col-md-4 mb-md-4 ">
          <img src={movie.Poster} alt="movie-poster"></img>
          <div className="overlay d-flex align-items-center justift-justify-content-center"></div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
