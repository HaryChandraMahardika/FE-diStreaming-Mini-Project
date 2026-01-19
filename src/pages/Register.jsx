import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const navigate = useNavigate();
  const { formData, handleChange, register, loading, errors } = useRegister();

  return (
    /* py-10 ditambahkan agar form tidak terpotong di layar HP yang pendek saat scroll */
    <div className="min-h-screen bg-[#0f171e] flex items-center justify-center px-4 py-10 md:py-14 font-sans">
      
      {/* Responsive Perbaikan: 
        1. p-6 di mobile, p-10 di desktop.
        2. max-w-md menjaga lebar tetap ideal.
      */}
      <div className="max-w-md w-full bg-[#1a242e] p-6 md:p-10 rounded-2xl shadow-2xl border border-white/5 relative">
        
        {/* Tombol Close disesuaikan posisinya di mobile */}
        <button 
          type="button"
          onClick={() => navigate('/')}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-white transition-colors p-2 z-10"
        >
          <span className="text-xl font-bold">✕</span>
        </button>

        <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-1 mt-2">
          Create Account
        </h2>
        <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">
          Daftar untuk mulai menonton film favoritmu.
        </p>

        <form onSubmit={register} className="space-y-4 md:space-y-5">
          {/* Reusable Input Group Logic */}
          {[
            { label: 'Full Name', name: 'fullname', type: 'text', placeholder: 'Nama Lengkap' },
            { label: 'Username', name: 'username', type: 'text', placeholder: 'username_anda' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'example@mail.com' },
            { label: 'Password', name: 'password', type: 'password', placeholder: '••••••••' },
            { label: 'Confirm Password', name: 'password_confirmation', type: 'password', placeholder: '••••••••' }
          ].map((field) => (
            <div key={field.name}>
              <label className="text-[10px] md:text-xs font-bold text-gray-400 uppercase ml-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`w-full bg-[#0f171e] border ${
                  errors[field.name] ? 'border-red-500' : 'border-gray-700'
                } text-white px-4 py-3 text-sm rounded-xl mt-1 focus:outline-none focus:border-red-600 transition-all`}
                placeholder={field.placeholder}
                required
              />
              {errors[field.name] && (
                <p className="text-red-500 text-[10px] mt-1 ml-1">{errors[field.name][0]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-3.5 md:py-4 rounded-xl shadow-lg shadow-red-600/20 transition-all transform hover:scale-[1.01] active:scale-95 disabled:opacity-50 text-sm md:text-base mt-2"
          >
            {loading ? 'Processing...' : 'Register Now'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs md:text-sm mt-6 md:mt-8">
          Sudah punya akun? <Link to="/login" className="text-red-500 font-bold hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;