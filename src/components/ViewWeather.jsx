import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ViewWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const cityName = useSelector((state) => state.city.city);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        console.log("city name passed is",cityName)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd377a739d8ed07604d36dc7efa406bc&units=metric`);
        setWeatherData(response.data);
        setError(null); // Reset error state if data is fetched successfully
      } catch (error) {
        if (error.response && error.response.status === 404) {
            setError('City not found. Please enter a valid city name.');
        } else {
            setError('Error fetching data from the API. Please try again later.');
        }
      }
    };

    fetchWeatherData();
  }, [cityName]);

  return (
    <div className="bg-black text-green-400 h-screen flex justify-center items-center flex-col">
      {error && (
        <h1 className="text-2xl mb-8">{error}</h1>
      )}
      {weatherData && (
        <div className="text-center mb-8">
          <h1 className="text-5xl mb-6">Current weather in {weatherData.name}</h1>
          <h5 className="text-xl mb-4">{new Date().toLocaleString()}</h5>
        <div className="flex items-centre justify-center mb-4">
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" className="h-10 w-10 text-3xl" />
            <h3 className="text-3xl">{weatherData.weather[0].description}</h3>
          </div>
          <div className="mb-6">
            <h4>Temperature: {weatherData.main.temp}°C</h4>
            <h4>Humidity: {weatherData.main.humidity}%</h4>
            <h4>Wind Speed: {weatherData.wind.speed} m/s</h4>
          </div>
        </div>
      )}
      <div className="mb-20">
        <button
          className="p-2 bg-green-200 rounded mb-10 text-black hover:bg-green-500"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ViewWeather;
