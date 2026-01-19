import React from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../component/MovieCard";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MovieList = () => {
  const { 
    movies, categories, isLoggedIn, pagination, loading, 
    filters, updateFilter, resetFilters, setSearchParams, handleLogout 
  } = useMovies();

  const hasActiveFilter = filters.search || filters.category_id || filters.release_year || filters.sort_by || filters.order;

  return (
    <div className="bg-[#0f171e] min-h-screen text-white">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <div className="px-6 md:px-16 pt-10">
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <input
            placeholder="Search title or year..."
            value={filters.search || filters.release_year}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-white w-full md:w-64"
            onKeyDown={(e) => {
              if (e.key === "Enter") setSearchParams({ query: e.target.value.trim() });
            }}
          />

          <select
            value={filters.category_id}
            onChange={(e) => updateFilter("category_id", e.target.value)}
            className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-white"
          >
            <option value="">All Category</option>
            {categories.map((c) => (
              <option key={c.category_id} value={c.category_id}>{c.category_name}</option>
            ))}
          </select>

          <select
            value={filters.sort_by}
            onChange={(e) => updateFilter("sort_by", e.target.value)}
            className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-white"
          >
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="rating">Rating</option>
            <option value="year">Release Year</option>
          </select>

          <select
            value={filters.order}
            onChange={(e) => updateFilter("order", e.target.value)}
            className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-white"
          >
            <option value="">Order By</option>
            <option value="asc">{filters.sort_by === "year" ? "Oldest First" : "ASC (A-Z)"}</option>
            <option value="desc">{filters.sort_by === "year" ? "Newest First" : "DESC (Z-A)"}</option>
          </select>

          {hasActiveFilter && (
            <button onClick={resetFilters} className="bg-red-600 px-4 py-2 rounded text-sm hover:bg-red-700 transition">
              Clear Filter ✕
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><p className="text-gray-500 italic">Loading movies...</p></div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieCard key={movie.movie_id} movie={movie} />)
            ) : (
              <p className="col-span-full text-center text-gray-500 py-10">No movies found.</p>
            )}
          </div>
        )}

        {pagination?.last_page > 1 && (
      <div className="flex justify-center items-center gap-6 mt-12 pb-10">
        <button
          disabled={filters.page === 1}
          onClick={() => updateFilter("page", filters.page - 1)} // Ini akan mentrigger update URL
          className="px-4 py-2 border border-gray-600 rounded disabled:opacity-30 hover:bg-gray-800 transition"
          >
          Prev
        </button>
          <span className="text-gray-400 font-medium">
            {pagination.current_page} / {pagination.last_page}
          </span>
             <button
              disabled={filters.page === pagination.last_page}
             onClick={() => updateFilter("page", filters.page + 1)} // Ini akan mentrigger update URL
             className="px-4 py-2 border border-gray-600 rounded disabled:opacity-30 hover:bg-gray-800 transition"
          >
               Next
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MovieList;