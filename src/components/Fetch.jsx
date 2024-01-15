import { useState, useEffect } from "react";
import "../components/style.css";
import { IoSearch } from "react-icons/io5";
import { IoMdCloudOutline } from "react-icons/io";
const Fetch = () => {
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=41.2646&lon=69.2163&units=metric&&APPID=1e87220e4f4ec6ee7e701c613a61894e"
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
      <div className="card">
        <span className="card__span">
          <IoSearch className="search" />
          <input className="card__input" type="text" placeholder="Country" />
        </span>

        <div className="card_left">
          <h2 className="weather">Current Weather</h2>
          {weatherData ? (
            <div className="current">
              <h2 className="tashkent-title">{weatherData.city.name}</h2>
              <div className="tashkent">
                <IoMdCloudOutline className="cloud" />
                <p className="tashkent-text">
                  {weatherData.list[0].main.temp}°F
                </p>
              </div>
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
        <div className="card_right">
          {weatherData && (
            <div>
              <p>Temperature: {weatherData.list[0].main.temp}°C</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Fetch;
