import React from 'react'

import "./MovieCard.css";
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  

    return (
        //console.log("MovieCard", movie),
        <div className="relative cursor-pointer text-white w-[200px] h-[300px] m-[15px] rounded-[10px] overflow-hidden 
            transition-all duration-300 ease-in-out
            hover:scale-105   hover:opacity-100 hover:shadow-sm hover:shadow-[#ffe400]">
                
            <Link to={ `https://www.themoviedb.org/movie/${movie.id}` } target="_blank" rel="noopener noreferrer">
            {/* <a href={ `https://www.themoviedb.org/movie/${movie.id}` } target="_blank" rel="noopener noreferrer"> */}

                <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"}
                    alt="Movie_Poster"
                    className="movie_poster w-full h-full object-cover brightness-75" />


                {/* <div className='movie_details absolute bottom-0 left-0 w-full p-[10px] bg-gradient-to-t 'from-black to-transparent'> */}
                <div className='movie_details opacity-0 absolute top-0 w-full h-full p-[10px] flex flex-col justify-end 
                                transition-all duration-500 ease-in-out
                                bg-gradient-to-t from-black to-transparent hover:opacity-100'
                >

                    <h3 className='movie_details_heading text-[16px] font-bold mb-[5px]'>
                        {movie.title}
                    </h3>

                    <div className="movie_date_rate align_center justify-between text-[12px] text-[#ffee40] font-semibold mb-[5px] ">
                        <p className='movie_card_description'>{movie.release_date}</p>
                        <p>{movie.vote_average.toString().slice(0,3)}🌟</p>
                    </div>

                    <p className='movie_description font-medium text-[12px] italic text-white'>
                        {movie.overview.slice(0,100)}....
                    </p>

                </div>
            {/* </a> */}
            </Link>

        </div>
    )
}

export default MovieCard


// import React from "react";
// import "./MovieCard.css";

// const MovieCard = () => {
//   return (
//     <div className="w-[220px] bg-[#1b1b1b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

//       <a href="#">
//         <img
//           src="https://rukmini1.flixcart.com/image/1500/1500/jr9iwsw0/poster/j/a/z/medium-tyrion-lannister-game-of-thrones-posters-for-room-office-original-imafd3pesbfhq4sr.jpeg?q=70"
//           alt="Movie Poster"
//           className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-110"
//         />
//       </a>

//       <div className="p-4">
//         <h3 className="text-lg font-bold text-white truncate">
//           Game of Thrones
//         </h3>

//         <div className="flex justify-between text-sm text-gray-300 mt-2">
//           <span>⭐ 8.0</span>
//           <span>20-10-2026</span>
//         </div>

//         <p className="text-sm text-gray-400 mt-3 line-clamp-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Quisquam, quod.
//         </p>
//       </div>

//     </div>
//   );
// };

// export default MovieCard;