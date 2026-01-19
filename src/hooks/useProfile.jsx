import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../services/api";

export const useProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/");
  }, [navigate]);

  const fetchMe = useCallback(async () => {
    try {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      const res = await api.get("me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        handleLogout();
      } else {
        console.error("Profile Fetch Error:", err);
      }
    } finally {
      setLoading(false);
    }
  }, [navigate, handleLogout]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  return { user, loading, handleLogout, fetchMe };
};