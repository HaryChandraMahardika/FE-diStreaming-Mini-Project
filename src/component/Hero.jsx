import React from 'react';
import { Link } from 'react-router-dom'; 

const Hero = ({ movie }) => {
  if (!movie) return <div className="h-[80vh] bg-[#0a0a0a]" />;

  const movieId = movie.movie_id || movie.id;

  return (
    <div className="relative h-[85vh] w-full flex items-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={movie.poster_url} className="w-full h-full object-cover opacity-40 grayscale-[0.5]" alt="banner" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl space-y-6">
        <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Featured Movie
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight italic uppercase tracking-tighter">
          {movie.movie_name}
        </h1>
        <p className="text-gray-400 text-lg line-clamp-3 leading-relaxed">
          {movie.description || "Tonton petualangan seru ini hanya di platform kami."}
        </p>
        
        <div className="flex gap-4 pt-4">
          <Link 
            to={`/movie-detail/${movieId}`} 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 inline-block"
          >
            Watch Now
          </Link>
          
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold backdrop-blur-md transition-all">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;