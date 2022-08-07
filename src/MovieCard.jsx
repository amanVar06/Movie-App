import React from "react";

//notice how a file name and custom component name is same
//it is not a necessity but its definitely a good practice

//we are destructuring props object here
//because we dont have access to movie1
//so we used props object which essentially gives us the movie
const MovieCard = (movie) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
