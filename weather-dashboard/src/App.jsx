import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import './App.css'

function App() {
    const [locationData, setLocationData] = useState('');

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = (_position) => {
        const coords = _position.coords.toJSON();
        axios.get(`${import.meta.env.VITE_API_URL}/search.json?key=${import.meta.env.VITE_API_KEY}&q=${coords.latitude},${coords.longitude}`)
            .then(response => setLocationData(response.data[0]))
            .catch(error => console.error('Error fetching data: ', error)); // !!! TODO: Error feedback for user
    }

    const errors = (_error) => {
        console.error(`ERROR(${_error.code}): ${_error.message}`); // !!! TODO: Error feedback for user
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: 'geolocation' })
                .then((result) => {
                    switch (result.state) {
                        case 'granted':
                        case 'prompt':
                            navigator.geolocation.getCurrentPosition(success, errors, options);
                            break;
                        case 'denied':
                            console.error('Location permissions have been denied. Please check your settings'); // !!! TODO: Error feedback for user
                            break;
                        default:
                            return;
                    }
                })
        } else {
            console.log('Geolocation is not supported by this browser.'); // !!! TODO: Error feedback for user
        }
    }, []);

    return (

        <>
            <Nav 
                locationData={ locationData }
            />
            <Main />
        </>
    )
}

export default App
