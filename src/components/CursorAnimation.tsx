
import React, { useEffect, useState } from 'react';

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    const updateTrailPosition = () => {
      setTrailPosition(prevPos => ({
        x: prevPos.x + (mousePosition.x - prevPos.x) * 0.1,
        y: prevPos.y + (mousePosition.y - prevPos.y) * 0.1,
      }));
    };

    window.addEventListener('mousemove', updateMousePosition);
    const trailInterval = setInterval(updateTrailPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearInterval(trailInterval);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <>
      <div
        className="manga-cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="manga-cursor-trail"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CursorAnimation;
