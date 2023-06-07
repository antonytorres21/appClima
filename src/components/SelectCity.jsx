import React from "react";

export default function SelectCity({ data, onSelect }) {
  /**
   * This function handles a change event and calls a function with the selected city as an argument if
   * it is not the default value.
   */
  const handleChange = (event) => {
    if (event.target.value !== "default") {
      const selectedCity = event.target.value;
      onSelect(selectedCity);
    }
  };

  return (
    <div className="flex items-center justify-center mt-5 bg-slate-300 opacity-80 rounded m-5 p-5">
      {!data.length ? (
        <div className="justify-center items-center flex">
          <p className="text-center text-base">
            I don't know they have found cities with the data found, try again
          </p>
        </div>
      ) : (
        <div>
          <select name="City" id="city" onChange={handleChange} className="rounded-2xl">
            <option value="default">Select a city</option>
            {data?.map((item, index) => (
              <option key={index} value={`${item.lat},${item.lon}`}>
                {`${item.name}, ${item.country}${
                  item.state ? `, ${item.state}` : ""
                }`}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
