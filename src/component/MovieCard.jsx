import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const movieId = movie.movie_id || movie.id;

  return (
    <Link 
      to={`/movie-detail/${movieId}`} 
      className="group relative bg-[#141414] rounded-lg md:rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:z-30 border border-white/5 hover:border-red-600/50 cursor-pointer block"
    >

      <div className="aspect-[2/3] relative overflow-hidden">
        <img 
          src={movie.poster_url} 
          alt={movie.movie_name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block hidden" />
      </div>

      <div className="p-2 md:p-4">
        <h3 className="font-bold text-[12px] md:text-sm truncate text-white group-hover:text-red-600 transition-colors">
          {movie.movie_name}
        </h3>
        
        <div className="flex items-center justify-between mt-1 md:mt-2">
 
          <span className="text-[9px] md:text-[10px] text-gray-400 md:text-gray-500 font-bold px-1.5 py-0.5 bg-white/5 rounded">
            {movie.release_year}
          </span>

          <div className="flex items-center text-yellow-500 text-[10px] md:text-xs font-bold">
            <span className="mr-0.5 md:mr-1">⭐</span>
            {movie.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;