import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const register = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await axios.post('/api/register', formData);
      
      if (res.data.success) {
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        
        navigate('/', { replace: true });
        window.location.reload(); 
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      } else {
        alert("Terjadi kesalahan pada server. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, register, loading, errors };
};