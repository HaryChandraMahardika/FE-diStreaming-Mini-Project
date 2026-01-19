import { useState, useEffect } from "react";
import axios from "axios";

const useCategory = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "/api/categories?all=true"
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