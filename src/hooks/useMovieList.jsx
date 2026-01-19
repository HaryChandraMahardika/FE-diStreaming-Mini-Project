import { useState, useCallback } from 'react';
import axios from "axios";
import api from "../services/api";


export const useMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async (params = { all: true }) => {
    try {
      setLoading(true);
      const response = await api.get('/movies', { params });
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