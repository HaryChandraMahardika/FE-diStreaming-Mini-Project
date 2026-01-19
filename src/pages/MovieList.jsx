import React from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../component/MovieCard";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MovieList = () => {
  const { 
    movies, categories, isLoggedIn, pagination, loading, 
    filters, updateFilter, resetFilters, handleLogout 
  } = useMovies();
  const hasActiveFilter = Object.keys(filters).some(
    (key) => key !== "page" && filters[key] !== ""
  );

  return (
    <div className="bg-[#0f171e] min-h-screen text-white">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <div className="px-4 md:px-16 pt-6 md:pt-10">
        <div className="flex flex-col space-y-4 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 md:gap-4 items-center">
            <input
              placeholder="Search title..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-sm focus:border-red-600 outline-none w-full lg:w-64"
            />
            <select
              value={filters.category_id}
              onChange={(e) => updateFilter("category_id", e.target.value)}
              className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-sm outline-none focus:border-red-600"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c.category_id} value={c.category_id}>{c.category_name}</option>
              ))}
            </select>
            <select
              value={filters.sort_by}
              onChange={(e) => updateFilter("sort_by", e.target.value)}
              className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-sm outline-none focus:border-red-600"
            >
              <option value="">Sort By</option>
              <option value="title">Title</option>
              <option value="rating">Rating</option>
              <option value="year">Release Year</option>
            </select>
            <select
              value={filters.order}
              onChange={(e) => updateFilter("order", e.target.value)}
              className="bg-[#1a242e] border border-gray-600 px-3 py-2 rounded text-sm outline-none focus:border-red-600"
            >
              <option value="">Order</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            {hasActiveFilter && (
              <button 
                onClick={resetFilters} 
                className="bg-red-600 px-4 py-2 rounded text-sm font-bold hover:bg-red-700 transition"
              >
                Clear Filter ✕
              </button>
            )}
          </div>
        </div>
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 italic">Loading movies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieCard key={movie.movie_id} movie={movie} />)
            ) : (
              <div className="col-span-full text-center py-20 bg-[#1a242e] rounded-xl border border-dashed border-gray-700">
                <p className="text-gray-500">No movies found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {pagination?.last_page > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12 pb-10">
            <button
              disabled={filters.page === 1}
              onClick={() => updateFilter("page", filters.page - 1)}
              className="px-4 py-2 bg-[#1a242e] border border-gray-600 rounded-lg disabled:opacity-30"
            >
              &larr; Prev
            </button>
            <span className="font-bold">{pagination.current_page} / {pagination.last_page}</span>
            <button
              disabled={filters.page === pagination.last_page}
              onClick={() => updateFilter("page", filters.page + 1)}
              className="px-4 py-2 bg-[#1a242e] border border-gray-600 rounded-lg disabled:opacity-30"
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MovieList;