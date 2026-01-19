import { useState, useCallback, useEffect } from "react";
import axios from "axios";

export const useHomeUser = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHomeMovies = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/movies?all=true");
      if (res.data.success) {
        setMovies(res.data.data);
      }
    } catch (err) {
      console.error("Home fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHomeMovies();
  }, [fetchHomeMovies]);

  return { movies, loading };
};