import { useState, useEffect } from 'react'
import { getCoords } from './utils/geolocation.js'
import { fetchData } from './api/index.js'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import './App.css'

// !!! TODO: 
    // General:
        // - Find a font that correctly renders degrees celsius symbol (&#8451;)
        // - Test CSS breakpoints on actual devices
        // - Create Error component to display errors to client
        // - Create a Loader component to display when components are rendering

    // Geolocation:
        // - Data should only be retrieved IF allowed
            // - Currently API fires before user has allowed/denied location access
                // - Doesn't use their location though, passes undefined as both lat and lon
        // - Error handling
    
    // API:
        // - Create node server to handle requests to API
            // - Error handling
            // - Properly hide env variables

    // Settings:
        // - Toggle to change theme (light & dark)
        // - Toggle to change units (metric/imperial, locale (us/uk/ca), individual units)

    // HorizontalScrollWrapper:
        // - Test touch events on an actual touchscreen
        // - Display something to show users Forecast elements are scrollable

    // Hourly/DailyForecast
        // - Add units
        // - What other data might be useful to display?
        // - Display data more clearly

    

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
            console.error(error);
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
            console.error(error);
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
