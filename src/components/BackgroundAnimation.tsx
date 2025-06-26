
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-x"></div>
      
      {/* Floating Liquid Shapes */}
      <div className="liquid-container">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>
        <div className="liquid-shape liquid-shape-3"></div>
        <div className="liquid-shape liquid-shape-4"></div>
        <div className="liquid-shape liquid-shape-5"></div>
      </div>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"></div>
    </div>
  );
};

export default BackgroundAnimation;
