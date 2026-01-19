import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222] border-t border-black/40 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">

        <p className="text-2xl md:text-3xl font-black italic tracking-tighter transition-transform duration-300 group-hover:scale-105">
            <span className="text-white">di</span>
            <span className="text-red-600">Streaming</span>
          </p>

        <div className="flex flex-wrap justify-center gap-6 text-[#00a8e1] text-sm">
          <a href="#" className="hover:underline">Terms and Privacy Notice</a>
          <a href="#" className="hover:underline">Send us feedback</a>
          <a href="#" className="hover:underline">Help</a>
        </div>

        <div className="text-gray-400 text-sm">
          © 2026, diStreaming.com, Inc. or its affiliates
        </div>

      </div>
    </footer>
  );
};

export default Footer;