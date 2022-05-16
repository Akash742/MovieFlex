import React from "react";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay d-flex align-items-center justify-content-center" onClick={() => props.handleFavouritesClick(movie)}>
              <ul>
                  <li>Title-{movie.Title}</li>
                  <li>Year-{movie.Year}</li>
                  <li>Type-{movie.Type}</li>
                  <FavouriteComponent/>
              </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;