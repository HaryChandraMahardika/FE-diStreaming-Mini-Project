import { useState, useCallback } from 'react';
import axios from "axios";


export const useMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async (params = { all: true }) => {
    try {
      setLoading(true);
      const response = await axios.get('/api/movies', { params });
      if (response.data.success) {
        setMovies(response.data.data);
      }
    } catch (err) {
      console.error("Gagal mengambil data film:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, loading, fetchMovies };
};