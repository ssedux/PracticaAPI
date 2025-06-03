import { useState } from 'react';

const useSaveData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Error al guardar los datos');
      return await res.json();
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { saveData, loading, error };
};

export default useSaveData;
