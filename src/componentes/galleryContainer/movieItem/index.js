import React from "react";
import { Link } from "react-router-dom";

import './movieItem.css';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <img src={movie.image} alt="capa filme 1" />
      <div className="img-legend">
        <div className="text-legend">
          <h4>{movie.title}</h4>
          <h6>{movie.description}</h6>
        </div>
        <div className="more-details">
          <Link to="/filme">
            <span>+</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
