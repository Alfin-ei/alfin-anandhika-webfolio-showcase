
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Manga Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Manga Halftone Pattern */}
      <div className="absolute inset-0 manga-halftone"></div>
      
      {/* Manga Liquid Energy Effects */}
      <div className="manga-liquid-container">
        <div className="manga-liquid-shape manga-liquid-1"></div>
        <div className="manga-liquid-shape manga-liquid-2"></div>
        <div className="manga-liquid-shape manga-liquid-3"></div>
        <div className="manga-liquid-shape manga-liquid-4"></div>
      </div>
      
      {/* Speed Lines Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform -rotate-6 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent transform rotate-6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Manga Style Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default BackgroundAnimation;
