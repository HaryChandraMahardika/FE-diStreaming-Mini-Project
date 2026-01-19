import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col-reverse md:flex-row pt-14 bg-black">

      <div className="w-full md:w-[45%] bg-black flex flex-col justify-center px-6 md:px-16 py-10 md:py-0 space-y-6 z-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          Welcome to diStreaming
        </h1>
        <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-lg">
          Watch award-winning Originals and thousands of movies and TV shows. 
          Starting from IDR 29,000/month. Save 29% with an Annual Plan at IDR 299,000/year.
        </p>
        
        <div className="flex flex-col space-y-3 md:space-y-4 pt-2 md:pt-4 w-full max-w-sm">
          <button className="bg-white text-black py-3 rounded font-bold text-base md:text-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out transform active:scale-95">
            Join diStreaming at IDR 29,000/month
          </button>

          <div className="text-center text-gray-400 font-bold text-sm">or</div>

          <button className="bg-white text-black py-3 rounded font-bold text-base md:text-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out transform active:scale-95">
            IDR 299,000/year
          </button>

          <button className="bg-white text-black py-3 rounded font-bold text-base md:text-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out transform active:scale-95">
            Browse videos first
          </button>

          <p className="text-white text-sm md:text-base mt-2 font-medium text-center md:text-left">
            Already a diStreaming member? Sign in{' '}
            <Link to="/login" className="underline hover:text-blue-400 transition cursor-pointer">
              here
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full md:w-[55%] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://m.media-amazon.com/images/G/65/digital/video/merch/2025/xsite/1440x675_MLP_ID_jan.jpg')` 
          }}
        >
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-48"></div>
      </div>
      </div>
    </div>
  );
};

export default Banner;