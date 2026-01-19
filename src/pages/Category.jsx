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

      <main className="flex-grow pt-15 px-6 md:px-16 pb-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter border-l-4 border-red-600 pl-4">
            {!genreName ? "Semua Kategori" : `Genre: ${genreName}`}
          </h1>

          {genreName && (
            <Link
              to="/category"
              className="text-red-500 hover:text-red-400 font-bold text-sm uppercase transition-colors"
            >
              &larr; Kembali ke Daftar Kategori
            </Link>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-48 bg-[#1a242e] animate-pulse rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {!genreName ? (
              genres.map((genre) => (
                <Link
                  key={genre.category_id}
                  to={`/category/${genre.category_name.toLowerCase()}`}
                  className="bg-[#1a242e] p-8 rounded-xl border border-white/5 text-center hover:bg-[#1f2b38] hover:border-red-600/50 hover:scale-105 transition-all duration-300 group shadow-lg"
                >
                  <h3 className="text-xl font-black uppercase tracking-wider group-hover:text-red-600 transition-colors">
                    {genre.category_name}
                  </h3>
                  <p className="text-gray-500 text-[10px] mt-2 font-bold uppercase tracking-widest">
                    {genre.movies_count || genre.movies?.length || 0} Movies
                  </p>
                </Link>
              ))
            ) : selectedCategory?.movies?.length > 0 ? (
              selectedCategory.movies.map((movie) => (
                <MovieCard key={movie.movie_id} movie={movie} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-[#1a242e] rounded-xl border border-dashed border-gray-700">
                <p className="text-gray-500 italic">
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