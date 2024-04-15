import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentcity, removeCity } from '../cityActions';
import AddCityPopup from './AddCityPopup';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const cities = useSelector(state => state.city.cities);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleRemoveCity = (cityName) => {
    dispatch(removeCity(cityName));
  };

  const handleViewWeather = (cityName) => {
    dispatch(currentcity(cityName));
    console.log(`View weather for ${cityName}`);
    navigate("/weather");
  };

  return (
    <div className="bg-black flex justify-center items-center min-h-screen">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-3xl w-full mb-80">
        <h2 className="text-3xl mb-4 text-green-400">Check weather in a city</h2>
        <div className="flex">
          <input
            type="text"
            className="p-2 mr-2 rounded border border-gray-300 bg-gray-900 text-white flex-grow"
            placeholder="Enter city"
            value={city}
            onChange={handleInputChange}
          />
          <button
            className="p-2 bg-green-400 rounded text-black hover:bg-green-500"
            onClick={() => handleViewWeather(city)}
          >
            Search
          </button>
        </div>
        {/* Display cities */}
        <div className="mt-4">
          <h3 className="text-xl mb-2">Your cities</h3>
          {cities.length === 0 ? (
            <p>No cities added</p>
          ) : (
            <ul>
              {cities.map((cityName, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-900 p-2 mb-2 rounded">
                  <span>{cityName}</span>
                  <div>
                    <button
                      className="bg-green-200 text-black p-2 rounded mr-2 hover:bg-green-300"
                      onClick={() => handleViewWeather(cityName)}
                    >
                      View Weather
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                      onClick={() => handleRemoveCity(cityName)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4">
          <button
            className="p-2 bg-green-400 rounded text-black hover:bg-green-500"
            onClick={() => setShowPopup(true)}
          >
            Add New City
          </button>
        </div>
        {showPopup && <AddCityPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}

export default Home;
