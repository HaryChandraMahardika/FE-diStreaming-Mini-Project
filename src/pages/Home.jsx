import React from 'react';
import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';
import { useAuth } from '../hooks/useAuth'; 

const Home = () => {
  const { isLoggedIn, checkingAuth, handleLogout } = useAuth();

  if (checkingAuth) {
    return <div className="min-h-screen bg-[#0f171e]" />;
  }

  return (
    <main className="min-h-screen bg-[#0f171e]">
      {isLoggedIn ? (
        <HomeUser onLogout={handleLogout} />
      ) : (
        <HomeGuest />
      )}
    </main>
  );
};

export default Home;