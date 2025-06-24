import { useState, useEffect } from 'react'
import { getCoords } from './utils/geolocation.js'
import { fetchData } from './api/index.js'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import './App.css'

function App() {
    const [coords, setCoords] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [currentWeather, setCurrentWeather] = useState('');
    const [hourlyForecast, setHourlyForecast] = useState('');

    useEffect(() => {
        getCoords();
        setCoords(`${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}`);
    }, []);

    useEffect(() => {
        let client = fetchData('current.json', `${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}`);
        let data = client.request();
        data.then((response) => {
            // console.log(response.data);
            setCurrentLocation(response.data.location);
            setCurrentWeather(response.data.current);
        })
        .catch((error) => {
            console.error(error); // !!! TODO: Error feedback for user
        });
    }, [coords]);

    useEffect(() => {
        let client = fetchData('forecast.json', `${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}&days=7`);
        let data = client.request();
        data.then((response) => {
            let filteredData = response.data.forecast.forecastday[0].hour.filter((obj) => {
                return obj.time_epoch > (Date.now() / 1000);
            })
            console.log(filteredData);
            setHourlyForecast(filteredData);
        })
        .catch((error) => {
            console.error(error); // !!! TODO: Error feedback for user
        })
    }, [coords]);

    return (

        <>
            <Nav 
                currentLocation={ currentLocation }
            />
            <Main 
                currentWeather={ currentWeather }
                forecast={ hourlyForecast }
            />
        </>
    )
}

export default App
