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
      <main className="flex-grow px-6 md:px-16 py-10">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-3xl font-bold uppercase shadow-lg">
            {user.fullname?.[0] || user.username?.[0]}
          </div>

          <div>
            <h1 className="text-3xl font-black">{user.fullname}</h1>
            <p className="text-gray-400">@{user.username}</p>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-sm text-gray-500 mt-1">
              {user.watchlists?.length || 0} movies in watchlist
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 border-l-4 border-red-600 pl-4">
            My Watchlist
          </h2>

          {user.watchlists?.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {user.watchlists.map(
                (item) => item.movie && <MovieCard key={item.id} movie={item.movie} />
              )}
            </div>
          ) : (
            <div className="bg-[#1a242e] p-10 text-center text-gray-500 rounded-xl border border-gray-800">
              Watchlist kamu masih kosong.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;