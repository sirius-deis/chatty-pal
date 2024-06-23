const baseURL = "http://localhost:3000/api/v1/";

const fetchData = async (url, options) => {
  const response = await fetch(`${baseURL}${url}`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  let data;

  if (response.body) {
    try {
      data = await response.json();
    } catch (err) {
      return;
    }
  }

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export default fetchData;
