import { Card, Tooltip } from "flowbite-react";
import React from "react";

export default function WeatherInfoComponent({ weatherInfo }) {
  const sunrise = new Date(weatherInfo.sys.sunrise);
  const sunset = new Date(weatherInfo.sys.sunset);
  const sunriseTime = sunrise.toLocaleTimeString();
  const sunsetTime = sunset.toLocaleTimeString();
  return (
    <div className="flex items-center justify-center bg-slate-300 opacity-70 rounded">
      <Tooltip content="Data is in metric system">
        {
          <Card horizontal className="rounded">
            <h1 className="text-center font-bold">
              Weather:{" "}
              <span className="normal-text">{weatherInfo.weather[0].main}</span>
            </h1>
            <p className="font-bold">
              Description:{" "}
              <span className="font-normal">
                {weatherInfo.weather[0].description}
              </span>
            </p>
            <p className="font-bold">
              Temperature:{" "}
              <span className="font-normal">{weatherInfo.main.temp} °C</span>
            </p>
            <p className="font-bold">
              Feels like:{" "}
              <span className="font-normal">
                {weatherInfo.main.feels_like} °C
              </span>
            </p>
            <p className="font-bold">
              Max Temperature:{" "}
              <span className="font-normal">
                {weatherInfo.main.temp_max} °C
              </span>
            </p>
            <p className="font-bold">
              Min Temperature:{" "}
              <span className="font-normal">
                {weatherInfo.main.temp_min} °C
              </span>
            </p>
            <p className="font-bold">
              sunrise: <span className="font-normal">{sunriseTime} am</span>
            </p>
            <p className="font-bold">
              sunset: <span className="font-normal">{sunsetTime} pm</span>
            </p>
          </Card>
        }
      </Tooltip>
    </div>
  );
}
