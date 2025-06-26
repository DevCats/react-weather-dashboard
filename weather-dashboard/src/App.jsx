import { useState, useEffect } from 'react'
import { getCoords } from './utils/geolocation.js'
import { fetchData } from './api/index.js'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import './App.css'

// !!! TODO: 
    // - Possible to further separate API logic?
        // - Dedicated node server to handle API requests
            // - Also ensures API keys aren't exposed to the client
            // - Allows for better error handling
    // - Better way to separate hourly and daily data?
    // - Make mobile responsive - currently developed at 375px viewport width
    // - Ensure lat/lon localStorage items are cleared before render

function App() {
    const [coords, setCoords] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [currentWeather, setCurrentWeather] = useState('');
    const [forecastData, setForecastData] = useState('');

    // Get coordinates from device location
    useEffect(() => {
        getCoords();
        setCoords(`${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}`);
    }, []);

    // Get current weather data based on device location
    useEffect(() => {
        let client = fetchData('current.json', `${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}`);
        let data = client.request();
        data.then((response) => {
            setCurrentLocation(response.data.location);
            setCurrentWeather(response.data.current);
        })
        .catch((error) => {
            console.error(error); // !!! TODO: Error feedback for user
        });
    }, [coords]);

    // Get hourly/daily forecasted weather data based on device location
    useEffect(() => {
        let client = fetchData('forecast.json', `${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}&days=8`);
        let data = client.request();
        let forecastData = {};

        data.then((response) => {
            // Get hourly forecast data
            let hourlyData = response.data.forecast.forecastday[0].hour.filter((obj) => {
                // Only return hourly data that is in the future
                return obj.time_epoch > (Date.now() / 1000);
            });

            // Get daily forecast data
            let dailyData = response.data.forecast.forecastday;
            // Remove current day from array
            dailyData.shift();

            // Add both data sets to a single object
            forecastData.hourlyData = hourlyData;
            forecastData.dailyData = dailyData;

            setForecastData(forecastData);
        })
        .catch((error) => {
            console.error(error); // !!! TODO: Error feedback for user
        })
    }, [coords]);

    return (

        <>
            <Nav 
                currentLocation={ currentLocation }
                coords={ coords }
                setCoords={ setCoords }
            />
            <Main 
                currentWeather={ currentWeather }
                forecastData={ forecastData }
            />
        </>
    )
}

export default App
