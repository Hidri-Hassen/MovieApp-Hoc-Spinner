import React from "react";
import MovieCard from "./movieCard";
import AddModal from "./modal";


function MovieList(props) {
  return (
    <div className="movie-list-container">
      {props.movieList.map((film, i) => (
        <MovieCard key={i} movie={film} />
      ))}
     
      <AddModal addMovie={props.addMovie} />
     
    </div>
  );
}

export default MovieList;