//import {  useState } from "react";
import { WEATHER_KEY } from "../keys/Keys";

export async function getCitys(city, country) {
  const result = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${WEATHER_KEY}`
  );
  const data = await result.json();
  //console.log(data);
  return data;
}

export async function getWeather(latitude, longitude) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&units=metric`
  );
  const data = await result.json();
  return data;
}


/**const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${WEATHER_KEY}`
  )
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  return { data: data, loading: loading, error: error }; */
