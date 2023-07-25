import { useEffect, useState } from "react";
import { get, set } from "idb-keyval";

const useStorage = (key: string, initialValue: any, storage: Storage) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const saved = await get(key, storage);
        if (saved) {
          setItem(saved);
        }
        setLoading(false);
      } catch (e: any) {
        console.warn("Something went wrong:", e);
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, [key, storage]);

  useEffect(() => {
    const updateData = async () => {
      try {
        await set(key, item, storage);
      } catch (e: any) {
        console.warn("Something went wrong while updating data:", e);
      }
    };

    updateData();
  }, [item, key, storage]);

  return [item, setItem, loading, error];
};

const useSessionStorage = (key: string, initialValue: any) => {
  return useStorage(key, initialValue, sessionStorage);
};

export default useSessionStorage;
