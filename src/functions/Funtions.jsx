//import {  useState } from "react";
import { WEATHER_KEY } from "../keys/Keys";

/**
 * This function retrieves a list of up to 5 cities that match the provided city and country using the
 * OpenWeatherMap API.
 * @returns The function `getCitys` is returning a Promise that resolves to an array of objects
 * containing information about the cities that match the provided `city` and `country` parameters. The
 * information includes the city's name, country code, latitude, and longitude.
 */
export async function getCitys(city, country) {
  const result = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${WEATHER_KEY}`
  );
  const data = await result.json();
  //console.log(data);
  return data;
}

/**
 * This function retrieves weather data from the OpenWeatherMap API based on latitude and longitude
 * coordinates.
 * @returns The function `getWeather` is returning a Promise that resolves to an object containing
 * weather data for the specified latitude and longitude. The weather data is obtained by making a
 * request to the OpenWeatherMap API using the provided latitude, longitude, and API key. The data is
 * returned in JSON format.
 */
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
