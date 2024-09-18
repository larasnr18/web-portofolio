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
    // <div
    //   className='fixed top-0 inset-0 duration-300 left-0 pointer-events-none'
    //   style={{
    //     width: '600px',
    //     height: '600px',
    //     transform: `translate3d(${mousePosition.x - 300}px, ${mousePosition.y - 300}px, 0)`,
    //     zIndex: 9999,
    //     // boxShadow: '0 0 40px rgba(0, 0, 0, 0.10 0 15px rgba(255, 255, 255, 0.7))',
    //     // background: "radial-gradient(600px at 489px 2055px, rgba(29, 78, 216, 0.15), transparent 80%)"
    //     background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15), rgba(240, 239, 233, 0.5) 80%)',
    //   }}
    // />

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
