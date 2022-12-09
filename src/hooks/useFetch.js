import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(process.env.REACT_APP_API_URL + url);
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, [url]);

  return { data, loading, error };
};
