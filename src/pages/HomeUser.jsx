import React from 'react';
import { useHomeUser } from '../hooks/useHomeUser';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import PopularWeek from '../component/PopularWeek';
import JustRelease from '../component/JustRelease';
import Footer from '../component/Footer';

const HomeUser = ({ onLogout }) => {
  const { movies, loading } = useHomeUser();

  if (loading) return (
    <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Navbar onLogout={onLogout} isLoggedIn={true} />
      
      {movies.length > 0 && <Hero movie={movies[0]} />}

      <main className="px-6 md:px-12 relative z-20">
        <div className="space-y-12 py-10">
          <JustRelease movies={movies} />
          <PopularWeek movies={movies} />
        </div>
      </main>
      
      <Footer/>
    </div>
  );
};

export default HomeUser;