import React, { useState, useEffect } from "react";
import WeatherFormComponent from "./WeatherForm";
import WeatherInfoComponent from "./WeatherInfo";
import Footer from "./Footer";

function Background() {
  const [weatherData, setWeatherData] = useState({});
  const [weatherState, setWeatherState] = useState("");
  const [b2, setB2] = useState(false);
  const [videoClass, setVideoClass] = useState("bg-tierragirando");

  useEffect(() => {
    videoWeather(weatherState);
  }, [weatherState]);

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setWeatherState(data.weather[0].main);
    setB2(true);
  };

  const videoWeather = (weatherState) => {
    const videoState = {
      Rain: "bg-lluvioso",
      Clouds: "bg-nublado",
      Fog: "bg-neblina",
      Haze: "bg-neblina",
      sunny: "bg-soleado",
      Clear: "bg-despejado",
    };
    const videoDefault = "bg-tierragirando";
    const videoStateWeather = videoState[weatherState] || videoDefault;
    setVideoClass(videoStateWeather);
  };

  return (
    <div
      className={`bg-cover  h-screen w-screen ${videoClass} items-center justify-center flex columns-2 transform`}
    >
      <WeatherFormComponent onWeatherData={handleWeatherData} />

      {b2 && <WeatherInfoComponent weatherInfo={weatherData} />}
      <Footer />
    </div>
  );
}

export default Background;
