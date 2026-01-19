import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu mobile

  const handleSearch = (value) => {
    setSearch(value);
    navigate(`/movies?search=${encodeURIComponent(value)}`);
  };

  return (
    <nav className="bg-[#0f171e] text-white sticky top-0 z-50 shadow-lg">
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        
        {/* LEFT SIDE: Logo & Desktop Menu */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Button Hamburger (Hanya muncul di Mobile) */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          <Link to="/" className="group">
            <p className="text-xl md:text-3xl font-black italic tracking-tighter transition-transform duration-300 group-hover:scale-105">
              <span className="text-white">di</span>
              <span className="text-red-600">Streaming</span>
            </p>
          </Link>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-6 font-bold text-gray-400">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"}>Home</NavLink>
            <NavLink to="/movies" className={({ isActive }) => isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"}>Movies</NavLink>
            <NavLink to="/category" className={({ isActive }) => isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"}>Genre</NavLink>
          </div>
        </div>

        {/* RIGHT SIDE: Search & Auth */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* SearchBar (Sekarang otomatis menyesuaikan lebar di mobile via SearchBar component kamu) */}
          <SearchBar onSearch={handleSearch} />

          {isLoggedIn ? (
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link to="/profile" className="hidden sm:block hover:text-blue-400 font-bold text-sm md:text-base">Profile</Link>
              <button
                onClick={onLogout}
                className="bg-red-600 px-3 py-1 md:px-4 md:py-1 rounded font-bold hover:bg-red-700 text-xs md:text-base transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link to="/login" className="font-bold hover:text-white text-xs md:text-base">Log In</Link>
              <Link to="/register" className="bg-[#00a8e1] px-3 py-1.5 md:px-4 md:py-2 rounded font-bold text-black hover:bg-[#0087b5] text-xs md:text-base">
                Join
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1b2530] border-t border-gray-700 px-6 py-4 flex flex-col space-y-4 font-bold">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500">Home</NavLink>
          <NavLink to="/movies" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500">Movies</NavLink>
          <NavLink to="/category" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500">Genre</NavLink>
          {isLoggedIn && (
            <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Profile</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;