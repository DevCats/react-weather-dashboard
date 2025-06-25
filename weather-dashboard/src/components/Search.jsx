import { useState, useEffect } from 'react'
import { fetchData } from '../api/index.js'

const Search = ({ coords, setCoords }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [showResults, setShowResults] = useState(false);

    const onSearch = (_event) => {
        setSearchTerm(_event.target.value);
        let client = fetchData('search.json', `${_event.target.value}`);
        let data = client.request();
        data.then((response) => {
            console.log(response.data);
            setSearchResults(response.data);
            // If response.data.length > 0 this will be truthy
            setShowResults(response.data.length);
        })
        .catch((error) => {
            console.error(error); // !!! TODO: Error feedback for user
        });
    }

    const changeCoords = (_location) => {
        let coordinates = `${_location.lat},${_location.lon}`;
        // Update lat/lon values in localStorage
        if (localStorage.getItem('latitude') !== null) {
            localStorage.setItem('latitude', _location.lat);
        }
        if (localStorage.getItem('longitude') !== null) {
            localStorage.setItem('longitude', _location.lon);
        }
        setCoords(coordinates);
        setSearchTerm('');
        setShowResults(false);
    }
    
    return (
        <>
            <div className="nav-item nav-search">
                <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input 
                    type="text" 
                    name="search-city" 
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={onSearch}
                /> 
                {showResults && (
                    <div className="search-results-container">
                        <div className="search-results">
                            {searchResults.map((location) => (
                                <div 
                                    className="result" 
                                    key={location.id}
                                    onClick={() => changeCoords(location)}
                                >
                                    {location.name}, {location.country}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Search