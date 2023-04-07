import { useState, useEffect } from "react";

export default function useFetch<T>(url: string, init?: RequestInit | undefined) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    async function fetchData() {
      try {
        const response = await fetch(url, init);
        const json = await response.json();
        setData(json);
      } catch (e: unknown) {
        const error = e as Error;
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, init]);

  return { data, loading, error };
}
