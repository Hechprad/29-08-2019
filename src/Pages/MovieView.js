import React, { useState, useEffect } from 'react';
import ComponenteHeader from '../componentes/header/ComponenteHeader.js';
import ComponenteFixedMenu from '../componentes/fixedMenu/ComponentFixedMenu.js';
import { movies } from '../componentes/mock/index.js'

/** match vem de props */
const MovieView = ({ match }) => {
    const [ movie, setMovie ] = useState(null);

    useEffect(() => {
        const filtered = movies.filter(
            movie => movie.id === parseInt(match.params.abacaxi)
            )[0];
        setMovie(filtered);
    }, [match.params.abacaxi]);

    console.log(movie);
    return (
        <>
            <ComponenteFixedMenu />
            <ComponenteHeader />

            {/**criar detalhe do filme */}
            <div>
                <img src={movie ?  movie.image : ""} alt="image filme" />
            </div>
        </>
        );
}

export default MovieView;

// const MovieDetail = ({ movie }) => {
//     return movie ? ( //valider se tem filme
//       <div className="container">
//         <img src={movie.image} alt={movie.title} />
//         <div>
//           <h2>{movie.title}</h2>
//           <p>{movie.description}</p>
//           <p>
//             <b>Diretor: </b>
//             {movie.director}
//           </p>
//           <p>
//             <b>Artistas: </b>
//             {movie.cast.map(artist => (
//               <span key={artist.id}>
//                 {`${artist.firstName} ${artist.lastName}`} /{" "}
//               </span>
//             ))}
//           </p>
//           <p>
//             <b>Ano de estréia: </b>
//             {movie.releaseYear}
//           </p>
//           <p>
//             <b>Gêneros: </b>
//             {movie.genres.map(genre => (
//               <span key={genre.id}> {genre.description} /</span>
//             ))}
//           </p>
//         </div>
//       </div>
//     ) : (
//       <div>Filme selecionado não encontrado</div>
//     );
//   };
  
//   export default MovieDetail;
  