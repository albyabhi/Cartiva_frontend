import React from 'react';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white px-4 py-8">
      
      {/* Main Content */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4">
          <img 
            src={logo} 
            alt="Cartiva Deals Logo" 
            className="w-full h-full object-cover" 
          />
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Cartiva Deals</h1>
        <p className="text-gray-600 text-center max-w-md">
          Discover handpicked Amazon deals, shared instantly through our Telegram bot and Pinterest. 
          Powered by automation, built for smart savings.
        </p>

        <div className="mt-6 flex gap-4">
          <a 
            href="https://t.me/Cartiva_offers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Join Telegram
          </a>
          <a 
            href="https://www.pinterest.com/CartivaProducts/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Visit Pinterest
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500 border-t pt-4 w-full">
        <p>© Cartiva 2025. All rights reserved.</p>
        <a 
          href="/terms" 
          className="text-blue-500 hover:underline mt-1 inline-block"
        >
          Terms & Conditions
        </a>
      </footer>
    </div>
  );
};

export default Home;
