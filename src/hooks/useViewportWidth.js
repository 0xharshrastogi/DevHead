import { useState, useEffect } from 'react';
import useDebounced from './useDebounced';

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const onResize = () => {
      setViewportWidth(() => window.innerWidth);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const debouncedValue = useDebounced(viewportWidth, 500);

  return debouncedValue;
};

export default useViewportWidth;
