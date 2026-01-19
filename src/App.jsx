import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Profile from './pages/Profile';
import Category from './pages/Category';
import ProtectedRoute from './route/ProtectedRoute'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:genreName" element={<Category />} />

        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/movie-detail/:id" 
          element={
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;