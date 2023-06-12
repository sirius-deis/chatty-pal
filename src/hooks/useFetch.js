import { useState, useEffect } from 'react';

const baseURL = '';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseURL}${url}`, {
          credentials: 'include',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: abortController.signal,
          ...options,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();

        setData(data.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return [data, isLoading, error];
};

export default useFetch;
