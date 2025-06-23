import { useState, useEffect } from 'react'
import { fetchData } from '../api/index.js'
import Location from "./Location.jsx"
import Search from "./Search.jsx"
import Settings from "./Settings.jsx"

const Nav = () => {
    const [currentLocation, setCurrentLocation] = useState('');

    useEffect(() => {
        let client = fetchData('search.json', `${localStorage.getItem('latitude')},${localStorage.getItem('longitude')}`);
        let data = client.request();
        data.then((response) => {
            // console.log(response.data[0]);
            setCurrentLocation(response.data[0]);
        })
        .catch((error) => {
            console.error(error); // !!! TODO: Error feedback for user
        });
    }, []);


    return (
        <>
            <nav className="nav-wrapper">
                <Location 
                    currentLocation={ currentLocation }
                />
                <Search />
                <Settings />
            </nav>
        </>
    )
}

export default Nav