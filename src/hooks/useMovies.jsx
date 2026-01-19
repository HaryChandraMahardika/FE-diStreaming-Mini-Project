import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import api from "../services/api";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = parseInt(searchParams.get("page")) || 1;
  const initialSearch = searchParams.get("query") || "";

  const [filters, setFilters] = useState({
    page: initialPage,
    search: initialSearch,
    category_id: "",
    release_year: "",
    sort_by: "",
    order: "",
  });

  const fetchMovies = useCallback(async (currentFilters) => {
    try {
      setLoading(true);
      const res = await api.get("movies", {
        params: currentFilters,
      });
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

    api.get("categories")
      .then((res) => setCategories(res.data.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const q = searchParams.get("query") || "";
    const p = parseInt(searchParams.get("page")) || 1;
    const isYear = /^\d{4}$/.test(q);

    setFilters((prev) => ({
      ...prev,
      search: isYear ? "" : q,
      release_year: isYear ? q : "",
      page: p,
    }));
  }, [searchParams]);

  useEffect(() => {
    const newParams = {};
    if (filters.search) newParams.query = filters.search;
    if (filters.release_year) newParams.query = filters.release_year;
    if (filters.page > 1) newParams.page = filters.page;
    
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

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  const resetFilters = () => {
    setSearchParams({});
    setFilters({
      page: 1,
      search: "",
      category_id: "",
      release_year: "",
      sort_by: "",
      order: "",
    });
  };

  return { 
    movies, 
    categories, 
    isLoggedIn, 
    pagination, 
    loading, 
    filters, 
    updateFilter, 
    resetFilters, 
    setSearchParams, 
    handleLogout 
  };
};