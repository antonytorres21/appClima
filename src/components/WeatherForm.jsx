import React, { useState } from "react";
import { Button, Label, TextInput, Tooltip } from "flowbite-react";
import SelectCity from "./SelectCity";
import { getCitys, getWeather } from "../functions/Funtions";

function WeatherFormComponent({ onWeatherData }) {
  const [dataCity, setDataCity] = useState();
  const [b1, setB1] = useState(false);

  const handleCitySelect = async (city) => {
    const [lat, lon] = city.split(",");
    const weatherData = await getWeather(lat, lon);
    onWeatherData(weatherData);
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    const auxData = await getCitys(
      e.target.elements.city.value,
      e.target.elements.country.value
    );
    setDataCity(await auxData);
    setB1(true);
  };

  return (
    <div className="flex items-center justify-center mt-5 flex-col m-5 p-5">
      <form
        className="flex max-v-md flex-col gap-4 w-80 bg-slate-300 opacity-80 rounded justify-center items-center"
        onSubmit={OnSubmit}
      >
        <div>
          <div className="mb-2 justify-center flex">
            <Label htmlFor="city" value="City Name" />
          </div>
          <div className="justify-center flex">
            <Tooltip content="Example London">
              <TextInput
                className="w-30"
                id="city"
                placeholder="City"
                required
                type="text"
              />
            </Tooltip>
          </div>
        </div>

        <div>
          <div className="mb-2 justify-center flex">
            <Label htmlFor="country" value="Country Name" />
          </div>
          <div className="justify-center flex">
            <Tooltip content="Example GB for Britain">
              <TextInput
                className="w-30"
                id="country"
                type="text"
                placeholder="Country"
              />
            </Tooltip>
          </div>
        </div>

        <Button
          className="transition-colors hover:bg-green-500 right-5 left-5 w-60
          m-5"
          type="submit"
        >
          Search
        </Button>
      </form>
      {b1 && <SelectCity data={dataCity} onSelect={handleCitySelect} />}
    </div>
  );
}

export default WeatherFormComponent;

/**
 *     {data && <SelectedCity />}
 * 
 *const cityValue = city.value;
    const countryValue = country.value;
    const { data } = useFetchCity(cityValue, countryValue);
    console.log(data);
 */
