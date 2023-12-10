import { useState, useEffect } from "react";

export function useFetch(url) {
  const [weather, SetWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("url")
      .then((response) => Response.json())
      .then((weather) => SetWeather(weather))
      .finally(() => setLoading(false));
  }, []);

  return { weather, loading };
}