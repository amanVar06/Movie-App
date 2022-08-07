import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

//creating a static variable  API_URL
const API_URL = "http://www.omdbapi.com/?apikey=7262c9bf";

// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   Type: "movie",
//   Poster: "N/A",
// };

//how can we fetch data for all the movies then display them here
//the first step in doing that would be extracting the code for this movie
//into its own custom component, the reason we are doing that because
//if you think about it we are going to have many of these movie cards
//they are going to repeated quite often,
//so instead of soing something like this we would have to have hundreds of lines
//to show just a few movies what we can do is just create a custom component
//and that way we'll able to do it almost in a single line

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  //you can have multiple states and even multiple useEffect hooks
  //per one component, there is no limit

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data.Search);

    setMovies(data.Search);
  };

  // searchMovies(searchTerm);

  // console.log(movies, Array.isArray(movies));
  // console.log(searchTerm);
  // console.log(movies, Array.isArray(movies));
  // console.log(movies[0]);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* {movies.forEach((movie) => {
            <MovieCard movie={movie} />;
          })} */}
          <MovieCard movie={movies[0]} />;
          <MovieCard movie={movies[1]} />;
          <MovieCard movie={movies[2]} />;
          <MovieCard movie={movies[3]} />;
          <MovieCard movie={movies[4]} />;
          <MovieCard movie={movies[5]} />;
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
