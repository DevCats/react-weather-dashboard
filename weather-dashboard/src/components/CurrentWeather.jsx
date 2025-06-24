import { WiRaindrops, WiStrongWind, WiCloud, WiHumidity, WiDaySunny, WiFog } from 'weather-icons-react'
import AdditionalWeatherInfo from "./AdditionalWeatherInfo.jsx"

const CurrentWeather = ({ currentWeather }) => {
    const { cloud, condition, temp_c, feelslike_c, humidity, precip_mm, uv, vis_km, wind_kph } = currentWeather;

    return (
        <>
            <div className="current-weather-wrapper">
                <div className="current-weather">
                    <div className="weather-icon">
                        <img src={currentWeather ? currentWeather.condition.icon : null}></img>
                    </div>
                    <div className="temp-summary-wrapper">
                        <div className="temp-value">
                            <div className="real-temp">{Math.round(temp_c)} &#8451;</div>
                            <div className="feels-temp">feels like {Math.round(feelslike_c)} &#8451;</div>
                        </div>
                        <div className="summary">{currentWeather ? condition.text : ''}</div>
                    </div>
                </div>
                <div className="additional-info">
                    <AdditionalWeatherInfo 
                        _value={ precip_mm }
                        _units={ 'mm/h' }
                        _name={ 'Precipitation' }
                        _icon={ <WiRaindrops size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ wind_kph }
                        _units={ 'km/h' }
                        _name={ 'Wind Speed' }
                        _icon={ <WiStrongWind size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ cloud }
                        _units={ '%' }
                        _name={ 'Cloud Cover' }
                        _icon={ <WiCloud size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ humidity }
                        _units={ '%' }
                        _name={ 'Humidity' }
                        _icon={ <WiHumidity size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ uv }
                        // _units={ '' }
                        _name={ 'UV Index' }
                        _icon={ <WiDaySunny size={32} color={'#AEECEF'} /> }
                    />
                    <AdditionalWeatherInfo 
                        _value={ vis_km }
                        _units={ 'km' }
                        _name={ 'Visibility' }
                        _icon={ <WiFog size={32} color={'#AEECEF'} /> }
                    />
                </div>
            </div>
            {/* {console.log(currentWeather)} */}
        </>
    )
}

export default CurrentWeather