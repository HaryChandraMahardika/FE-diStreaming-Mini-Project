import { useState, useEffect } from "react";
import axios from "axios";
import api from "../services/api";

const useCategory = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get(
          "/categories?all=true"
        );
        if (res.data.success) {
          setGenres(res.data.data);
        }
      } catch (err) {
        console.error("Gagal memuat kategori:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { genres, loading };
};

export default useCategory;