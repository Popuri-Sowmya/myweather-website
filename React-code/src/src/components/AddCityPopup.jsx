import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../cityActions';
import axios from 'axios';

const AddCityPopup = ({ onClose }) => {
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleAddCity = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd377a739d8ed07604d36dc7efa406bc&units=metric`);
            dispatch(addCity(cityName));
            onClose();
        } catch (error) {
            console.error('Error fetching weather data:', error);
            console.log(error);
            if (error.response && error.response.status === 404) {
                setError('City not found. Please enter a valid city name.');
            } else {
                setError('Error fetching data from the API. Please try again later.');
            }
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-black text-white p-6 rounded-lg border-4 border-green-400 shadow-lg w-full max-w-md">
                <h2 className="text-xl mb-4">Add New City</h2>
                <input
                    type="text"
                    className="p-2 mb-4 bg-gray-900 border border-gray-300 rounded w-full"
                    placeholder="Enter city name"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex justify-end">
                    <button
                        className="p-2 bg-green-400 text-black rounded mr-2 hover:bg-green-500"
                        onClick={handleAddCity}
                    >
                        Add
                    </button>
                    <button
                        className="p-2 bg-white border border-gray-300 text-gray-700 rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCityPopup;