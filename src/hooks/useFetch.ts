import { useState, useEffect } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(JSON.stringify(json, null, 2));
        setData(json);
      } catch (e: unknown) {
        const error = e as Error;
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}
