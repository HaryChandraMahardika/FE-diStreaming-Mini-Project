import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '../hooks/useMovieDetail';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const MovieDetail = () => {
  const { id } = useParams();
  const { movie, loading, error, isLoggedIn, handleLogout } = useMovieDetail(id);

  if (loading) return (
    <div className="bg-[#0f171e] min-h-screen text-white flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error) return (
    <div className="bg-[#0f171e] min-h-screen text-white flex flex-col">
       <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
       <div className="flex-grow flex items-center justify-center px-6 text-center">
         <p className="text-xl text-gray-400">{error}</p>
       </div>
       <Footer />
    </div>
  );

  return (
    <div className="bg-[#0f171e] min-h-screen text-white flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      
      <main className="flex-grow">
        {movie && (
          <div className="relative">
            {/* Background Image Container - Height disesuaikan untuk Mobile (min-h-[80vh]) */}
            <div className="relative min-h-[85vh] md:h-[85vh] w-full flex items-end">
              <img 
                src={movie.poster_url} 
                className="absolute inset-0 w-full h-full object-cover opacity-30" 
                alt={movie.movie_name}
              />
              
              {/* Overlay Gradient - Diperkuat untuk Mobile agar teks terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f171e] via-[#0f171e]/80 md:via-[#0f171e]/60 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="relative w-full z-10 p-6 md:p-16">
                <div className="container mx-auto">
                  {/* Title - Responsive size: 3xl di mobile, 7xl di desktop */}
                  <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 uppercase italic tracking-tighter leading-[0.9] md:leading-none">
                    {movie.movie_name}
                  </h1>
                  
                  {/* Metadata Row - flex-wrap untuk layar sempit */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-6">
                    <span className="text-yellow-400 font-bold text-lg md:text-xl flex items-center">
                      ⭐ {movie.rating}
                    </span>
                    <span className="text-gray-400 font-bold text-sm md:text-base">
                      {movie.release_year}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {movie.categories?.map((cat) => (
                        <span key={cat.category_id} className="bg-red-600 px-2.5 py-1 rounded text-[9px] md:text-[10px] font-black uppercase tracking-wider">
                          {cat.category_name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description - Ukuran font lebih kecil di mobile agar tidak penuh */}
                  <p className="text-gray-300 text-sm md:text-lg max-w-3xl leading-relaxed mb-8 line-clamp-6 md:line-clamp-none">
                    {movie.description}
                  </p>

                  {/* Action Button - Full width di HP kecil agar mudah diklik */}
                  <button className="w-full sm:w-auto bg-white text-black px-10 py-3.5 rounded font-black uppercase hover:bg-red-600 hover:text-white transition-all shadow-lg active:scale-95">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
};

export default MovieDetail;