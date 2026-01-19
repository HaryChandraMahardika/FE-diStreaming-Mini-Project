import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const navigate = useNavigate();
  const { formData, handleChange, register, loading, errors } = useRegister();

  return (
    <div className="min-h-screen bg-[#0f171e] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#1a242e] p-8 rounded-2xl shadow-2xl border border-white/5 relative">
        <button 
          type="button"
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2 z-10"
        >
          <span className="text-xl font-bold">✕</span>
        </button>

        <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2 mt-2">Create Account</h2>
        <p className="text-gray-400 text-sm mb-8">Daftar untuk mulai menonton film favoritmu.</p>

        <form onSubmit={register} className="space-y-5">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className={`w-full bg-[#0f171e] border ${errors.fullname ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-xl mt-1 focus:outline-none focus:border-red-600 transition-all`}
              placeholder="Nama Lengkap"
              required
            />
            {errors.fullname && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullname[0]}</p>}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full bg-[#0f171e] border ${errors.username ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-xl mt-1 focus:outline-none focus:border-red-600 transition-all`}
              placeholder="username_anda"
              required
            />
            {errors.username && <p className="text-red-500 text-xs mt-1 ml-1">{errors.username[0]}</p>}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-[#0f171e] border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-xl mt-1 focus:outline-none focus:border-red-600 transition-all`}
              placeholder="example@mail.com"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email[0]}</p>}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full bg-[#0f171e] border ${errors.password ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-xl mt-1 focus:outline-none focus:border-red-600 transition-all`}
              placeholder="••••••••"
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password[0]}</p>}
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full bg-[#0f171e] border border-gray-700 text-white px-4 py-3 rounded-xl mt-1 focus:outline-none focus:border-red-600 transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-4 rounded-xl shadow-lg shadow-red-600/20 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Register Now'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          Sudah punya akun? <Link to="/login" className="text-red-500 font-bold hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;