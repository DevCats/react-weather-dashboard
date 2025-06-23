import AdditionalWeatherInfo from "./AdditionalWeatherInfo.jsx"

const CurrentWeather = ({ currentWeather }) => {

    return (
        <>
            <div className="current-weather-wrapper">
                <div className="current-weather">
                    {/* <div className="weather-icon"></div> */}
                    <div className="temp-value">
                        <div className="real-temp">20 &#8451;</div>
                        <div className="feels-temp">18 &#8451;</div>
                    </div>
                </div>
                <div className="additional-info">
                    <AdditionalWeatherInfo 
                        _value={ 0.03 }
                        _units={ 'mm' }
                        _name={ 'Precipitation' }
                    />
                    <AdditionalWeatherInfo 
                        _value={ 25.6 }
                        _units={ 'kph' }
                        _name={ 'Wind Speed' }
                    />
                    <AdditionalWeatherInfo 
                        _value={ 59 }
                        _units={ '%' }
                        _name={ 'Humidity' }
                    />
                    <AdditionalWeatherInfo 
                        _value={ 3.9 }
                        // _units={ '' }
                        _name={ 'UV Index' }
                    />
                    <AdditionalWeatherInfo 
                        _value={ 10 }
                        _units={ 'km' }
                        _name={ 'Visibility' }
                    />
                </div>
            </div>
            {console.log(currentWeather)}
        </>
    )
}

export default CurrentWeather