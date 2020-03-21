import React from 'react'
import Rating from "./rating"

function MovieCard({ movie : { title  , rate , image , year }  }) {
  const cardStyle = {
    backgroundImage: ` url(${image})  `
  };

  return (
    
    <article className="card card--1">
      <div className="card__info-hover"></div>
      <div className="card__img" style={cardStyle}></div>
      <a href="/" className="card_link">
        <div className="card__img--hover" style={cardStyle}></div>
      </a>
      <div className="card__info">
        <span className="card__category"><Rating rate={rate}  />     </span>
        <h3 className="card__title">{title} </h3>

        <span className="card__by">
          Relase on  
          <a href="/" className="card__author" title="author">
              {year}
          </a>
        </span>
      </div>
    </article>
  
  );
}
export default MovieCard;
