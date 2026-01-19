import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import api from "../services/api";

export const useMovieDetail = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getDetail = useCallback(async () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (!id || id === "undefined") return;

    try {
      setLoading(true);
      const res = await api.get(`movies/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      setMovie(res.data.data || res.data);
      setError(null);
    } catch (err) {
      console.error("Detail Fetch Error:", err);
      setError("Film tidak ditemukan atau koneksi bermasalah.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDetail();
    window.scrollTo(0, 0);
  }, [getDetail]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return { movie, loading, error, isLoggedIn, handleLogout };
};