import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import MovieCard from "../component/MovieCard";
import useCategory from "../hooks/useCategory";

const Category = () => {
  const { genreName } = useParams();
  const { genres, loading } = useCategory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  const selectedCategory = genres.find(
    (g) => g.category_name.toLowerCase().trim() === genreName?.toLowerCase().trim()
  );

  return (
    <div className="bg-[#0f171e] min-h-screen flex flex-col text-white">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        onSearch={(q) => console.log(q)} 
      />

      <main className="flex-grow pt-10 md:pt-16 px-4 md:px-16 pb-20">
        {/* Header Section: Responsif Stack */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter border-l-4 border-red-600 pl-4">
            {!genreName ? "Semua Kategori" : `Genre: ${genreName}`}
          </h1>

          {genreName && (
            <Link
              to="/category"
              className="text-red-500 hover:text-red-400 font-bold text-xs md:text-sm uppercase transition-colors flex items-center"
            >
              <span className="mr-2">←</span> Kembali ke Daftar Kategori
            </Link>
          )}
        </div>

        {loading ? (
          /* Skeleton Loader: Responsif Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-40 md:h-48 bg-[#1a242e] animate-pulse rounded-xl"></div>
            ))}
          </div>
        ) : (
          /* Content Grid: 2 Kolom di HP, 5 di Desktop */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {!genreName ? (
              genres.map((genre) => (
                <Link
                  key={genre.category_id}
                  to={`/category/${genre.category_name.toLowerCase()}`}
                  className="bg-[#1a242e] p-6 md:p-8 rounded-xl border border-white/5 text-center hover:bg-[#1f2b38] hover:border-red-600/50 hover:scale-105 transition-all duration-300 group shadow-lg flex flex-col justify-center"
                >
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-wider group-hover:text-red-600 transition-colors truncate">
                    {genre.category_name}
                  </h3>
                  <p className="text-gray-500 text-[9px] md:text-[10px] mt-2 font-bold uppercase tracking-widest">
                    {genre.movies_count || genre.movies?.length || 0} Movies
                  </p>
                </Link>
              ))
            ) : selectedCategory?.movies?.length > 0 ? (
              selectedCategory.movies.map((movie) => (
                <MovieCard key={movie.movie_id} movie={movie} />
              ))
            ) : (
              /* Empty State */
              <div className="col-span-full text-center py-16 md:py-20 bg-[#1a242e] rounded-xl border border-dashed border-gray-700 px-6">
                <p className="text-gray-500 italic text-sm md:text-base">
                  Tidak ada film ditemukan dalam kategori "{genreName}".
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Category;