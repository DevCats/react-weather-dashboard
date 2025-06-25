import { useState, useEffect } from 'react'
import { getCoords } from './utils/geolocation.js'
import { fetchData } from './api/index.js'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import './App.css'

// !!! TODO: 
    // - Possible to further separate API logic?
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

    // Get forecasted weather data based on device location
    useEffect(() => {
        let client = fetchData('forecast.json', `${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}&days=8`);
        let data = client.request();
        let forecastData = {};

        data.then((response) => {
            let hourlyData = response.data.forecast.forecastday[0].hour.filter((obj) => {
                return obj.time_epoch > (Date.now() / 1000);
            });

            let dailyData = response.data.forecast.forecastday;
            dailyData.shift();

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
