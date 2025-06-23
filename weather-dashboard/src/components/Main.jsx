import { useState, useEffect } from 'react'
import { fetchData } from '../api/index.js'
const Main = () => {
    const [currentWeather, setCurrentWeather] = useState('');

    useEffect(() => {
        let client = fetchData('current.json', `${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}`);
        let data = client.request();
        data.then((response) => {
            // console.log(response.data);
            setCurrentWeather(response.data.current);
        })
        .catch((error) => {
            console.log(error); // !!! TODO: Error feedback for user
        })
    }, []);
    
    return (
        <>
            <div className="main-wrapper">

            </div>
        </>
    )
}

export default Main