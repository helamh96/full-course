import { useEffect, useState } from "react";
import { get, set } from "idb-keyval";

const useIndexedDB = (key: string, initialValue: any) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const saved = await get(key);
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
  }, [key]);

  useEffect(() => {
    const updateData = async () => {
      try {
        await set(key, item);
      } catch (e: any) {
        console.warn("Something went wrong while updating data:", e);
      }
    };

    updateData();
  }, [item, key]);

  return [item, setItem, loading, error];
};

export default useIndexedDB;
