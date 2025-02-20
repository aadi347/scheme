import React, { useState } from 'react';

const Home = () => {


  return (
    <div>
      <div className="relative text-center mt-10">
        <div className="absolute inset-0 -z-10 w-full h-full px-10 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560" className="w-full h-full rounded-xl">
            <g mask="url(#SvgjsMask1002)" fill="none">
              <rect width="1440" height="560" x="0" y="0" fill="url(#SvgjsLinearGradient1003)"></rect>
              <path d="M1440 0L1185.65 0L1440 172.51z" fill="rgba(255, 255, 255, .1)"></path>
              <path d="M1185.65 0L1440 172.51L1440 198.73L987.58 0z" fill="rgba(255, 255, 255, .075)"></path>
              <path d="M987.58 0L1440 198.73L1440 222.01L557.28 0z" fill="rgba(255, 255, 255, .05)"></path>
              <path d="M557.28 0L1440 222.01L1440 414.01L162.25 0z" fill="rgba(255, 255, 255, .025)"></path>
            </g>
            <defs>
              <mask id="SvgjsMask1002">
                <rect width="1440" height="560" fill="#ffffff"></rect>
              </mask>
              <linearGradient x1="15.28%" y1="-39.29%" x2="84.72%" y2="139.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1003">
                <stop stop-color="#0e2a47" offset="0"></stop>
                <stop stop-color="#00459e" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center space-x-6 px-20">
  {/* Logo on the left */}
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seal_of_Bihar.svg/1200px-Seal_of_Bihar.svg.png"  // Replace with your logo URL
    alt="Logo"
    className="h-16 w-16 object-contain border rounded-full border-white py-2 px-2" 
  />

  {/* Divider */}
  <div className="h-16 w-[1px] bg-white rounded-full"></div>

  {/* Text content */}
  <div className="text-left">
    <h1 className="text-4xl font-bold py-4 text-white">Welcome to the Scheme details website</h1>
    <p className="pb-4 text-white">Know your scheme at your fingertips</p>
  </div>
</div>

      </div>
    
    </div>
  );
}

export default Home;