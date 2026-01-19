import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { form, handleChange, login, loading, error } = useLogin();

  return (
    <div className="min-h-screen bg-[#0f171e] flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-md bg-[#1a242e] border border-gray-700 rounded-lg p-10 shadow-2xl relative">
        
        <button 
          type="button" 
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2 z-10"
        >
          <span className="text-xl font-bold">✕</span>
        </button>

        <h1 className="text-3xl font-bold text-white mb-2">Sign In</h1>
        <p className="text-gray-400 text-sm">Masuk untuk menikmati tayangan favorit Anda.</p>

        <form onSubmit={login} className="mt-8 space-y-5">
          <div className="space-y-1">
            <label className="text-gray-300 text-sm font-semibold">Email atau Username</label>
            <input
              required
              name="usernameOrEmail"
              type="text"
              value={form.usernameOrEmail}
              onChange={handleChange}
              placeholder="Masukkan email/username"
              className="w-full bg-[#252e39] border border-gray-600 rounded px-4 py-3 text-white focus:border-[#00a8e1] outline-none transition"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-300 text-sm font-semibold">Password</label>
            <input
              required
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-[#252e39] border border-gray-600 rounded px-4 py-3 text-white focus:border-[#00a8e1] outline-none transition"
            />
          </div>

          <div className="flex justify-between items-center text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-[#00a8e1]"
              />
              Ingat Saya
            </label>
            <span className="hover:text-[#00a8e1] cursor-pointer transition">Lupa password?</span>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 p-3 rounded text-red-500 text-xs text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00a8e1] hover:bg-[#008dbd] py-3 rounded font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? "Memproses..." : "Sign In"}
          </button>

          <p className="text-center text-gray-400 text-sm pt-4">
            Baru di diStreaming?{" "}
            <Link to="/register" className="text-[#00a8e1] hover:underline">
              Daftar Sekarang
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;