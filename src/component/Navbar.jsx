import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
    navigate(`/movies?search=${encodeURIComponent(value)}`);
  };

  return (
    <nav className="bg-[#0f171e] text-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <Link to="/" className="group">
          <p className="text-2xl md:text-3xl font-black italic tracking-tighter transition-transform duration-300 group-hover:scale-105">
            <span className="text-white">di</span>
            <span className="text-red-600">Streaming</span>
          </p>
        </Link>

        <div className="hidden md:flex space-x-6 font-bold text-gray-400">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"}>Home</NavLink>
          <NavLink to="/movies" className={({ isActive }) => isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"}>Movies</NavLink>
          <NavLink to="/category" className={({ isActive }) => isActive ? "text-white border-b-2 border-white pb-1" : "hover:text-white"}>Genre</NavLink>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <SearchBar onSearch={handleSearch} />

        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-blue-400 font-bold">Profile</Link>
            <button
              onClick={onLogout}
              className="bg-red-600 px-4 py-1 rounded font-bold hover:bg-red-700 hover:text-blue-400 cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login" className="font-bold hover:text-white">Log In</Link>
            <Link to="/register" className="bg-[#00a8e1] px-4 py-2 rounded font-bold text-black hover:bg-[#0087b5]">
              Join diStreaming
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;