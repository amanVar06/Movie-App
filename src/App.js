import React from "react";
import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
//creating a static variable  API_URL
const API_URL = "http://www.omdbapi.com/?apikey=7262c9bf";

//most importantly we want to fetch the data from this api
//as soon as our component loads
//we can use useEffect hook for that purpose

const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};
//we are going to use this as static data(movie1)
//just to render out something so that we know what jsx
//are we writing

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value="Superman"
          onChange={() => {}}
        />
        {/* input in react needs to have another few things which are crucial
        first is value attribute for now we have set it as a static string
        Superman, we will notice on webpage that this input immediately
        has the value of Superman but now if you want to type something
        in input search bar you won't able to because the value is statically
        set, so how to change it for that we have to have an onChange which
        accepts a callback function
        we are leaving it static for now but later on once we implement
        the state we're ging to make this action changable and
        that's going to recall our API  */}
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
                //  This is a placeholder image
              }
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
