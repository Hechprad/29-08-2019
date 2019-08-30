import React from "react";

import "./ComponentGalleryContainer.css";
import MovieItem from './movieItem/index';
import { movies } from '../mock/index';
/**
 * reactjs = biblioteca UI(userinterface) 
 * 
 * 
 * 
 * 
 * */

const ComponentGalleryContainer = () => {

  return (
    <div className="gallery-container">
      {movies.map( movie => (
          <MovieItem key={movie.id} movie={movie}/>
      ))}
    </div>
  );
};
export default ComponentGalleryContainer;
