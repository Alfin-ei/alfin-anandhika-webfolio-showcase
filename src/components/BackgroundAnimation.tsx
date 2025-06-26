
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background"></div>
    </div>
  );
};

export default BackgroundAnimation;
