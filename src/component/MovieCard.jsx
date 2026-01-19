import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const movieId = movie.movie_id || movie.id;

  return (
    <Link 
      to={`/movie-detail/${movieId}`} 
      className="group relative bg-[#141414] rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:z-30 border border-white/5 hover:border-red-600/50 cursor-pointer block"
    >
      <div className="aspect-[2/3] relative">
        <img 
          src={movie.poster_url} 
          alt={movie.movie_name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-sm truncate text-white group-hover:text-red-600 transition-colors">
          {movie.movie_name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-gray-500 font-bold px-2 py-0.5 bg-white/5 rounded">
            {movie.release_year}
          </span>
          <div className="flex items-center text-yellow-500 text-xs font-bold">
            ⭐ {movie.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;