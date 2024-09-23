"use client";

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition duration-100" 
      style={{
        width: '600px',
        height: '600px',
        transform: `translate3d(${mousePosition.x - 300}px, ${mousePosition.y - 300}px, 0)`,
        background: 'radial-gradient(circle, rgba(202, 138, 4, 0.1), transparent 80%)',
        zIndex: 9999
      }}/>
  );
};

export default CustomCursor;
