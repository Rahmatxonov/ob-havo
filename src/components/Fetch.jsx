import { useState, useEffect } from "react";

const Fetch = () => {
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=41.2646&lon=69.2163&units=imperial&APPID=f49653e026f6bd0c4262ce24fd7466ae"
      );

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {weatherData ? (
          <div>
            <p>Temperature: {weatherData.list[0].main.temp}°F</p>
            <p>City: {weatherData.city.name}</p>
          </div>
        ) : (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Fetch;
