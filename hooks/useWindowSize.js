import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function handleResize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}