import { WiRaindrops, WiStrongWind, WiHumidity, WiDaySunny, WiFog } from 'weather-icons-react'
import AdditionalWeatherInfo from "./AdditionalWeatherInfo.jsx"

const CurrentWeather = ({ currentWeather }) => {

    return (
        <>
            <div className="current-weather-wrapper">
                <div className="current-weather">
                    {/* <div className="weather-icon"></div> */}
                    <div className="temp-value">
                        <div className="real-temp">{Math.round(currentWeather.temp_c)} &#8451;</div>
                        <div className="feels-temp">feels like {Math.round(currentWeather.feelslike_c)} &#8451;</div>
                    </div>
                    <div className="summary">{currentWeather ? currentWeather.condition.text : ''}</div>
                </div>
                <div className="additional-info">
                    <AdditionalWeatherInfo 
                        _value={ currentWeather.precip_mm }
                        _units={ 'mm' }
                        _name={ 'Precipitation' }
                        _icon={ <WiRaindrops size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ currentWeather.wind_kph }
                        _units={ 'km/h' }
                        _name={ 'Wind Speed' }
                        _icon={ <WiStrongWind size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ currentWeather.humidity }
                        _units={ '%' }
                        _name={ 'Humidity' }
                        _icon={ <WiHumidity size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ currentWeather.uv }
                        // _units={ '' }
                        _name={ 'UV Index' }
                        _icon={ <WiDaySunny size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ currentWeather.vis_km }
                        _units={ 'km' }
                        _name={ 'Visibility' }
                        _icon={ <WiFog size={32} color={'#AEECEF'} /> }
                    />
                </div>
            </div>
            {console.log(currentWeather)}
        </>
    )
}

export default CurrentWeather