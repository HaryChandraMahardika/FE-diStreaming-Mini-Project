import React from 'react';
import { Link } from 'react-router-dom'; 

const Hero = ({ movie }) => {
  if (!movie) return <div className="h-[80vh] bg-[#0a0a0a]" />;

  const movieId = movie.movie_id || movie.id;

  return (
    <div className="relative h-[80vh] md:h-[85vh] w-full flex items-center px-6 md:px-12 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img 
          src={movie.poster_url} 
          className="w-full h-full object-cover opacity-40 grayscale-[0.5]" 
          alt="banner" 
        />
        {/* Gradient Overlay: Di mobile lebih pekat dari bawah ke atas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 md:via-[#0a0a0a]/60 md:bg-gradient-to-r md:from-[#0a0a0a] md:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl space-y-4 md:space-y-6">
        <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
          Featured Movie
        </span>
        
        {/* Font Size Adaptif: 3xl di mobile, 7xl di desktop */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white leading-tight italic uppercase tracking-tighter">
          {movie.movie_name}
        </h1>
        
        {/* Deskripsi: line-clamp-2 di mobile agar hemat tempat */}
        <p className="text-gray-400 text-sm md:text-lg line-clamp-2 md:line-clamp-3 leading-relaxed max-w-lg">
          {movie.description || "Tonton petualangan seru ini hanya di platform kami."}
        </p>
        
        {/* Buttons: Bertumpuk di mobile kecil, berjajar di tablet ke atas */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
          <Link 
            to={`/movie-detail/${movieId}`} 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 text-center inline-block"
          >
            Watch Now
          </Link>
          
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold backdrop-blur-md transition-all text-center">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;