import { useState, useEffect } from 'react';

/**
 *
 * @param {any, number} initialValue number | string | boolean, timeout: delay for updating value
 * @returns {number}
 */
const useDebounced = (initialValue, timeout = 0) => {
  const [debounced, setDebounced] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('updated');
      setDebounced(initialValue);
    }, timeout);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [initialValue, timeout]);

  return debounced;
};

export default useDebounced;
