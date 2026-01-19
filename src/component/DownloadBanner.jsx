import React from 'react';
import { Link } from 'react-router-dom';

const DownloadBanner = () => {
  return (
    <div className="relative h-[600px] w-full flex flex-col md:flex-row border-t border-gray-900 overflow-hidden bg-black">
      
      <div className="w-full md:w-[50%] bg-black flex flex-col justify-center px-8 md:px-16 lg:px-24 space-y-6 z-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Download and go
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md">
          Watch offline on the diStreaming app when you download titles to your iPhone, iPad, Tablet, or Android device.
        </p>
        
        <div className="pt-2 w-full max-w-xs">
          <Link 
            to="/register" 
            className="inline-block bg-white text-black px-8 py-3 rounded font-bold text-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out transform text-center w-full md:w-auto"
          >
            Sign up for diStreaming
          </Link>
        </div>
      </div>

      
      <div className="w-full md:w-[50%] relative">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover md:bg-right"
            style={{ 
            backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Dowlnoad_Magnet_UPDATED._CB1551124792_.jpg')`,
            backgroundPosition: 'right center'
          }}
        >
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent w-full z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;