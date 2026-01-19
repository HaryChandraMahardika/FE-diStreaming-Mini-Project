import React from 'react';
import { Link } from 'react-router-dom';

const DownloadBanner = () => {
  return (
    <div className="relative min-h-[500px] md:h-[600px] w-full flex flex-col md:flex-row border-t border-gray-900 overflow-hidden bg-black">
      
      {/* Bagian Teks */}
      <div className="w-full md:w-[50%] bg-black flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 space-y-6 z-20 order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-center md:text-left">
          Download and go
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left">
          Watch offline on the diStreaming app when you download titles to your iPhone, iPad, Tablet, or Android device.
        </p>
        
        <div className="pt-2 w-full flex justify-center md:justify-start">
          <Link 
            to="/register" 
            className="inline-block bg-white text-black px-8 py-3 rounded font-bold text-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out transform text-center w-full sm:w-auto"
          >
            Sign up for diStreaming
          </Link>
        </div>
      </div>

      {/* Bagian Gambar */}
      <div className="w-full h-[300px] md:h-auto md:w-[50%] relative order-1 md:order-2">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-right"
          style={{ 
            backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Dowlnoad_Magnet_UPDATED._CB1551124792_.jpg')`,
          }}
        >
          {/* Overlay Gradient: Di mobile memudar ke bawah (hitam), di desktop memudar ke kanan */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent md:via-black/40 md:bg-gradient-to-r md:from-black to-transparent w-full z-10"></div>
        </div>
      </div>

    </div>
  );
};

export default DownloadBanner;