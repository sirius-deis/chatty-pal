import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const baseURL = 'http://localhost:3000/api/v1/';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.user.token);

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
            Authorization: `Bearer ${token}`,
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
