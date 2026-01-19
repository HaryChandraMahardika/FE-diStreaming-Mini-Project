import React from "react";
import { useProfile } from "../hooks/useProfile";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import MovieCard from "../component/MovieCard";

const Profile = () => {
  const { user, loading, handleLogout } = useProfile();

  if (loading) {
    return (
      <div className="bg-[#0f171e] min-h-screen text-white">
        <Navbar isLoggedIn={true} onLogout={handleLogout} />
        <div className="flex items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="bg-[#0f171e] min-h-screen text-white flex flex-col">
      <Navbar isLoggedIn={true} onLogout={handleLogout} />
      <main className="flex-grow px-4 md:px-16 py-6 md:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-8 mb-10 pb-8 border-b border-white/5">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-red-600 flex items-center justify-center text-3xl md:text-5xl font-black uppercase shadow-2xl border-4 border-[#1a242e]">
            {user.fullname?.[0] || user.username?.[0]}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-black tracking-tight">{user.fullname}</h1>
            <p className="text-gray-400 text-sm md:text-base font-medium">@{user.username}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
            
            <div className="mt-3 inline-block">
              <span className="bg-red-600/10 text-red-500 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-red-600/20 uppercase tracking-widest">
                {user.watchlists?.length || 0} movies in watchlist
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 border-l-4 border-red-600 pl-4 uppercase tracking-wider">
            My Watchlist
          </h2>

          {user.watchlists?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {user.watchlists.map(
                (item) => item.movie && <MovieCard key={item.id} movie={item.movie} />
              )}
            </div>
          ) : (
            <div className="bg-[#1a242e] p-10 text-center rounded-xl border border-dashed border-gray-700">
              <p className="text-gray-500 italic text-sm md:text-base">
                Watchlist kamu masih kosong. Mulai jelajahi film!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;