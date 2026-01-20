import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = ({ placeholder = "Search..." }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    setQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    
    navigate(`/movies?search=${encodeURIComponent(trimmed)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative block">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="
          bg-[#252e39] 
          border border-[#425265] 
          text-white 
          text-xs md:text-sm 
          pl-9 pr-3 md:pl-10 md:pr-4 
          py-1.5 
          rounded 
          focus:outline-none 
          focus:border-white 
          focus:bg-[#313d4b]
          transition-all 
          duration-300
          w-28 sm:w-48 md:w-64 
          focus:w-36 sm:focus:w-64 md:focus:w-80
        "
      />
    </form>
  );
};

export default SearchBar;