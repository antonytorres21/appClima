import { useEffect, useState } from "react";
import { WEATHER_KEY } from "../keys/Keys";

export function useFetchCity(city = "London", country = "GB") {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${WEATHER_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [city, country]);

  return { data: data, loading: loading, error: error };
}
