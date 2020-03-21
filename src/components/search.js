import React from 'react'
import Rating from './rating'


function SearchMovie(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search .."
        onChange={e => props.handleSearch(e.target.value)}
      />
      <Rating rate={props.minRating}  getRate={props.handleRating}   /> 
    </div>
  );
}
export default SearchMovie;