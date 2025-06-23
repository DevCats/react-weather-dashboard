import { useState, useEffect } from 'react'
import { getCoords } from './utils/geolocation.js'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import './App.css'

function App() {
    // const [locationData, setLocationData] = useState('');

    useEffect(() => {
        getCoords();
    }, []);

    return (

        <>
            <Nav />
            <Main />
        </>
    )
}

export default App
