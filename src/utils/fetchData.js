const baseURL = 'http://localhost:3000/api/v1/';

const fetchData = async (url, options) => {
  try {
    const response = await fetch(`${baseURL}${url}`, {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
