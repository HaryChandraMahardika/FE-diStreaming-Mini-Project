import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);

  const checkAuth = () => {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");
    const userData = localStorage.getItem("user") || sessionStorage.getItem("user");

    if (localToken || sessionToken) {
      setIsLoggedIn(true);
      if (userData) setUser(JSON.parse(userData));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
    setCheckingAuth(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    
    setIsLoggedIn(false);
    setUser(null);
    
    window.location.href = "/";
  };

  return { isLoggedIn, checkingAuth, user, handleLogout, checkAuth };
};