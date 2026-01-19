import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export const useMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    page: parseInt(searchParams.get("page")) || 1,
    search: searchParams.get("search") || "",
    category_id: searchParams.get("category_id") || "",
    release_year: searchParams.get("release_year") || "",
    sort_by: searchParams.get("sort_by") || "",
    order: searchParams.get("order") || "",
  });

  const fetchMovies = useCallback(async (currentFilters) => {
    try {
      setLoading(true);
      const res = await axios.get("/api/movies", { params: currentFilters });
      if (res.data.success) {
        setMovies(res.data.data);
        setPagination(res.data.meta);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setIsLoggedIn(!!token);

    axios.get("/api/categories")
      .then((res) => setCategories(res.data.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const newParams = {};
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        if (key === "page" && filters[key] === 1) return;
        newParams[key] = filters[key].toString();
      }
    });

    setSearchParams(newParams, { replace: true });
    fetchMovies(filters);
  }, [filters, fetchMovies, setSearchParams]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1,
    }));
  };

  const resetFilters = () => {
    setFilters({
      page: 1,
      search: "",
      category_id: "",
      release_year: "",
      sort_by: "",
      order: "",
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return { 
    movies, categories, isLoggedIn, pagination, 
    loading, filters, updateFilter, resetFilters, handleLogout 
  };
};