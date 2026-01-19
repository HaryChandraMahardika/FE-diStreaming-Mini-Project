import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../services/api";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [form, setForm] = useState({
    usernameOrEmail: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const login = async (e) => {
    if (e) e.preventDefault(); 
    setLoading(true);
    setError("");

    try {
      const payload = {
        login: form.usernameOrEmail,
        password: form.password,
      };

      const res = await api.post("/login", payload);
      const { token, user } = res.data.data;

      if (token) {
        const storage = form.remember ? localStorage : sessionStorage;
        storage.setItem("token", token);
        storage.setItem("user", JSON.stringify(user));

        navigate("/", { replace: true });
        window.location.reload(); 
      }
    } catch (err) {
      const serverError = err.response?.data;
      const message = serverError?.errors?.login?.[0] || 
                      serverError?.message || 
                      "Login gagal, periksa koneksi Anda.";
      
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { form, handleChange, login, loading, error };
};